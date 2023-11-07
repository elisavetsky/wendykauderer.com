export default function Flex2ColLayout({ children }) {
   return (
      <div className="flex flex-col gap-10 mx-auto md:max-w-[65rem]">
         {children}
      </div>
   )
}