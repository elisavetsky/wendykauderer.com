export default function Tag({title, artType}) {
   const commonClasses = "transition-colors duration-700 h-fit px-2 py-0.5 last-of-type:mr-0 flex items-center rounded-full text-slate-700 dark:text-slate-300"

   return (
      artType ? 
      <span class={`${commonClasses} bg-cyan-50/70 dark:bg-cyan-950`}>{artType}</span>
      : 
      <span class={`${commonClasses} bg-slate-100 dark:bg-slate-800`}>{title}</span>
   )
}