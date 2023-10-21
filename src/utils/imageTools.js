function getLatestOfArtType(artType, collection) {
   const allPaintings = collection.filter((entry) => entry.data.art_type === artType)
      .sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));
   
   // if nothing found, throw error
   if (allPaintings.length) {

      // return first image with specified artType
      const output = allPaintings[0].data.image;

      if (output) {
         return output;
      } else {
         throw new Error(`No property named "${artType}" found for "${artType}" art type`);
      }
   } else {
      console.warn(`No entries found for the specified art type: "${artType}"`);

      // return null if nothing is found so that app doesn't crash
      return null;
   }   
}

function getAspectRatio(width, height) {
   const difference = Math.floor(Math.abs(width - height))
   
   if (difference === 0) {
      return `1/1`
   } else {
      return `${width/difference}/${height/difference}`
   };

   
}

function getImageSrcSet(originalWidth, originalHeight, values) {

   // map over the 'values' property
   const ImageSrcSet = values.map((img) => {

		const imgWidth = Number(img.descriptor.slice(0, img.descriptor.length - 1));

      // return the properly structured data for yet-another-react-lightbox
		return {
			src: img.url,
			width: imgWidth,
			height: Math.floor((imgWidth * originalHeight) / originalWidth)
		}
	})

   return ImageSrcSet;
}

function createLightboxSlides({
   isCMS, images, imagesWithAlts
}) {
   
   // map over images and create the slide structure `yet-another-react-lightbox` expects

   // also change values based on if environment is CMS
   return images?.map(({
      filename, 
      src, 
      image_alt, 
      width, 
      height, 
      attributes, 
      srcSet
   }, i) => {
      return {
         type: "image",
         filename: filename ?? filename,
         src: src,
         alt: isCMS 
                  ? image_alt 
                  : imagesWithAlts[i].image_alt, // get alt by matching index from images
         width: isCMS 
                  ? width 
                  : attributes?.width,
         height: isCMS 
                  ? height 
                  : attributes?.height,
         srcSet: isCMS 
                  ? [] // pass empty array if environment is CMS
                  : getImageSrcSet(attributes.width, attributes.height, srcSet.values) // get srcSet for each additional image using my helper function
      } 
   })
}

export { getLatestOfArtType, getAspectRatio, getImageSrcSet, createLightboxSlides };