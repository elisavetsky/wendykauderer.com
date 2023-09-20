export default function ImageCTA({children, image}) {
   return (
      <div className="transition-colors duration-700 max-w-xl w-fit font-light text-2xl mt-2 px-5 leading-tight text-slate-800 dark:text-slate-300 md:px-0 md:pr-5 lg:text-3xl">
         <div className="flex flex-col drop-shadow-lg gap-4 md:grid md:grid-flow-col md:auto-cols-auto lg:min-w-[11rem] lg:max-w-[12rem] lg:grid-flow-row">{children}</div>
         <span className="flex mt-5 border-b-slate-400 border-b"></span>
      </div>
   )
}