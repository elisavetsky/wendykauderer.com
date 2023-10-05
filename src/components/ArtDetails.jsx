import { humanDate } from "../utils/textTools.js";

export default function ArtDate({ date }) {
   return (
      <time dateTime={date} className="transition-colors flex items-center text-xs opacity-80 font-medium mr-4 mb-4 text-center flex-shrink-0 uppercase ">
         {humanDate(date)}
      </time>
   )
}