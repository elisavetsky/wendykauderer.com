// import layouts
import MainFlexLayout from "../../layouts/MainFlexLayout.jsx";
import BodyLayout from "../../layouts/BodyLayout.jsx";

// import components
import Logo from "../../Logo.jsx";
import FeaturedArtworkLayout from "../../layouts/FeaturedArtworkLayout.jsx";
import ImageCTA from "../../ImageCTA.jsx";
import SingleImage from "./SingleImage.jsx";
import ThemeDropdown from "../../ThemeDropdown.jsx";

// import markdown renderer from same renderer DecapCMS uses
import Markdown from "react-markdown";

export default function HomepagePreview({entry, widgetsFor, getAsset}) {

   // get the featured image that shows up both
   // on the homepage and the `/contact` route
   const featuredImage = {
      src: getAsset(entry.getIn(["data", "image"])).toString(),
      image_alt: entry.getIn(["data", "image_alt"])
   }

   // get markdown content
   const body = entry.getIn(["data", "body"]);


   return (
      <BodyLayout 
         blurredBg={
            <SingleImage 
               blurredBg 
               image={featuredImage} 
            />
         }
      >
         <MainFlexLayout header={
            <header className=" absolute top-0 text-primary-text w-full z-40 before:absolute before:inset-0 before:-z-10 dark:text-primary-dark-text before:md:backdrop-blur-none md:sticky md:top-4 md:overflow-y-auto md:min-w-[16rem] md:w-3/12 md:max-h-screen md:max-w-sm">
               <div className={`navbar-container px-2 py-4 gap-8 mx-auto max-w-screen-xl max-md:transition max-md:duration-300 md:bg-transparent md:dark:bg-transparent md:border-0 md:overscroll-contain md:px-6 md:py-0 md:pr-0 flex flex-col md:gap-4  md:justify-between`
               }>
                  <div className="top-0 px-2 flex justify-between gap-2 md:backdrop-blur-sm md:bg-inherit md:sticky md:z-50 md:pl-3 md:py-9 md:pt-7 md:pb-6 md:mt-8 dark:md:bg-inherit">
                     <Logo isCMS />
                  </div>
               </div>
            </header>
         }>
            
            <FeaturedArtworkLayout 
               image={<SingleImage image={featuredImage} />} 
            >
               <ImageCTA>
                  <Markdown>{body}</Markdown>
               </ImageCTA>
            </FeaturedArtworkLayout>

         </MainFlexLayout>
      </BodyLayout>
   )
}