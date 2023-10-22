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
         <MainFlexLayout>
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