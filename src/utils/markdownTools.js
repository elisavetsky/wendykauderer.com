// Cool tweaked function from Aaron Hubbard 
// (https://www.aaronhubbard.dev/blogposts/text-from-module)
// This loads markdown files and parses them 
// and returns content of interest for the CMS
async function loadMarkdown(globEntries) {

   const promisedEntries = await Promise.all(
      globEntries.map(async ([path, resolver]) => {
         const { frontmatter, rawContent } = await resolver();

         return {
            frontmatter: frontmatter,
            body: rawContent(),
         };
   }))

   return promisedEntries;
}

export { loadMarkdown };