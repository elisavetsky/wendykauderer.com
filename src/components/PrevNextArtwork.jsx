export default function PrevNextArtwork({prevEntry, nextEntry}) {

   // Do not render this if there is nothing previous or next
   if (prevEntry !== null && nextEntry !== null ) {
      return (
         <nav className="flex justify-between py-4 gap-4" aria-label="previous artwork and next artwork navigation">
            {prevEntry &&
               <a href={`/${prevEntry.data.art_type}/${prevEntry.slug}`} className="items-start flex flex-auto flex-col">
                  <span>˿</span>
                  <span>{prevEntry.data.title}</span>
               </a>
            }
            {nextEntry &&
               <a href={`/${nextEntry.data.art_type}/${nextEntry.slug}`} className="items-end flex flex-auto flex-col">
                  <span>˲</span>
                  <span>{nextEntry.data.title}</span>
               </a>
            }
         </nav>
      )
   }
}