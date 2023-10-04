export default function SoldMarker({ sold }) {

   if (sold) {
      return (
         <span 
            aria-label="This artwork is unavailable" 
            class="w-4 h-4 rounded-full rotate-45  absolute bottom-2 left-2 shadow-lg shadow-black backdrop-blur-md bg-white/80 dark:bg-black/80 dark:shadow-white"
         >
         </span>
      )
   }
}