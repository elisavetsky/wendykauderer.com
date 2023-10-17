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

export { convertToArray, getPrevAndNextEntry, moveToFirst };