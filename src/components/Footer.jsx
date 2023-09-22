// import Sitewide Config
import * as SitewideConfig from "../configuration/SitewideConfig.md"

// import components
import Logo from "./Logo.jsx";
import Link from "./Link.jsx";


export default function Footer() {
   return (
      <footer className="h-80  border-t-slate-400 border-t text-slate-800 dark:border-t-slate-500 dark:text-slate-100">
         <div className="h-full px-5 pt-20 pb-10 flex flex-col mx-auto max-w-screen-2xl justify-between sm:text-right md:px-0 md:items-center lg:flex-row lg:px-6 lg:items-end">
            <div className="flex-auto text-left self-start text-xl relative lg:self-end">
               <Link
                  href="/"
                  inline
                  transition="transition"
                  classes="motions-safe:hover:-translate-y-[2px] motion-safe:hover:translate-x-[2px] hover:text-slate-400 dark:hover:text-slate-400"
               >
                  {SitewideConfig.frontmatter.site_name}
               </Link>
            </div>
            <div className="text-sm flex flex-wrap sm:h-fit sm:flex-wrap-nowrap sm:flex-row sm:self-start sm:items-baseline lg:justify-end lg:self-end">
               <span className="transition-colors mr-1">A website by</span>
                  <Link
                     href={SitewideConfig.frontmatter.developer_site_url}
                     inline
                     classes="sm:mr-3 hover:text-slate-400 dark:hover:text-slate-400"
                  >
                     {SitewideConfig.frontmatter.developer_name}
                  </Link>
               <span className="transition-colors hidden sm:block sm:mr-3"> | </span>
               <span className="transition-colors w-full sm:w-fit">Powered by Astro</span>
               
               
            </div>
         </div>
      </footer>
   )
}