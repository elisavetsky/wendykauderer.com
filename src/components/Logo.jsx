export default function Logo({fontName, fontSize}) {
   return (
      <a href="/" className={`font-jamesarthur [font-size:clamp(4px,calc(4px+0.8vw),0.5rem)] decoration-0 px-2 flex items-center leading-10 sm:text-[0.5rem] ${fontSize ? fontSize : "md:text-[0.8rem]"}`}>
         Wendy Kauderer
      </a>
   )
}