// import components
import Link from "./Link.jsx"

export default function Tag({isCMS, title, slug, urlPath}) {

   const commonClasses = "transition-colors h-fit px-2 py-0.5 last-of-type:mr-0 flex w-max items-center rounded-lg font-medium"

   const isCurrentPage = urlPath && urlPath.split("/")[2] === slug;
   // console.log(urlPath.split("/")[2])
   // const isCurrentPage = "";

   return (
      
      <li>
         <Link 
            inline 
            href={isCMS ? null : `/tags/${slug}`}
            classes="no-underline rounded-lg"
            transition="transition-none"
         >
            <span 
               title={title}
               data-pagefind-index-attrs="title"
               className={`${commonClasses} ${isCurrentPage ? "bg-primary-tag-active-bg dark:bg-primary-dark-tag-active-bg/70 border-primary-tag-active-border/50 dark:border-primary-dark-tag-active-border/70" : "bg-gray-300/40 hover:bg-gray-500/40 dark:bg-gray-700/40 dark:hover:bg-gray-500/40 border-black/10 dark:border-white/10" } border`}
            >
               {title}
            </span>
         </Link>
      </li>
      
   )
}