// import utils
import { 
   promiseCMSImages, 
   restructureTagsFieldsMetaData, 
   restructureTags 
} from "../../../utils/arrayTools.js";

// import layouts
import BodyLayout from "../../layouts/BodyLayout.jsx";
import MainFlexLayout from "../../layouts/MainFlexLayout.jsx";
import ArtworkArticleLayout from "../../layouts/ArtworkArticleLayout.jsx";
import LightboxWrapper from "../../LightboxWrapper.jsx";

// import components
import Logo from "../../Logo.jsx";
import SingleImage from "./SingleImage.jsx";
import ArtDetails from "../../ArtDetails.jsx";
import PrevNextArtwork from "../../PrevNextArtwork.jsx";

// import markdown renderer from same renderer DecapCMS uses
import Markdown from "react-markdown";



export default function ArtworkPreview({entry, widgetsFor, fieldsMetaData, getAsset}) {

   const artType = entry.getIn(["data", "art_type"]);
   const sold = entry.getIn(["data", "sold"]);
   const title = entry.getIn(["data", "title"]);

   // use helper function to convert to an array of objects
   // of a similar structure that Astro's collections expects
   const tags = restructureTagsFieldsMetaData(fieldsMetaData.getIn(["tags", "tags"]));

   // this is the current tags array of strings being selected
   // for some reason, the fieldsMetaData does NOT update
   // with currently selected tags
   const currentTags = restructureTags(entry.getIn(["data", "tags"]));

   // use helper to get the array of main image Promises
   const promisedMainImage = promiseCMSImages({
      immutableData: widgetsFor("image"),
      imageAlt: entry.getIn(["data", "main_image_alt"]),
      getAsset: getAsset
   })

   // use helper to get an array of Promises for the additional images
   // only if there are additional images to search for
   const promisedAdditionalImages = entry.getIn(["data", "images"]) && promiseCMSImages({
      immutableData: widgetsFor("images"),
      getAsset: getAsset
   })


   // get markdown content
   const body = entry.getIn(["data", "body"]) || "";
   
   
   return (
      <BodyLayout 
         blurredBg={<SingleImage blurredBg image={promisedMainImage[0]} />}
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
            
            <ArtworkArticleLayout 
               bodyLength={body.length}
               lightbox={
                  <LightboxWrapper 
                     isCMS={true}
                     mainImage={{
                        image: promisedMainImage[0], 
                        image_alt: promisedMainImage[0]
                     }} 
                     additionalImages={{
                        optimizedImages: promisedAdditionalImages || [],
                        imagesWithAlts: promisedAdditionalImages || []
                     }}
                  >
                     <SingleImage image={promisedMainImage[0]} />
                  </LightboxWrapper>
               }
               artDetails={
                  <ArtDetails 
                     artType={artType}
                     sold={sold}
                     artTitle={title}
                     artTags={currentTags}
                     dependencyArray={null}
                  />
               }
               content={<Markdown>{body}</Markdown>}
               prevNextArtwork={
                  <PrevNextArtwork 
                     prevEntry={{
                        data: {
                           title: "Previous",
                           slug: "previous",
                           art_type: "THIS-IS-NOT-A-REAL-LINK"
                        }
                     }}
                     nextEntry={{
                        data: {
                           title: "Next",
                           slug: "next",
                           art_type: "THIS-IS-NOT-A-REAL-LINK"
                        }
                     }}
                  />
               }
            >

            </ArtworkArticleLayout>
         </MainFlexLayout>
      </BodyLayout>
   )
}