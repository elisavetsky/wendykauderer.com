// import utils
import { promiseCMSImages } from "../../../utils/arrayTools.js";

// import components
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

   // use helper to get the array of Promises
   // only if there are images to search for
   const promisedImages = entry.getIn(["data", "images"]) && promiseCMSImages({
      immutableData: widgetsFor("images"),
      getAsset: getAsset
   })

   // get markdown content
   const body = entry.getIn(["data", "body"]);


   return (
      <BodyLayout 
         blurredBg={<SingleImage blurredBg image={promisedImages[0]} />}
      >
         <MainFlexLayout>

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