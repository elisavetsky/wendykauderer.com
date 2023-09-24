import Link from "./Link.jsx"

export default function Tag({title, artType}) {
   const commonClasses = "transition-colors h-fit px-2 py-0.5 last-of-type:mr-0 flex items-center rounded-full "

   return (
      artType ? 
      <Link 
         inline 
         href={`/${artType}`}
         classes="no-underline"
      >
         <span 
            class={`${commonClasses} bg-cyan-100/70 hover:bg-cyan-100/70 dark:bg-cyan-900 dark:hover:bg-cyan-700`}
         >
            {artType}
         </span>
      </Link>
      : 
      <span class={`${commonClasses} bg-slate-200 dark:bg-slate-700`}>{title}</span>
   )
}