// Import SitewideConfig
import * as SitewideConfig from "../configuration/SitewideConfig.md";

export default function GalleryThumbs({images, setIndex}) {
   return (
      <nav className={`w-full grid gap-2 ${setIndex ? "grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" : "grid-cols-2"} `}>
         
         {images.optimizedImages?.map(({srcSet}, i) => {
            return (
               <button 
                  key={srcSet.values[0].url} 
                  onClick={setIndex && (() => setIndex(i + 1))} // add 1 to index because additional images come after mainImage
                  className={`overflow-hidden h-0 w-full pb-[100%] transition transition-translate ease-in-out delay-75 duration-300 sm:hover:shadow-xl sm:hover:shadow-black/20 sm:dark:hover:shadow-black/50 sm:motion-safe:hover:translate-x-px sm:motion-safe:hover:-translate-y-1 ${SitewideConfig.frontmatter.curved_image_edges && "sm:rounded-md"}`}
               >
                  <img 
                     src={setIndex ? srcSet.values[0].url : srcSet.values[3].url} 
                     alt={images.imagesWithAlts[i].image_alt}
                     className={`object-cover w-full`} 
                  />
               </button>
            )
         })}

      </nav>
   )
}