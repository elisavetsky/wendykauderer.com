function getAspectRatio(width, height) {
   const difference = Math.abs(width - height);

   return `${width/difference}/${height/difference}`
}

export { getAspectRatio };