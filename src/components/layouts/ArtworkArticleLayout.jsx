export default function ArtworkArticleLayout({lightbox, artDetails, bodyLength, content, prevNextArtwork, ...props} ) {
   return (
      <article 
         data-pagefind-body
         className="relative w-full flex flex-col justify-between sm:flex-row md:flex-col sm:px-4 sm:gap-4 md:gap-2 lg:gap-6 lg:flex-row " 
      >
         <div className="h-fit static top-8 sm:sticky md:static lg:sticky sm:w-3/5 md:w-full lg:7/12 3xl:w-full 3xl:max-w-full" >
            {lightbox}
         </div>
         <div className="flex flex-col h-full  px-4 prose prose-zinc prose-h1:font-medium prose-h1:mb-7 prose-a:no-underline dark:prose-invert sm:w-2/5 sm:max-w-[40%] sm:px-0 sm:pt-4 sm:sticky sm:top-0 md:pt-0 md:prose-lg md:w-full md:max-w-full md:static lg:sticky lg:pt-6 lg:prose-base lg:w-5/12 lg:min-w-[22rem] xl:prose-lg 3xl:w-full  3xl:flex-row 3xl:gap-4 3xl:justify-between">
            <div className="3xl:sticky 3xl:top-8 3xl:h-full 3xl:min-w-[26rem] 3xl:max-w-[26rem]">
               {artDetails}
               
               <div className="min-w-[100%] sm:max-h-[18rem] md:max-h-none lg:max-h-[20rem] xl:max-h-[23rem] 3xl:max-h-none">
                  {bodyLength > 310
                     ?  <div className="max-h-[inherit] max-w-[inherit] overflow-scroll sm:fade-edge-y sm:pb-44 md:fade-edge-y-none md:pb-0 md:max-h-none lg:fade-edge-y lg:pb-40 lg:max-h-[inherit] 3xl:fade-edge-y-none 3xl:pb-0 3xl:max-h-none">
                           {content}
                        </div>
                     :  <div className="pt-[0.3px] h-full sm:min-h-[18rem] md:min-h-0 lg:min-h-[20rem] lg:max-h-[inherit] xl:min-h-[23rem] 3xl:min-h-0">
                           {content}
                        </div>
                  }
               </div>
            </div>
            {prevNextArtwork}
         </div>
         {props.children}
      </article>
   )
}