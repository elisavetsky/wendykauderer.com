export default function Flex2ColLayout({ children }) {
   return (
      <div className="flex flex-col gap-10 xl:flex-row">
         {children}
      </div>
   )
}