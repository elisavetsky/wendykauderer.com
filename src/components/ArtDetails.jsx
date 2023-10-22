// import components
import Link from "./Link.jsx";
import ArtTags from "./ArtTags.jsx";

export default function ArtDetails({ artType, sold, artTitle, artTags, dependencyArray }) {

   return (
      <>
         <header className="mt-10 text-md sm:mt-0 md:mt-10 lg:mt-0">
            <div 
               data-pagefind-ignore
               className="flex gap-2 transition-colors items-center text-xs uppercase font-medium mr-4 mb-4"
            >
               {/* <time 
                  data-pagefind-meta={`date:${humanDate(date)}`}
                  dateTime={date} 
                  className="text-center flex-shrink-0"
               >
                  {humanDate(date)}
               </time> */}
               <Link
                  href={`/${artType}`}
                  inline
                  classes="opacity-70"
                  data-pagefind-meta={`type:${artType}`}
               >
                  {artType}
               </Link>
               
               {sold &&
                  <>
                     <span className="text-[5px] opacity-80" aria-hidden={true} > ● </span>
                     <span
                     className="opacity-80"
                        data-pagefind-meta={`${sold && `Availability:Unavailable`}`}
                     > 
                        Unavailable
                     </span>
                  </>
               }
            </div>
            <h1>{artTitle}</h1>
         </header>
         <ArtTags 
            inline 
            tags={artTags} 
            dependencyArray={dependencyArray}
            classes="mb-8" 
         />
      </>
   )
}