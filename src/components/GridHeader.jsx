export default function GridHeader({children}) {
   return (
      <div class="top-0 sticky z-20 min-h-[7rem] sm:min-h-[5rem] md:min-h-[7rem] lg:min-h-[5rem]">
         <div class="absolute">
            <div class="relative flex flex-col sm:grid sm:grid-cols-12 items-center justify-between py-1 md:flex lg:grid">
               {children}
            </div>
         </div>
      </div>
   )
}