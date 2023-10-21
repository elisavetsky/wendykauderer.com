export default function BodyLayout({ blurredBg, children }) {
   return (
      <div className="flex flex-col min-h-screen relative bg-primary dark:bg-primary-dark">
         {blurredBg &&
            <div className="hidden pointer-events-none supports-filter:block absolute overflow-hidden object-cover w-full h-full [filter:blur(45px)contrast(0.3)saturate(6)]  animate-bgFadeIn dark:animate-bgFadeIn-dark">
               {blurredBg}
            </div>
         }
         {children}
      </div>
   )
}