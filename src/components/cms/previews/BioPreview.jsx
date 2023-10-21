// import utils
import { promiseCMSImages } from "../../../utils/arrayTools.js";

// import components
import SectionTitle from "../../SectionTitle.jsx";
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
   const promisedImages = promiseCMSImages({
      immutableData: widgetsFor("images"),
      getAsset: getAsset
   })

   // get markdown content
   const body = entry.getIn(["data", "body"]);

   console.log("promise", promisedImages[0].data)

   return (
      <BodyLayout blurredBg={<SingleImage blurredBg image={promisedImages[0]} />}>
         <MainFlexLayout>
            <article>
               <SectionTitle title="Bio" />
               <Flex2ColLayout>
                  <div className="mt-7 px-4 flex-1 prose prose-zinc dark:prose-p:text-zinc-100 justify-center dark:prose-invert md:prose-lg">
                     {heading && 
                        <h2>{heading}</h2>
                     }
                     <Markdown>{body}</Markdown>
                  </div>

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