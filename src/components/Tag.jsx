import Link from "./Link.jsx"

export default function Tag({title, artType}) {
   const commonClasses = "transition-colors h-fit px-2 py-0.5 last-of-type:mr-0 flex items-center rounded-lg"

   return (
      artType ? 
      <Link 
         inline 
         href={`/${artType}`}
         classes="no-underline rounded-lg "
      >
         <span 
            className={`${commonClasses} border border-gray-200 bg-gray-300/30 hover:bg-gray-400/30 dark:border-zinc-600 dark:bg-zinc-700/30 dark:hover:bg-zinc-900/30`}
         >
            {artType}
         </span>
      </Link>
      : 
      <span 
         className={`${commonClasses} border border-gray-200 bg-gray-300/30 dark:border-gray-600 dark:bg-gray-700/30`}
         data-pagefind-meta={`tag:${title}`}
      >
         {title}
      </span>
   )
}