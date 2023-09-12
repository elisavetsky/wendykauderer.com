function truncateText(text, sentences) {
   const searchStr = " ";
   const firstPeriod = text.indexOf(searchStr, 0);
   const secondPeriod = text.indexOf(searchStr, firstPeriod * 10);

   const output = text.slice(0, secondPeriod);

   return `${output} ...`;
}

function titleCase(words) {
   const wordArray = words.split(" ");

   return wordArray.map((word) => {
      return `${word[0].toUpperCase()}${word.substring(1)}`
   }).join(" ")
}

function humanDate(date) {
   const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: "UTC"
   }

   const readableDate = new Date(date).toLocaleDateString("en-US", options);

   return readableDate;
}



export { 
   truncateText, 
   humanDate,
   titleCase,
}