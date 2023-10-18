// import components
import ArtTags from "./ArtTags.jsx";

// import icons
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function GridNav({tagCollection, urlPath, children}) {
   return (
      <nav className="px-4 sm:col-span-7 grid grid-cols-8 items-start gap-4 ">

         {children}
         
         <ArtTags 
            tags={tagCollection} 
            urlPath={urlPath}
            classes="peer/tags col-span-7" 
            listClasses="lg:justify-end" 
         />
         <label for="expand-tags" className="relative mt-1.5 z-30 transition-transform duration-300 peer-checked/checkbox:rotate-180 peer-focus-visible/checkbox:ring-2  peer-focus-visible/checkbox:ring-blue-500 cursor-pointer rounded-full p-1 h-8 w-8 justify-self-end col-span-1 sm:col-span-1">
               <ChevronDownIcon className="w-full h-full drop-shadow-white" />
         </label>
         <div className="transition-all z-0 left-0 top-0 absolute w-full h-24 bg-transparent backdrop-blur-xl opacity-100 peer-hover/tags:h-[98%] sm:peer-hover/tags:h-[95%] peer-hover/tags:opacity-100 peer-checked/checkbox:opacity-100 peer-checked/checkbox:h-[98%] sm:peer-checked/checkbox:h-[95%] sm:rounded-b-md sm:h-14 md:h-24 lg:h-14"></div>
      </nav>
   )
}