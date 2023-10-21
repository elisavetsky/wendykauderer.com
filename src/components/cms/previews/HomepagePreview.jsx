// import utils
import { promiseCMSImages } from "../../../utils/arrayTools.js";

// import components
import FeaturedArtworkLayout from "../../layouts/FeaturedArtworkLayout.jsx";
import ImageCTA from "../../ImageCTA.jsx";
import SingleImage from "./SingleImage.jsx";

// import layouts
import MainFlexLayout from "../../layouts/MainFlexLayout.jsx";
import BodyLayout from "../../layouts/BodyLayout.jsx";

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
      <BodyLayout blurredBg={<SingleImage blurredBg image={promisedImages.data} />}>
         <MainFlexLayout>
            <FeaturedArtworkLayout 
               image={<SingleImage image={promisedImages.data} />} 
            >
               <ImageCTA>
                  <Markdown>{body}</Markdown>
               </ImageCTA>
            </FeaturedArtworkLayout>
         </MainFlexLayout>
      </BodyLayout>
   )
}