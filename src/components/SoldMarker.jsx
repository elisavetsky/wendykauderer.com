export default function SoldMarker({ sold }) {

   if (sold) {
      return (
         <span 
            aria-label="This artwork is unavailable" 
            class="w-4 h-4 rounded-full rotate-45 absolute bottom-2 left-2 border shadow-md shadow-black/70 border-black/40 backdrop-blur-md bg-white/80 dark:bg-black/80 dark:border-white/40"
         >
         </span>
      )
   }
}