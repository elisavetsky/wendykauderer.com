// import sitewide sections for footer
import { frontmatter } from "../../configuration/SitewideConfig.md";
const sections = frontmatter.sections;

// import components
// import Header from "../components/Header.astro"
import Footer from "../../components/Footer.jsx";

export default function MainFlexLayout({ header, children }) {

   return (
      <div className="flex flex-col md:flex-row  mx-auto grow items-start min-w-full max-w-screen-2xl gap-4">
         {header}
         {/* <Header /> */}
         <div className="relative w-full text-primary-text dark:text-primary-dark-text m-auto flex flex-col min-h-[125vh] grow md:pr-5 md:w-9/12 lg:m-0">
            <main id="main-content" className="max-[233px]:mt-10 pb-16 pt-20 md:pt-20">
               {children}
               
            </main>
            <Footer footerNav={sections} />
         </div>
      </div> 
   )
}