// import siteconfig
import { frontmatter } from "../../../configuration/SitewideConfig.md";
const curvedEdges = frontmatter.curved_image_edges;


export default function SingleImage({blurredBg, image}) {

   return (
      image && image !== undefined

         ? <img 
            src={image.src} 
            alt={image.image_alt} 
            role={`${blurredBg ? "presentation" : "image"}`}
            className={`${curvedEdges && 'sm:rounded-md'} ${blurredBg ? 'h-full w-full' : "w-full"}`}
         />

         : <span></span>
   )
}