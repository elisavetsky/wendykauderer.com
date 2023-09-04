function truncateTextToPeriod(text, sentences) {
   const output = text.slice(".");

   return output;
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

export { truncateTextToPeriod, humanDate }