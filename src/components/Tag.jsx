import Link from "./Link.jsx"

export default function Tag({title, slug, artType}) {
   const commonClasses = "transition-colors h-fit px-2 py-0.5 last-of-type:mr-0 flex items-center rounded-lg"

   return (
      
      <Link 
         inline 
         href={`/tags/${slug}`}
         classes="no-underline rounded-lg"
      >
         <span 
            title={title}
            data-pagefind-index-attrs="title"
            className={`${commonClasses} border border-black/10 bg-gray-300/30 hover:bg-gray-500/30 dark:border-white/10 dark:bg-gray-700/30 dark:hover:bg-gray-900/30`}
         >
            {title}
         </span>
      </Link>
   )
}