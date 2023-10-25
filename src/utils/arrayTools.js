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

async function getSingleCMSImagePromise({
   selectedImageString,
   imageSrc, 
   imageAlt,
   getAsset
}) {

   // check if data is NOT undefined
   // AND if any image is chosen from the picker
   // w/`selectedImageString` check,
   // otherwise the CMS tries to resolve the 
   // checkerboard bg image thing
   if (
      selectedImageString &&
      imageSrc.path !== "empty.svg"
   ) {
      try {

         // construct image native w/Image API
         const img = new Image();
   
         // use passed in getAsset function from CMS
         img.src = imageSrc;
   
         // need to await the async nature of decoding
         await img.decode();
         
         return {
            src: img.src,
            width: img.width,
            height: img.height,
            alt: imageAlt
         }
      } catch (err) {
         console.error(`Image with src "${imageSrc}" has error:`, err)
      }

   } else {
      
      // return empty object if no image is selected yet
      return {}; 
   }
}

function getAdditionalCMSImagePromises({
   selectedImageString,
   immutableData,
}) {

   if (immutableData.get("data")) {

      // Check whether the immutable data 
      // is a Map of Lists or just a Map. 
      // If it is just a Map, throw a new error
      throw new Error('Unsupported data type, please pass in an array');

   } else {

      return immutableData.map((imageData) => {

         // get the `getAsset` function from each data object
         const getAssetFunc = imageData.getIn(["widgets", "image"]).props.children.props.getAsset;
         
         // get the promisedImage for each element
         // in the image array with this helper function
         const promisedImage = getSingleCMSImagePromise({
            selectedImageString: imageData.getIn(["data", "image"]),
            imageSrc: getAssetFunc(imageData.getIn(["data", "image"])),
            imageAlt: imageData.getIn(["data", "image_alt"]),
         })

         return promisedImage;
         
      // Finally, shallow convert to native JS Array
      // For performance reasons
      }).toArray(); 
   }
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

// restructure the fieldsMetaData tags array 
// to a similar structure to Astro's collection
function restructureTagsFieldsMetaData(tags) {
   
   // map over Immutable data,
   // destructure it and
   // return a similar structure to Astro
   return tags.map((val, key) => {

      // .toObject() Immutable.js method
      // is used to convert to a normal looking
      // {key: val} structure.
      // We just want the `val` for `data:` which 
      // looks like example: `{ title: 'still life' }`
      return {
         id: key,
         data: val.map((val, key) => val).toObject()
      }

   }).toArray() // shallow convert to regular JS
}

// this is the current tags array of strings 
// being selected. For some reason, the fieldsMetaData 
// does NOT update with currently selected tags
function restructureTags(tags) {
   
   if (tags) { // deal w/empty arrays

      return tags.map((tag) => {

         // must replace title with unslugified version
         // so that it is human readable
         return {
            id: tag,
            data: {
               title: tag.replace("-", " ")
            }
         }

      }).toArray(); // shallow convert to regular JS
   
   } else {
      return [];
   }
}


export { 
   convertToArray, 
   getPrevAndNextEntry, 
   moveToFirst, 
   getSingleCMSImagePromise,
   getAdditionalCMSImagePromises,
   resolveAndSetState,
   restructureTagsFieldsMetaData,
   restructureTags
};