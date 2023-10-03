function convertToArray(data) {
   if (data instanceof Array) {
      return data;
   } else {
      return [data];
   }
}

export { convertToArray };