// import utils
import { 
   getAdditionalCMSImagePromises,
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
   const incomingFieldsMetaData = fieldsMetaData.getIn(["tags", "tags"]);
   const tags = incomingFieldsMetaData && restructureTagsFieldsMetaData(incomingFieldsMetaData);

   // this is the current tags array of strings being selected
   // for some reason, the fieldsMetaData does NOT update
   // with currently selected tags
   const incomingTags = entry.getIn(["data", "tags"]);
   const currentTags = restructureTags(incomingTags);

   // use helper to get the array of main image Promises
   const promisedMainImage = {
      src: getAsset(entry.getIn(["data", "image"])).toString(),
      image_alt: entry.getIn(["data", "main_image_alt"])
   }

   // get markdown content
   const body = entry.getIn(["data", "body"]) || "";

   // must check the entry data 
   // because for some really odd reason,
   // widgetsFor("images") returns true for a split second
   // EVEN THOUGH there aren't any selected...
   const entryImages = entry.getIn(["data", "images"]);
   
   const promisedAdditionalImages = entryImages 
                                       ? getAdditionalCMSImagePromises({
                                          immutableData: widgetsFor("images")
                                       })
                                       : [];

   return (
      <BodyLayout 
         blurredBg={<SingleImage blurredBg image={promisedMainImage} />}
      >
         <MainFlexLayout header={
            <header className=" absolute top-0 text-primary-text w-full z-40 before:absolute before:inset-0 before:-z-10 dark:text-primary-dark-text before:md:backdrop-blur-none md:sticky md:top-4 md:overflow-y-auto md:min-w-[16rem] md:w-3/12 md:max-h-screen md:max-w-sm">
               <div className={`navbar-container px-2 py-4 gap-8 mx-auto max-w-screen-xl max-md:transition max-md:duration-300 md:bg-transparent md:dark:bg-transparent md:border-0 md:overscroll-contain md:px-6 md:py-0 md:pr-0 flex flex-col md:gap-4  md:justify-between`
               }>
                  <div className="top-0 px-2 flex justify-between gap-2  mt-1 md:backdrop-blur-sm md:bg-inherit md:sticky md:z-50 md:pl-3 md:py-9 md:pt-7 md:pb-6 md:mt-11 dark:md:bg-inherit">
                     <Logo isCMS />
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
                        image: promisedMainImage, 
                        image_alt: promisedMainImage
                     }} 
                     additionalImages={{
                        optimizedImages: promisedAdditionalImages || [],
                        imagesWithAlts: promisedAdditionalImages || []
                     }}
                  >
                     <SingleImage image={promisedMainImage} />
                  </LightboxWrapper>
               }
               artDetails={
                  <ArtDetails 
                     isCMS
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
                     isCMS
                     currentArtType={artType}
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