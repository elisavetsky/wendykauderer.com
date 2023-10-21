export default function Flex2ColLayout({ children }) {
   return (
      <div class="flex flex-col gap-10 xl:flex-row">
         {children}
      </div>
   )
}