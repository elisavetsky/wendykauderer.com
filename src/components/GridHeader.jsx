export default function GridHeader({children}) {
   return (
      <div className="top-0 sticky z-20 min-h-[7rem] sm:min-h-[5rem] md:min-h-[7rem] lg:min-h-[4rem]">
         <div className="absolute w-full">
            <div className="relative flex flex-col sm:grid sm:grid-cols-12 items-center justify-between md:flex lg:grid">
               {children}
            </div>
         </div>
      </div>
   )
}