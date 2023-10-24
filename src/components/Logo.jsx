export default function Logo({isCMS, fontName, fontSize}) {
   return (
      <a href={isCMS ? null : "/"} className={`font-jamesarthur [font-size:clamp(3px,calc(6px+0.8vw),0.6rem)] decoration-0 px-2 flex items-center leading-10 mt-1 sm:text-[0.6rem] ${fontSize ? fontSize : "md:text-[0.8rem]"}`}>
         Wendy Kauderer
      </a>
   )
}