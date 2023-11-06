import { useEffect, useRef, useState } from 'react';

// import sitewide config for border-radius
import { frontmatter } from "../configuration/SitewideConfig.md";
const curvedEdges = frontmatter.curved_image_edges;

// imprt components
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PrevNextArtwork({isCMS, currentArtType, prevEntry, nextEntry}) {

   // Do not render this if there is nothing previous or next
   if (prevEntry ?? nextEntry) {
      return (
         // <div>
            
            <div
               className={`flex z-[30] sticky bottom-0 left-0 w-full gap-4 h-fit sm:left-[unset] sm:min-w-full sm:w-[inherit] sm:pl-0 md:px-0 lg:w-full 3xl:flex-1 3xl:min-w-[unset] 3xl:max-w-[10rem] 3xl:top-8`}
            >
               {/* <span className='hidden md:px-6 md:block md:min-w-[16rem] md:w-3/12'></span> */}
               <nav 
                  aria-label={`previous ${currentArtType} and next ${currentArtType}`}
                  className="relative w-full text-sm pb-4 3xl:py-0" 
               >
                  <div 
                     className={`absolute uppercase px-1.5 py-0.5 mb-1.5 ${nextEntry ? "right-0" : "left-0 "} -top-9 w-fit text-[0.7rem] text-primary-text/70 dark:text-primary-dark-text/70 border-2 ${curvedEdges && "rounded-lg"} bg-white/30 backdrop-blur-lg border-black/10 dark:bg-black/30 dark:border-white/10 3xl:right-auto 3xl:left-0 3xl:static 3xl:bg-transparent 3xl:dark:bg-transparent 3xl:border-none 3xl:dark:border-none`}
                  >
                     In {currentArtType}s:
                  </div>

                  <div className='grid grid-cols-2 justify-between w-full gap-3 3xl:flex 3xl:flex-col'>
                     {prevEntry &&
                        <a 
                           href={isCMS ? null : `/${prevEntry.data.art_type}/${prevEntry.slug}`} 
                           aria-label={`Previous ${prevEntry.data.art_type}`}
                           className={`group ${curvedEdges && "rounded-xl"} bg-white/30 backdrop-blur-lg transition-colors text-right border-2 items-end flex justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-white/50 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/50 sm:flex-col sm:items-start md:flex-row md:items-center sm:text-left lg:flex-col lg:items-start 3xl:min-h-[7rem] `}
                        >
                           <ArrowLeftIcon aria-hidden={true} className='min-w-[18px] w-5 xl:w-[30px] transition motion-safe:group-hover:-translate-x-1' />
                           <span className="line-clamp-1 break-all sm:break-normal sm:line-clamp-3">{prevEntry.data.title}</span>
            
                        </a>
                     }
                     {nextEntry &&
                        <a 
                           href={isCMS ? null : `/${nextEntry.data.art_type}/${nextEntry.slug}`} 
                           aria-label={`Next ${nextEntry.data.art_type}`}
                           className={`group ${curvedEdges && "rounded-xl"} bg-white/30 backdrop-blur-xl text-left transition-colors col-start-2 border-2  items-end flex flex-row-reverse justify-between gap-5 px-3 pb-2 pt-3 border-black/10 hover:bg-white/50 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/50 sm:flex-col sm:text-right md:flex-row-reverse md:items-center lg:flex-col lg:items-end 3xl:min-h-[7rem]`}
                        >
                           <ArrowRightIcon aria-hidden={true} className='min-w-[18px] w-5 xl:w-[30px] transition motion-safe:group-hover:translate-x-1' />
                           <span className="line-clamp-1 break-all sm:break-normal sm:line-clamp-3">{nextEntry.data.title}</span>
                        </a>
                     }
                  </div>
                  
               </nav>
            </div>
         // </div>
      )
   }
}