import { useEffect, useRef, useState } from 'react';

// import sitewide config for border-radius
import { frontmatter } from "../configuration/SitewideConfig.md";
const curvedEdges = frontmatter.curved_image_edges;

// imprt components
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';




export default function PrevNextArtwork({prevEntry, nextEntry}) {
   // const [isIntersecting, setIsIntersecting] = useState(false)

   // const prevNextRef = useRef(null);

   // const options = {
   //    root: document.querySelector(".fix-art-nav"),
   //    rootMargin: "0px",
   //    threshhold: 1.0
   // }

   // function handleIntersection(entries) {
   //    const [entry] = entries;

   //    console.log(entry.isIntersecting)
   //    setIsIntersecting(entry.isIntersecting)
   // }

   // useEffect(() => {
   //    const observer = new IntersectionObserver(handleIntersection, options)

   //    if (prevNextRef.current) {
   //       observer.observe(prevNextRef.current)
   //    }

   //    return () => {
   //       if (prevNextRef.current) {
   //          observer.unobserve(prevNextRef.current)
   //       }
   //    }
   // }, [prevNextRef, options])


   // Do not render this if there is nothing previous or next
   if (prevEntry ?? nextEntry) {
      return (
         <div
            transition:name={`PrevNextArtwork`}
            className={`flex z-[30] sticky bottom-0 left-0 w-full gap-4 h-fit sm:left-[unset] sm:min-w-full sm:w-[inherit] sm:pl-0 md:px-0 lg:w-full 2xl:flex-1 2xl:min-w-[unset] 2xl:max-w-[10rem] 2xl:top-4`}
         >
            {/* <span className='hidden md:px-6 md:block md:min-w-[16rem] md:w-3/12'></span> */}
            <nav 
               aria-label={`previous ${prevEntry?.data.art_type ?? nextEntry?.data.art_type} and next artwork navigation`}
               className="w-full text-sm pb-4 pt-6 2xl:py-0" 
            >
               <div className='grid grid-cols-2 justify-between w-full gap-3 2xl:flex 2xl:flex-col'>
                  {prevEntry &&
                     <a 
                        href={`/${prevEntry.data.art_type}/${prevEntry.slug}`} 
                        aria-label={`Previous ${prevEntry.data.art_type}`}
                        className={`group ${curvedEdges && "rounded-xl"} bg-white/30 backdrop-blur-lg transition-colors border-2 items-end flex justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-white/50 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/50 sm:flex-col sm:items-start md:flex-row md:items-center lg:flex-col lg:items-start 2xl:min-h-[7rem]`}
                     >
                        <ArrowLeftIcon className='w-5 xl:w-8 transition motion-safe:group-hover:-translate-x-1' aria-hidden />
                        <span className="">{prevEntry.data.title}</span>
         
                     </a>
                  }
                  {nextEntry &&
                     <a 
                        href={`/${nextEntry.data.art_type}/${nextEntry.slug}`} 
                        aria-label={`Next ${nextEntry.data.art_type}`}
                        className={`group ${curvedEdges && "rounded-xl"} bg-white/30 backdrop-blur-xl text-left transition-colors col-start-2 border-2 items-end flex flex-row-reverse justify-between gap-4 px-3 pb-2 pt-3 border-black/10 hover:bg-white/50 dark:bg-black/30 dark:border-white/10 dark:hover:bg-black/50 sm:flex-col sm:text-right md:flex-row-reverse md:items-center lg:flex-col lg:items-end 2xl:min-h-[7rem]`}
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