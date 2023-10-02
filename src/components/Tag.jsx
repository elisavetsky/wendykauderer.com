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
            className={`${commonClasses} border bg-slate-300/70 hover:bg-slate-400/70 dark:border-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-900`}
         >
            {artType}
         </span>
      </Link>
      : 
      <span className={`${commonClasses} border bg-gray-200 dark:border-zinc-500 dark:bg-gray-700`}>{title}</span>
   )
}