export default function FeaturedArtworkLayout({width, height, image, children}) {
   return (
      <section className={`w-fit max-w-fit flex flex-col justify-center px-4 m-auto gap-4 lg:flex-row lg:gap-8`}>
         <div className={`${width > height ? "max-w-lg md:max-w-screen-md" : "max-w-md md:max-w-screen-sm"} `}>
            {image}
         </div>
         {children}
      </section>
   )
}