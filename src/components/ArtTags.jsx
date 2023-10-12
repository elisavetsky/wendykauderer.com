// import components
import Tag from "./Tag.jsx";

export default function ArtTags({tags}) {
   const commaSeparatedTags = tags.map((tag) => tag.data.title).join(", ");

   return (
      <div 
         data-pagefind-meta={`tags:${commaSeparatedTags}`}
         className="text-sm font-sans flex items-start mb-8" 
         aria-label="Artwork tags"
      >
         <div className="flex flex-wrap py-0.5 gap-1.5">
            
            {tags.map((tag) => {
                  return (
                     <Tag
                        key={tag.data.title}
                        title={tag.data.title.toLowerCase()} 
                     />
                  )
            })}
         </div>
      </div>
   )
}

