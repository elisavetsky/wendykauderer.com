// import components
import { ThemeToggle } from "./ThemeToggle.jsx"
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';

// import hooks
// import { Menu, MenuItem, MenuButton, MenuDivider, ControlledMenu, useClick, useMenuState } from "@szhsin/react-menu";
import { useRef, useState, useEffect } from "react";

export default function Dropdown({children, CustomButton, buttonTitle}) {
   const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
   const ref = useRef(null);
   // const [isOpen, setOpen] = useState(false);
   // const { openMenu, closeMenu, toggleMenu, ...menuProps } = useMenuState();
   // const [menuState, toggleMenu] = useMenuState();
   const skipOpen = useRef(false);
   // const anchorProps = useClick(menuState.state, toggleMenu);
   
   function handleClick() {
      setTheme(theme === "light" ? "dark" : "light")
   }

   const menuItemValues = ['Light', 'Dark', 'System'];

   const menuItems = menuItemValues.map((item, i) => {
		return (
			<li key={i} className="last-of-type:border-t last-of-type:border-slate-400">
				<MenuItem 
               className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-gray-200 dark:hover:bg-slate-600"
            >
               {item}
            </MenuItem>
			</li>
		);
	});

   function handleSelectedOption() {
      if (theme === "light") {
         return "true"
      }
   }

   function handleSelection(value, event) {
      console.log(event)
      event.stopPropagation;
      
      switch (value) {
         case "Light": 
            
         event.target.setAttribute("aria-selected", true);
            setTheme("light");
            
            break;
         case "Dark":
            setTheme("dark");
            break;
         case "System":
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					setTheme("dark");
				} else {
					setTheme("light");
				}
      }
   }

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
         // if (localStorage.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
         //    document.documentElement.classList.add("dark");
   
         //    // set theme state to dark
         //    setTheme("dark");
         // } else {
         //    console.log("NO DARK")
         //    document.documentElement.classList.remove("dark");
         //    localStorage.setItem("theme", "light")
         // }
      } else {
         document.documentElement.classList.remove("dark");
         // localStorage.removeItem("theme");
      }
      localStorage.setItem("theme", theme)
   }, [theme]);

   return (
      <Wrapper className="w-fit relative" onSelection={handleSelection} >
			<Button className="">
            <ThemeToggle />
         </Button>
			<Menu className="ml-2 mt-2 absolute text-md backdrop-blur-lg bg-white/80 shadow-lg rounded-lg py-2 min-w-[10rem] z-30 dark:bg-slate-800/80 md:left-11 md:-bottom-2.5">
				<ul>{menuItems}</ul>
			</Menu>
		</Wrapper>

		// <>
		// 	<button type="button" ref={ref} {...anchorProps}>
		// 		Menu
		// 	</button>

		// 	<ControlledMenu
		// 		{...menuState}
		// 		aria-label="Toggle theme menu"
		// 		anchorRef={ref}
		// 		initialMounted={true}
		// 		onClose={({ reason }) => {
		// 			if (reason === "blur") {
      //             console.log("blur")
                  
		// 				// skipOpen.current = true;
		// 				// setTimeout(() => (skipOpen.current = false), 300);
		// 			}
		// 			toggleMenu(false)
		// 		}}
		// 	>
		// 		<MenuItem>Cut</MenuItem>
		// 		<MenuItem>Copy</MenuItem>
		// 		<MenuItem>Paste</MenuItem>
		// 	</ControlledMenu>
		// </>
		// <Menu
		//    menuButton={({open}) => <ThemeToggle open={open} />}
		//    onItemClick={(e) => {
		//       e.stopPropagation = true;
		//       e.keepOpen = false;
		//    }}
		//    gap={8}
		//    direction="bottom"
		//    position="anchor"
		//    menuClassName="text-md bg-white shadow-lg rounded-lg py-2 min-w-[10rem] z-30 dark:bg-slate-800"
		// >
		//    <MenuItem
		//       onClick={(e) => {
		//          setTheme("light");
		//       }}
		//       className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-gray-100 dark:hover:bg-slate-700">
		//       Light
		//    </MenuItem>
		//    <MenuItem
		//       onClick={(e) => {
		//          setTheme("dark");
		//       }}
		//       className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-gray-100 dark:hover:bg-slate-700">
		//       Dark
		//    </MenuItem>
		//    <MenuDivider className="border-slate-100 border dark:border-slate-700" />
		//    <MenuItem
		//       onClick={(e) => {
		//          localStorage.removeItem("theme");
		//          setTheme("");
		//       }}
		//       className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-gray-100 dark:hover:bg-slate-700">
		//       System
		//    </MenuItem>
		// </Menu>
	);
}