// import components
import { ThemeToggle } from "./ThemeToggle.jsx"

// import hooks
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";

export default function Dropdown({children, CustomButton, buttonTitle}) {

   return (
      <Menu 
         menuButton={({open}) => <ThemeToggle open={open} />}
         onItemClick={(e) => {
            e.keepOpen = false;
         }}
         gap={8}
         direction="bottom"
         position="anchor"
         menuClassName="bg-white shadow-lg rounded-lg py-1 min-w-[10rem] z-30 dark:bg-slate-800"
      >
         <MenuItem className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
            Light
         </MenuItem>
         <MenuItem className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
            Dark
         </MenuItem>
         <MenuDivider className="border-slate-200 border" />
         <MenuItem className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
            System
         </MenuItem>
      </Menu>
   )
}