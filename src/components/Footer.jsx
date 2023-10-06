// import Sitewide Config
import * as SitewideConfig from "../configuration/SitewideConfig.md"

// import components
import Logo from "./Logo.jsx";
import Link from "./Link.jsx";


export default function Footer({footerNav}) {
   return (
      <footer className="mt-auto sm:w-full">
         <div className="h-full w-full px-4 pt-48 pb-7 flex flex-col gap-20 mx-auto max-w-screen-2xl mr-auto justify-between sm:text-right md:items-center md:px-4 lg:flex-row lg:items-end xl:gap-64">
            <div className="text-left self-start lg:self-end">
               <Link
                  href="/"
                  inline
                  transition="transition"
                  classes="text-lg font-semibold motion-safe:hover:-translate-y-[2px] motion-safe:hover:translate-x-[2px]"
               >
                  {SitewideConfig.frontmatter.site_name}
               </Link>
               <ul className="text-md mt-4 border-b-gray-800 border-b-2 dark:border-b-zinc-100">
                  {footerNav.map(({title, href, dropdown_items}) => {
                     if (dropdown_items) {
                        return dropdown_items.map(({title, href}) => {
                           return (
                              <li 
                                 key={title} 
                                 className="mb-2 last-of-type:mb-0"
                              >
                                 <Link
                                    href={href}
                                    inline
                                    transition="transition"
                                    classes="motion-safe:hover:-translate-y-[2px] motion-safe:hover:translate-x-[2px]"
                                 >
                                    {title}
                                 </Link>
                              </li>
                           );
                        })
                     } else {
                        return (
                           <li
                              key={title} 
                              className="mb-2 last-of-type:mb-6"
                           >
                              <Link
                                 href={href}
                                 inline
                                 transition="transition"
                                 classes="motion-safe:hover:-translate-y-[2px] motion-safe:hover:translate-x-[2px]"
                              >
                                 {title}
                              </Link>
                           </li>
                        )
                     }
                  })}
               </ul>
            </div>
            <div className="flex flex-col w-full sm:w-fit sm:h-fit sm:items-start sm:self-start lg:items-end lg:self-end xl:flex-row xl:flex-auto xl:justify-between">
               <span className="transition-colors lg:ml-auto">A website by
                  <Link
                     href={SitewideConfig.frontmatter.developer_site_url}
                     inline
                     classes="ml-1"
                  >
                     {SitewideConfig.frontmatter.developer_name}
                  </Link>
                  </span>
               
            </div>
         </div>
      </footer>
   )
}