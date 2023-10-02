export default function Logo({fontName, fontSize}) {
   return (
      <a href="/" className={`font-jamesarthur decoration-0 px-2 flex items-center leading-10 ${fontSize ? fontSize : "text-[0.6rem]"}`}>
         Wendy Kauderer
      </a>
   )
}