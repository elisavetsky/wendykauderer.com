import { humanDate } from "../utils/textTools.js";

export default function ArtDetails({ date, sold }) {
   return (
      <div className="flex gap-2 transition-colors items-center text-xs uppercase opacity-80 font-medium mr-4 mb-4">
         <time dateTime={date} className="text-center flex-shrink-0">
            {humanDate(date)}
         </time>

         {sold &&
            <>
               <span className="text-[5px]" aria-hidden={true} > ● </span>
               <span>Unavailable</span>
            </>
         }
      </div>
   )
}