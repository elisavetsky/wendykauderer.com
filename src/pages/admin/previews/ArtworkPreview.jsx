// import components
import Link from "../../../components/Link.jsx";


export default function ArtworkPreview({entry, widgetsFor}) {
   return (
      <section className="py-10 m-auto max-w-screen-2xl">
         <div className="w-full flex flex-col flex-wrap justify-between md:flex-row md:px-4 md:gap-4">
            
            <Link
            href="/"
            inline
            transition="transition-all"
            classes="absolute hover:-translate-y-[2px] hover:translate-x-[2px] hover:text-slate-400 dark:hover:text-slate-400"
         >
            BIG TITLE
         </Link>
         </div>
      </section>
      
   )
}