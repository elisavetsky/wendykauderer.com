// import utils
import { promiseCMSImages } from "../../../utils/arrayTools.js";

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

   // use helper to get the array of image Promises
   const promisedImages = promiseCMSImages({
      immutableData: widgetsFor("image"),
      imageAlt: entry.getIn(["data", "image_alt"]),
      getAsset: getAsset
   })

   // get markdown content
   const body = entry.getIn(["data", "body"]);
   

   return (
      <BodyLayout 
         blurredBg={<SingleImage blurredBg image={promisedImages[0]} />}
      >
         <MainFlexLayout header={
            <header className=" absolute top-0 text-primary-text w-full z-40 before:absolute before:inset-0 before:-z-10 dark:text-primary-dark-text before:md:backdrop-blur-none md:sticky md:top-4 md:overflow-y-auto md:min-w-[16rem] md:w-3/12 md:max-h-screen md:max-w-sm">
               <div class={`navbar-container px-2 py-4 gap-5 mx-auto max-w-screen-xl max-md:transition max-md:duration-300 md:bg-transparent md:dark:bg-transparent md:border-0 md:overscroll-contain md:px-6 md:py-0 md:pr-0 flex flex-col md:gap-10  md:justify-between`
               }>
                  <div class="top-0 px-2 flex justify-between gap-2 md:backdrop-blur-sm md:bg-inherit md:sticky md:z-50 md:pl-4 md:py-9 md:mt-8 dark:md:bg-inherit">
                     <Logo />
                  </div>
               </div>
            </header>
         }>
            
            <FeaturedArtworkLayout 
               image={<SingleImage image={promisedImages[0]} />} 
            >
               <ImageCTA>
                  <Markdown>{body}</Markdown>
               </ImageCTA>
            </FeaturedArtworkLayout>

         </MainFlexLayout>
      </BodyLayout>
   )
}