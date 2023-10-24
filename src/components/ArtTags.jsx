// import components
import Tag from "./Tag.jsx";

// import utils
import { moveToFirst } from "../utils/arrayTools.js";

export default function ArtTags({isCMS, inline, tags, dependencyArray, urlPath, classes, listClasses}) {

   // create a string for the search index to crawl through
   const commaSeparatedTags = tags?.map((tag) => tag.data.title).join(", ");

   // move the current tag that is present in the url path to the front of the array for better UX
   const orderedTags = moveToFirst({
      array: tags, 
      findFunction: (tag) => tag.id === urlPath?.split("/")[2]
   })

   return (
      <div 
         data-pagefind-meta={`tags:${commaSeparatedTags}`}
         className={`not-prose relative z-10 text-sm flex items-start pb-3 ${!inline && "transition-all fade-edge-t duration-400 h-14 max-h-fit overflow-y-hidden hover:h-full hover:fade-edge-y-none peer-checked/checkbox:h-full peer-checked/checkbox:fade-edge-y-none"} ${classes || ""}`}
      >
         <ul 
            aria-label="Artwork tags"
            className={`flex flex-wrap py-2 gap-1.5 ${listClasses || ""}`}
         >
            
            {tags?.map((tag) => {
               return (
                  <Tag
                     isCMS={isCMS}
                     key={tag.id}
                     title={tag.data.title.toLowerCase()} 
                     slug={tag.id}
                     urlPath={urlPath && urlPath}
                  />
               )
            })}
         </ul>
      </div>
   )
}
