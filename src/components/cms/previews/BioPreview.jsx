// import utils
import { getAdditionalCMSImagePromises } from "../../../utils/arrayTools.js";

// import components
import Logo from "../../Logo.jsx";
import SectionTitle from "../../SectionTitle.jsx";
import BioContent from "../../BioContent.jsx";
import Flex2ColLayout from "../../layouts/Flex2ColLayout.jsx";
import InlineLightboxGallery from "../../InlineLightboxGallery.jsx";
import SingleImage from "./SingleImage.jsx";

// import layouts
import MainFlexLayout from "../../layouts/MainFlexLayout.jsx";
import BodyLayout from "../../layouts/BodyLayout.jsx";

// import markdown renderer from same renderer DecapCMS uses
import Markdown from "react-markdown";

export default function BioPreview({entry, widgetsFor, getAsset}) {

   const heading = entry.getIn(["data", "heading"]);
   
   // get markdown content
   const body = entry.getIn(["data", "body"]) || "";

   // use helper to get the array of Promises
   // only if there are images to search for.
   // Also, must check the entry data 
   // because for some really odd reason,
   // widgetsFor("images") returns true for a split second
   // EVEN THOUGH there aren't any selected...
   const entryImages = entry.getIn(["data", "images"]);
   
   const promisedImages = entryImages 
                           ? getAdditionalCMSImagePromises({
                              immutableData: widgetsFor("images")
                           })
                           : [];

   return (
      <BodyLayout 
         blurredBg={<SingleImage blurredBg image={promisedImages[0] || []} />}
      >
         <MainFlexLayout header={
            <header className=" absolute top-0 text-primary-text w-full z-40 before:absolute before:inset-0 before:-z-10 dark:text-primary-dark-text before:md:backdrop-blur-none md:sticky md:top-4 md:overflow-y-auto md:min-w-[16rem] md:w-3/12 md:max-h-screen md:max-w-sm">
               <div className={`navbar-container px-2 py-4 gap-5 mx-auto max-w-screen-xl max-md:transition max-md:duration-300 md:bg-transparent md:dark:bg-transparent md:border-0 md:overscroll-contain md:px-6 md:py-0 md:pr-0 flex flex-col md:gap-10  md:justify-between`
               }>
                  <div className="top-0 px-2 flex justify-between gap-2 md:backdrop-blur-sm md:bg-inherit md:sticky md:z-50 md:pl-4 md:py-9 md:mt-8 dark:md:bg-inherit">
                     <Logo />
                  </div>
               </div>
            </header>
         }>

            <article>
               <SectionTitle title="Bio" />
               <Flex2ColLayout>
                  <BioContent heading={heading}>
                     <Markdown>{body}</Markdown>
                  </BioContent>
                  
                  <InlineLightboxGallery
                     ariaLabel="Some of my photos"
                     isCMS={true}
                     data={{
                        images: promisedImages || [],
                        imagesWithAlts: promisedImages || []
                     }} 
                     classes="flex-1 m-auto md:px-4 w-screen md:w-full md:max-w-[60rem]" 
                  />
               </Flex2ColLayout>
            </article>

         </MainFlexLayout>
      </BodyLayout>
   )
}