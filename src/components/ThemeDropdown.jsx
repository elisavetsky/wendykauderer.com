// import components
import { ThemeToggle } from "./ThemeToggle.jsx"

// import hooks
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import { useState, useEffect } from "react";

export default function Dropdown({children, CustomButton, buttonTitle}) {
   const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
   
   function handleClick() {
      setTheme(theme === "light" ? "dark" : "light")
   }

   useEffect(() => {
      console.log("hello", theme)
      if (theme === "dark") {
         console.log("theme is dark")
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
         console.log("removing dark")
         document.documentElement.classList.remove("dark");
         // localStorage.removeItem("theme");
      }
      localStorage.setItem("theme", theme)
   }, [theme]);

   return (
      <Menu 
         menuButton={({open}) => <ThemeToggle open={open} />}
         onItemClick={(e) => {
            e.stopPropagation = true;
            e.keepOpen = false;
         }}
         gap={8}
         direction="bottom"
         position="anchor"
         menuClassName="bg-white shadow-lg rounded-lg py-2 min-w-[10rem] z-30 dark:bg-slate-700"
      >
         <MenuItem
            onClick={(e) => {
               setTheme("light");
            }}
            className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
            Light
         </MenuItem>
         <MenuItem 
            onClick={(e) => {
               setTheme("dark");
            }}
            className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
            Dark
         </MenuItem>
         <MenuDivider className="border-slate-200 border" />
         <MenuItem 
            onClick={(e) => {
               localStorage.removeItem("theme");
               setTheme("");
            }}
            className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-600">
            System
         </MenuItem>
      </Menu>
   )
}