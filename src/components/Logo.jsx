export default function Logo({fontName, fontSize}) {
   return (
      <a href="/" class={`logo-text px-2 flex items-center leading-10 ${fontSize ? fontSize : "text-[0.6rem]"}`}>
         Wendy Kauderer
      </a>
   )
}