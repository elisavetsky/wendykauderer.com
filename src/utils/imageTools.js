function getAspectRatio(width, height) {
   const difference = Math.abs(width - height)
   
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

export { getAspectRatio, getImageSrcSet };