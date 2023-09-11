function truncateText(text, sentences) {
   const searchStr = " ";
   const firstPeriod = text.indexOf(searchStr, 0);
   const secondPeriod = text.indexOf(searchStr, firstPeriod * 10);

   const output = text.slice(0, secondPeriod);

   return `${output} ...`;
}

function humanDate(date) {
   const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
   }

   const readableDate = new Date(date).toLocaleDateString(undefined, options);

   return readableDate;
}

export { truncateText, humanDate }