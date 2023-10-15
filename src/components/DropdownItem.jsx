export default function DropdownItem({item}) {
   return (
      <li>
         <a class="block w-full px-3 transition-[inherit] hover:bg-slate-300/50 hover:text-slate-800 dark:hover:text-slate-100 dark:hover:bg-slate-700/50" href={item.href}>{item.title}</a>
      </li>
   )
}