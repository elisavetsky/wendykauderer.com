function convertToArray(data) {
   if (data instanceof Array) {
      return data;
   } else {
      return [data];
   }
}

// Get the previous and next entry matching the art_type
function getPrevAndNextEntry({ currentEntry, artworkEntries }) {
   
   // Get the matching art_type array
   const matchingArtTypeEntries = artworkEntries.filter((artworkEntry) => {
      return artworkEntry.data.art_type === currentEntry.data.art_type
   });

   const numberOfEntries = matchingArtTypeEntries.length; // Get the number of entries matching the art_type
   
   // Grab the index of this current entry where it appears in the designated art_type.
   // If art_type only has one entry, convert it to an array!
   const currentEntryIndex = convertToArray(matchingArtTypeEntries).findIndex((artworkEntry) => artworkEntry.slug === currentEntry.slug);

   return {
      prevEntry: currentEntryIndex - 1 === numberOfEntries
         ? null
         : matchingArtTypeEntries[currentEntryIndex - 1], // Give a null value if there is no previous entry
      nextEntry: currentEntryIndex + 1 === numberOfEntries
         ? null
         : matchingArtTypeEntries[currentEntryIndex + 1] // Give a null value if there is no next entry
   }
}

// move desired array item to the beginning of array
function moveToFirst({array, findFunction}) {

   // return the first item in the array that satisfies the testing function
   // return all other items which do not satisfy the testing function
   // this keeps the order of the original array for the rest of the items
   return [
      ...array.filter(findFunction),
      ...array.filter((item) => !findFunction(item))
   ]
}

function promiseCMSImages({
   immutableData,
   imageAlt,
   getAsset
}) {

   return immutableData.map(async (imageData) => {

      const image_alt = imageAlt 
                           ? imageAlt
                           : imageData.getIn(["data", "image_alt"])
      
      const img = new Image();

      // change img.src based on whether incoming data is already a string
      if (typeof imageData === "string") {
         img.src = getAsset(imageData);
      } else {
         img.src = getAsset(imageData.getIn(["data", "image"])).toString();
      }

      console.log("SRC", img.src)

      await img.decode();

      return {
         src: img.src,
         width: img.width,
         height: img.height,
         image_alt: image_alt
      }
   
   }).toJS();
}

// Resolve array of promises and set state with resolved data
function resolveAndSetState({data, setStateFunction}) {

   // Promise the array then resolve it
   Promise.all(data).then((resolvedData) => {
      
      // execute the setStateFunction w/data
      setStateFunction(resolvedData);

   }).catch((err) => {

      // log some error
      console.error(err)
   })
}

export { 
   convertToArray, 
   getPrevAndNextEntry, 
   moveToFirst, 
   promiseCMSImages, 
   resolveAndSetState 
};