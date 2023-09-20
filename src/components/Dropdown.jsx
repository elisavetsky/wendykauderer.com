// import components
import DropdownItem from "./DropdownItem.jsx";

export default function Dropdown({items}) {
   return (
      <ul class="dropdown-menu hidden transition-colors relative z-10 left-0 rounded-lg shadow-lg bottom-0 min-w-max w-44 py-2 bg-white/60 before:backdrop-blur-lg dark:bg-slate-800/60 md:left-[unset]">
         {items.map((item) => {
            return (
               <DropdownItem item={item}>
               
               </DropdownItem>
            )
         })}
      </ul>
   )
}