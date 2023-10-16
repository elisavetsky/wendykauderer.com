export default function SectionTitle({title}) {
   return (
      <header class="col-span-3 self-start text-3xl md:text-xl font-semibold text-slate-900 transition-colors flex px-4 mb-4 lg:mb-0 dark:text-slate-100">
         {title &&
            <h1>{title}</h1>
         }
      </header>
   )
}

