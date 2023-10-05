import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PrevNextArtwork({prevEntry, nextEntry}) {

   // Do not render this if there is nothing previous or next
   if (prevEntry ?? nextEntry) {
      return (
         <nav 
            aria-label={`previous ${prevEntry?.data.art_type ?? nextEntry?.data.art_type} and next artwork navigation`}
            className="fixed bottom-0 left-0 px-4 w-full z-50 text-sm grid grid-cols-2 ml-auto justify-between py-4 gap-3 sm:right-0 sm:min-w-[18rem] sm:w-3/12"
         >
            {prevEntry &&
               <a 
                  href={`/${prevEntry.data.art_type}/${prevEntry.slug}`} 
                  aria-label={`Previous ${prevEntry.data.art_type}`}
                  className="group bg-white/50 backdrop-blur-lg transition-colors border-2 items-end flex justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-black/10 dark:bg-black/30 dark:border-white/10 sm:flex-col sm:items-start"
               >
                  <ArrowLeftIcon className='w-5 sm:w-8 transition motion-safe:group-hover:-translate-x-1' aria-hidden />
                  <span className="">{prevEntry.data.title}</span>

               </a>
            }
            {nextEntry &&
               <a 
                  href={`/${nextEntry.data.art_type}/${nextEntry.slug}`} 
                  aria-label={`Next ${nextEntry.data.art_type}`}
                  className="group bg-white/50 backdrop-blur-lg text-left transition-colors col-start-2 border-2 items-end flex flex-row-reverse justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-black/10 dark:bg-black/30 dark:border-white/10 sm:flex-col sm:text-right"
               >
                  <ArrowRightIcon className='w-5 sm:w-8 transition motion-safe:group-hover:translate-x-1' aria-hidden />
                  <span className="self-end">{nextEntry.data.title}</span>
               </a>
            }
         </nav>
      )
   }
}