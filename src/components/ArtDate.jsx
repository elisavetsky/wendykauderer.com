import { humanDate } from "../utils/textTools.js";

export default function ArtDate({ date }) {
   return (
      <time datetime={date} class="transition-colors flex items-center text-xs opacity-80 font-medium mr-4 mb-4 text-center flex-shrink-0 uppercase ">
         {humanDate(date)}
      </time>
   )
}