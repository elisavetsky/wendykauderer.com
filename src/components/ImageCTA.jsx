export default function ImageCTA({children, image}) {
   return (
      <div className="transition-colors duration-700 max-w-xl w-fit font-medium text-2xl mt-2 px-5 md:px-0 md:pr-5 lg:font-medium lg:text-3xl">
         <div className="flex flex-col gap-4 md:grid md:grid-flow-col md:auto-cols-auto lg:min-w-[13rem] lg:max-w-[14rem] lg:grid-flow-row lg:gap-6">{children}</div>
         <span className="flex mt-5 lg:mt-10 border-b-slate-800 border-b dark:border-b-zinc-100"></span>
      </div>
   )
}