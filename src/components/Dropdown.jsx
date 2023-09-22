// import components
import DropdownItem from "./DropdownItem.jsx";

// import hooks
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

export default function Dropdown({children, CustomButton, buttonTitle}) {

   return (
      <Menu menuButton={CustomButton ? ({open}) => <CustomButton /> : <MenuButton>{buttonTitle}</MenuButton>}>
         <MenuItem>{children}</MenuItem>
      </Menu>
      
      
      // 
         
         // {/* <ul class="dropdown-menu hidden transition-colors relative z-10 left-0 rounded-lg shadow-lg bottom-0 min-w-max w-44 py-2 bg-white/60 before:backdrop-blur-lg dark:bg-slate-800/60 md:left-[unset]">
         //    {() => {
         //       if (Array.isArray(items)) {
         //          items.map((item) => {
         //             return (
         //                <DropdownItem item={item}>
                        
         //                </DropdownItem>
         //             )
         //          })
         //       } else {
         //          return (
         //             <DropdownItem item={items}>
   
         //             </DropdownItem>
         //          )
         //       }
         //    }}
         // </ul> */}
   )
}