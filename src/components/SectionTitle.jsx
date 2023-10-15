export default function SectionTitle({title}) {
   return (
      <header class="text-xl font-semibold text-slate-900 transition-colors flex px-4 py-2 mb-3 z-20 dark:text-slate-100">
         {title &&
            <h1>{title}</h1>
         }
      </header>
   )
}

