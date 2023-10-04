import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PrevNextArtwork({prevEntry, nextEntry}) {

   // Do not render this if there is nothing previous or next
   if (prevEntry ?? nextEntry) {
      return (
         <nav 
            aria-label={`previous ${prevEntry?.data.art_type ?? nextEntry?.data.art_type} and next artwork navigation`}
            className="text-sm grid grid-cols-2 ml-auto justify-between py-4 gap-3 xl:text-base"
         >
            {prevEntry &&
               <a 
                  href={`/${prevEntry.data.art_type}/${prevEntry.slug}`} 
                  aria-label={`Previous ${prevEntry.data.art_type}`}
                  className="hyphens-auto break-all border-2 items-start flex flex-col justify-between gap-4 px-3 pb-2 pt-3 border-black/10 dark:border-white/10"
               >
                  <ArrowLeftIcon className='w-8' aria-hidden />
                  <span className="">{prevEntry.data.title}</span>

               </a>
            }
            {nextEntry &&
               <a 
                  href={`/${nextEntry.data.art_type}/${nextEntry.slug}`} 
                  aria-label={`Next ${nextEntry.data.art_type}`}
                  className="col-start-2 border-2 items-end flex flex-col justify-between gap-4 px-3 pb-2 pt-3 border-black/10 dark:border-white/10"
               >
                  <ArrowRightIcon className='w-8' aria-hidden />
                  <span className="self-end">{nextEntry.data.title}</span>
               </a>
            }
         </nav>
      )
   }
}