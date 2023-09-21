// import Sitewide Config
import * as SitewideConfig from "../configuration/SitewideConfig.md"

// import components
import Logo from "./Logo.jsx";
import Link from "./Link.jsx";


export default function Footer() {
   return (
      <footer class="h-80 font-light border-t-slate-400 border-t text-slate-800 dark:border-t-slate-500 dark:text-slate-100">
         <div class="h-full px-5 pt-20 pb-10 flex flex-col mx-auto max-w-screen-2xl justify-between sm:text-right md:px-6 md:items-center lg:flex-row lg:items-end">
            <div class=" self-start text-xl relative lg:self-end">
               <Link
                  href="/"
                  inline
                  transition="transition"
                  classes="motions-safe:hover:-translate-y-[2px] motion-safe:hover:translate-x-[2px] hover:text-slate-400 dark:hover:text-slate-400"
               >
                  {SitewideConfig.frontmatter.site_name}
               </Link>
            </div>
            <div class="w-full flex flex-wrap sm:flex-wrap-nowrap sm:w-full sm:flex-row lg:justify-end">
               <span class="transition-colors w-full sm:w-fit sm:mr-3">Powered by Astro</span>
               <span class="transition-colors hidden sm:block sm:mr-3"> | </span>
               <span class="transition-colors mr-1">A website by</span>
                  <Link
                     href={SitewideConfig.frontmatter.developer_site_url}
                     inline
                     classes="hover:text-slate-400 dark:hover:text-slate-400"
                  >
                     {SitewideConfig.frontmatter.developer_name}
                  </Link>
               
            </div>
         </div>
      </footer>
   )
}