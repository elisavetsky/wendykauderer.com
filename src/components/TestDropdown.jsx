// import hooks
import { useState, useEffect } from 'react';

// import components
import { ThemeToggle } from './ThemeToggle';
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';

export default function TestDropdown() {
   const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

   const menuItemValues = ['Light', 'Dark', 'System'];

   const menuItems = menuItemValues.map((item, i) => {
		return (
			<li key={i}>
				<MenuItem 
               className="cursor-pointer text-md px-2 p-1 transition-all hover:bg-gray-100 dark:hover:bg-slate-700"
            >
               {item}
            </MenuItem>
			</li>
		);
	});

   

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

   function handleSelection(value, event) {
      console.log(value)
      event.stopPropagation;
      
      switch (value) {
         case "Light": 
            setTheme("light");
            break;
         case "Dark":
            setTheme("dark");
            break;
         case "System":
            localStorage.removeItem("theme");
            setTheme("");
            break;
      }
   }
   
   return (
		<Wrapper className="" onSelection={handleSelection} >
			<Button>
            <ThemeToggle />
         </Button>
			<Menu className="ml-4 text-md bg-white shadow-lg rounded-lg py-2 min-w-[10rem] z-30 dark:bg-slate-800">
				<ul>{menuItems}</ul>
			</Menu>
		</Wrapper>
	);
}