export default function Logo({fontName, fontSize}) {
   return (
      <a href="/" className={`font-jamesarthur text-[0.5rem] decoration-0 px-2 flex items-center leading-10 ${fontSize ? fontSize : "sm:text-[0.8rem]"}`}>
         Wendy Kauderer
      </a>
   )
}