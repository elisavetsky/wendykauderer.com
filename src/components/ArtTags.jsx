// import components
import Tag from "./Tag.jsx";

export default function ArtTags({tags, classes, listClasses}) {
   const commaSeparatedTags = tags.map((tag) => tag.data.title).join(", ");

   return (
      <div 
         data-pagefind-meta={`tags:${commaSeparatedTags}`}
         className={`not-prose text-sm font-sans flex items-start ${classes}`}
         aria-label="Artwork tags"
      >
         <ul className={`flex flex-wrap py-0.5 gap-1.5 ${listClasses}`}>
            
            {tags.map((tag) => {
                  return (
                     <Tag
                        key={tag.id}
                        title={tag.data.title.toLowerCase()} 
                        slug={tag.id}
                     />
                  )
            })}
         </ul>
      </div>
   )
}
