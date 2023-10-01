export default function ImageCTA({children, image}) {
   return (
      <div className="transition-colors duration-700 max-w-2xl w-fit font-medium text-3xl sm:text-4xl mt-10 px-0 md:pr-5 lg:font-medium lg:text-3xl lg:mt-0">
         <div className="gap-1 grid grid-flow-row auto-rows-auto lg:min-w-[15rem] lg:max-w-[16rem]">{children}</div>
      </div>
   )
}