export default function ImageCTA({children, image}) {
   return (
      <div className="transition-colors duration-700 drop-shadow-lg min-w-max w-fit font-light text-2xl mt-2 px-5 leading-tight text-slate-800 dark:text-slate-300 md:px-0 lg:text-3xl">
         <div className="flex flex-col gap-4 md:flex-row lg:flex-col">{children}</div>
         <span className="flex mt-4 border-b-slate-400 border-b"></span>
      </div>
   )
}