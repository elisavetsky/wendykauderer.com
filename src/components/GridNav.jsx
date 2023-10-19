import { useState, useEffect } from "react";

export default function GridNav({children}) {
   const [expanded, setExpanded] = useState(false);

   function handleChange(e) {
      setExpanded(e.target.checked);
      console.log(e.target.labels)
   }

   useEffect(() => {

      // assign DOM elements variables within useEffect because of page lifecycle
      const expandCheckbox = document.querySelector("#expand-tags");
      const expandCheckboxLabel = document.querySelector("#expand-tags").labels[0];
      
      // set initial nav expanded state after page-load
      setExpanded(expandCheckbox.checked)

      // add change listener for when checkbox is checked
      expandCheckbox.addEventListener("change", handleChange);
      
      // add aria-expanded to button (which is a label) to expanded state
      expandCheckboxLabel.ariaExpanded = expanded;

      // cleanup effect
      return () => expandCheckbox.removeEventListener("change", handleChange);
   }, [expanded, handleChange])

   return (
      <nav
         aria-label="Artwork tags menu"
         className="px-4 sm:col-span-7 grid grid-cols-8 items-start gap-4"
      >

         {children}
         
      </nav>
   )
}