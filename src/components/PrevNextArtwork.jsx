import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PrevNextArtwork({prevEntry, nextEntry}) {

   // Do not render this if there is nothing previous or next
   if (prevEntry ?? nextEntry) {
      return (
         <div className='flex fixed z-30 bottom-0 left-0 md:px-8 w-full gap-4'>
            <span className='hidden md:px-6 md:block md:min-w-[16rem] md:w-3/12'></span>
            <nav 
               aria-label={`previous ${prevEntry?.data.art_type ?? nextEntry?.data.art_type} and next artwork navigation`}
               className="px-4 w-full z-50 text-sm py-4 left-auto sm:right-0 sm:w-[42%] sm:ml-auto sm:min-w-[17rem] md:px-4 md:w-9/12 lg:w-5/12"
            >
            <div className='grid grid-cols-2 justify-between w-full gap-3 '>
               {prevEntry &&
                  <a 
                     href={`/${prevEntry.data.art_type}/${prevEntry.slug}`} 
                     aria-label={`Previous ${prevEntry.data.art_type}`}
                     className="group bg-white/50 backdrop-blur-lg transition-colors border-2 items-end flex justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-white/30 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/20  sm:flex-col sm:items-start md:flex-row md:items-center"
                  >
                     <ArrowLeftIcon className='w-5 xl:w-8 transition motion-safe:group-hover:-translate-x-1' aria-hidden />
                     <span className="">{prevEntry.data.title}</span>
      
                  </a>
               }
               {nextEntry &&
                  <a 
                     href={`/${nextEntry.data.art_type}/${nextEntry.slug}`} 
                     aria-label={`Next ${nextEntry.data.art_type}`}
                     className="group bg-white/50 backdrop-blur-lg text-left transition-colors col-start-2 border-2 items-end flex flex-row-reverse justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-white/30 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/20 sm:flex-col sm:text-right md:flex-row-reverse md:items-center"
                  >
                     <ArrowRightIcon className='w-5 xl:w-8 transition motion-safe:group-hover:translate-x-1' aria-hidden />
                     <span className="">{nextEntry.data.title}</span>
                  </a>
               }
            </div>
               
            </nav>
         </div>
      )
   }
}