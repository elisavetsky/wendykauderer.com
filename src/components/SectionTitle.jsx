// import utils
import { titleCase } from "../utils/textTools.js"

export default function SectionTitle({title}) {
   return (
      <header className="relative z-30 col-span-5 self-start text-xl font-semibold text-slate-900 drop-shadow-white transition-colors flex px-4 py-2.5 lg:mb-0 dark:text-slate-100 dark:drop-shadow-lg">
         {title &&
            <h1>{titleCase(title)}</h1>
         }
      </header>
   )
}

