import { useEffect, useState } from "react"

// import utils
import { resolveAndSetState } from "../../../utils/arrayTools.js"

// import siteconfig
import { frontmatter } from "../../../configuration/SitewideConfig.md";
const curvedEdges = frontmatter.curved_image_edges;

export default function SingleImage({blurredBg, image}) {
   const [ cmsImages, setCmsImages ] = useState([]);
   const [ images, setImages ] = useState();

   // this useEffect resolves Promises that need to be resolved
	// every time a new image is added in the CMS, component re-renders
	// then sets the cmsImages state
	useEffect(() => {

		// resolve CMS images because they are Promises
      // turn Promises to an array because my function expects this
      resolveAndSetState({
         data: [image],
         setStateFunction: setCmsImages
      });

		return () => {}
	}, [image])

   useEffect(() => {

      setImages(cmsImages)

      return () => {}

      // pass in empty dependency array 
      // or CMS keeps re-rendering this to infinity
   }, [cmsImages])


   return (
      images &&
      
      images.map((image) => {
         return (
            <img 
               key={image.src} 
               src={image.src} 
               alt={image.alt} 
               role={`${blurredBg && "presentation"}`}
               className={`${curvedEdges && 'sm:rounded-md'} ${blurredBg && 'h-full w-full'}`}
            />
         )
      })
   )
}