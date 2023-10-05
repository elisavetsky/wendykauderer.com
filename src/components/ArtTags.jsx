// import components
import Tag from "./Tag.jsx";

export default function ArtTags({artType, tags}) {
   return (
      <div class="text-sm font-sans flex items-start mb-8">
         <div class="flex flex-wrap py-0.5 gap-1.5">
            <Tag artType={artType} />
            
            {tags.map((tag) => {
                  return (
                     <Tag title={tag.data.title.toLowerCase()} />
                  )
            })}
         </div>
      </div>
   )
}

