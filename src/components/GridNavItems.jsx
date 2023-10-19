// import components
import ArtTags from "./ArtTags.jsx";

// import icons
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function GridNavItems({tagCollection, urlPath, children}) {
   return (
      <> 
         <ArtTags 
            tags={tagCollection} 
            urlPath={urlPath}
            classes="peer/tags col-span-7" 
            listClasses="lg:justify-end" 
         />
         <label 
            htmlFor="expand-tags" 
            role="button"
            aria-expanded={false}
            aria-label="Expand or collapse artwork tags"
            className="relative mt-0.5 z-30 transition-transform duration-300 peer-checked/checkbox:rotate-180 peer-focus-visible/checkbox:ring-2 peer-focus-visible/checkbox:ring-blue-500 cursor-pointer rounded-full p-1 h-9 w-9 justify-self-end col-span-1 sm:col-span-1"
         >
            <ChevronDownIcon aria-hidden={true} className="w-full h-full" />
         </label>
         <div className="transition-all z-0 left-0 top-0 absolute w-full h-24 bg-primary/40 backdrop-blur-2xl opacity-100 dark:bg-primary-dark/40 peer-hover/tags:h-[98%] sm:peer-hover/tags:h-[95%] peer-hover/tags:opacity-100 peer-checked/checkbox:opacity-100 peer-checked/checkbox:h-[98%] sm:peer-checked/checkbox:h-[95%] sm:rounded-b-md sm:h-14 md:h-24 lg:h-14"></div>
      </>
   )
}