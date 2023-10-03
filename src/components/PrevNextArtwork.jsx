export default function PrevNextArtwork({prevEntry, nextEntry}) {

   // Do not render this if there is nothing previous or next
   if (prevEntry ?? nextEntry) {
      return (
         <nav className="flex justify-between py-4 gap-4" aria-label="previous artwork and next artwork navigation">
            {prevEntry &&
               <div className="mr-auto">
                  <a href={`/${prevEntry.data.art_type}/${prevEntry.slug}`} className="w-fit items-start flex flex-col">
                     <span>˿</span>
                     <span>{prevEntry.data.title}</span>
                  </a>
               </div>
            }
            {nextEntry &&
               <div className="ml-auto">
                  <a href={`/${nextEntry.data.art_type}/${nextEntry.slug}`} className="w-fit items-end flex flex-col">
                     <span>˲</span>
                     <span>{nextEntry.data.title}</span>
                  </a>
               </div>
            }
         </nav>
      )
   }
}