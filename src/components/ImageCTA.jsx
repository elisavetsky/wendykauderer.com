export default function ImageCTA({children, image}) {
   return (
      <div className="transition-colors duration-700 max-w-xl w-fit font-medium text-2xl mt-2 px-5 leading-tight md:px-0 md:pr-5 lg:font-light lg:text-3xl">
         <div className="flex flex-col drop-shadow-lg gap-4 md:grid md:grid-flow-col md:auto-cols-auto lg:min-w-[13rem] lg:max-w-[14rem] lg:grid-flow-row">{children}</div>
         <span className="flex mt-5 lg:mt-9 border-b-slate-400 border-b"></span>
      </div>
   )
}