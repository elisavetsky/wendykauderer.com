// import hooks
// import { Menu, MenuItem, MenuButton, MenuDivider, ControlledMenu, useClick, useMenuState } from "@szhsin/react-menu";
import { useRef, useState, useEffect } from "react";

// import sitewide config for border-radius
import { frontmatter } from "../configuration/SitewideConfig.md";
const curvedEdges = frontmatter.curved_image_edges;

// import components
import { ThemeToggle } from "./ThemeToggle.jsx"
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';

export default function Dropdown({children, CustomButton, buttonTitle}) {
   const [theme, setTheme] = useState(localStorage.getItem("theme"));
   const ref = useRef(null);
   // const [isOpen, setOpen] = useState(false);
   // const { openMenu, closeMenu, toggleMenu, ...menuProps } = useMenuState();
   // const [menuState, toggleMenu] = useMenuState();
   const skipOpen = useRef(false);
   // const anchorProps = useClick(menuState.state, toggleMenu);
   
   function handleClick() {
      setTheme(theme === "light" ? "dark" : "light")
   }

   const themeDictionary = [
		{
			label: "Light",
			value: "light"
		}, 
		{
			label: "Dark",
			value: "dark"
		},
		{
			label: "System",
			value: "system"
		}
	];

   const menuItems = themeDictionary.map(({label, value}, i) => {
		return (
			<li key={i} className="last-of-type:border-t last-of-type:mt-1.5 last-of-type:border-slate-300 dark:last-of-type:border-zinc-500">
				<MenuItem 
					role="option"
					aria-selected={theme === value ? true : false}
               className={`${theme === value && "decoration-2 underline underline-offset-4"} cursor-pointer text-md px-2 py-1 transition-all hover:text-white hover:bg-gray-500 dark:hover:bg-zinc-600`}
            >
               {label}
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
      
      switch (value) {
         case "Light": 
            
         event.target.setAttribute("aria-selected", true);
            setTheme("light");
            
            break;
         case "Dark":
            setTheme("dark");
            break;
         case "System":
				setTheme("system");
            // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				// 	setTheme("dark");
				// } else {
				// 	setTheme("light");
				// }
      }
   }

	const themeToggleState = () => {
      if (theme === "system") {
         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
         } else {
            return "light";
         }
      } else {
         return theme;
      }
   }

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");

      } else if (theme === "light") {
         document.documentElement.classList.remove("dark");

      } else if (theme === "system") {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
      localStorage.setItem("theme", theme);

   }, [theme]);

   return (
      <Wrapper className="w-fit relative" onSelection={handleSelection} >
			<Button 
				aria-label="Switch theme"
				className={`theme-toggle ${
				themeToggleState() === "dark" && "theme-toggle--toggled"} flex items-center text-xl ml-[0.4rem] my-1 mr-1.5 p-1.5 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-zinc-700 relative after:absolute after:transition-colors after:left-0 after:w-full after:h-full after:rounded-full after:hover:border after:border-black/30 after:dark:border-white/20 `}
			>
            <ThemeToggle currentTheme={themeToggleState()} />
         </Button>
			<Menu 
				role="listbox"
				className={`${curvedEdges && "rounded-lg"} ml-2 mt-4 absolute text-md backdrop-blur-lg bg-white/80 shadow-lg py-2 min-w-[10rem] z-30 border border-black/20 dark:border-white/20 dark:bg-zinc-800/80 max-[233px]:top-8 min-[234px]:left-11 min-[234px]:-bottom-3`}
			>
				<ul className="flex flex-col leading-loose">{menuItems}</ul>
			</Menu>
		</Wrapper>
	);
}