// import react stuff which is only used with the CMS thanks to Astro!
import { useState, useEffect } from "react";

// import components
import Tag from "./Tag.jsx";

// import utils
import { moveToFirst } from "../utils/arrayTools.js";

export default function ArtTags({inline, tags, dependencyArray, urlPath, classes, listClasses}) {
   /*
   // useState stuff (only used in CMS)
   // const [ tags, setTags ] = useState([]);
   const [ cmsTags, setCmsTags ] = useState([]);

   // this useEffect sets the state of incoming CMS tag data
   useEffect(() => {

      
      // filter tags which are present in the current CMS collection
      // the dependencyArray tells us which are currently active
      // in the relation widget
      const currentCmsTags = tags.filter((tag) => dependencyArray.includes(tag.id));
      console.log("CURRENT IMMUT CMS", currentCmsTags)

      const matchedCmsTagsOrder = currentCmsTags.sort((a, b) => {
         return dependencyArray.indexOf(a.id) - dependencyArray.indexOf(b.id);
      })
      console.log(" ordered cms", matchedCmsTagsOrder)
      

      // temp solution because `fieldsMetaData` from CMS
      // does not update correctly
		setCmsTags(tags);

		return () => {}
	}, [tags])

   */

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
