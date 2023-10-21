import { useState, useEffect } from "react";

/////////////////////////////////////////////////////
// DO NOT REMOVE THIS LINE BELOW                  ///
// OR THE STYLES WILL COMPLETELY BREAK!!!!        ///
// POSSIBLE SOLUTION: 								     ///
// MOVE EVERYTHING EXCEPT THIS LINE TO A NEW FILE ///
/////////////////////////////////////////////////////
import { Image } from "astro:assets";


// import utils
import { getImageSrcSet, getAspectRatio } from "../utils/imageTools";

// Import lightbox
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Counter from "yet-another-react-lightbox/plugins/counter";

// import lightbox styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

// import custom icons
import { 
	ChevronLeftIcon, 
	ChevronRightIcon, 
} from '@heroicons/react/24/outline';

export default function InlineLightbox({data, classes, children}) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true)

	return () => {}
	}, [])

	/* 
	const slides = data.images?.map(({src, image_alt, attributes, srcSet}, i) => {
		return {
			src: src,
 			alt: data.isCMS ? image_alt : data.imagesWithAlts[i].image_alt, // get alt by matching index from optimizedImages
			width: attributes?.width,
			height: attributes?.height,
			srcSet: !data.isCMS 
							? getImageSrcSet(attributes.width, attributes.height, srcSet.values) // get srcSet for each additional image with helper function
							: []
		}
	})
	*/

	const slides = data.images?.map(async (promisedImage, i) => {
		const result = Promise.resolve(promisedImage);
		const image = await result;
		

			const slideObject = {
				src: image.src,
				// alt: data.isCMS ? image.image_alt : data.imagesWithAlts[i].image_alt, // get alt by matching index from optimizedImages
				// width: image.width || attributes?.width,
				// height: image.height || attributes?.height,
				// srcSet: !data.isCMS 
				// 				? getImageSrcSet(attributes.width, attributes.height, srcSet.values) // get srcSet for each additional image with helper function
				// 				: []
			}

			console.log(slideObject)

			return slideObject;
		
		
	})

	// console.log("SLIDES", slides)

	const imageAspectRatio = !data.isCMS ?? getAspectRatio(slides[0].width, slides[0].height);

	return (
		<div className={`${classes} relative` || null}>
			<noscript className="absolute z-10">
				<ul className=" grid grid-cols-2 gap-1">
					{!data.isCMS && data.images?.map(({src, attributes}, i) => {
						return (
							<li key={src}>
								<img 
									src={src} 
									alt={data.imagesWithAlts[i].image_alt} 
									width={attributes.width}
									height={attributes.height}
									className="rounded-lg"
								/>
							</li>
						)
					})}
				</ul>
			</noscript>
			<Lightbox
				plugins={[Inline, Counter]}
				counter={{ 
					container: { 
						style: { 
							fontSize: "14px",
							fontWeight: 600,
							marginLeft: "0.75rem" 
						} 
					} 
				}}
				slides={slides}
				carousel={{
					imageFit: "cover",
					spacing: 10
				}}
				render={{
					iconPrev: () => <ChevronLeftIcon className="w-8 h-8" />,
					iconNext: () => <ChevronRightIcon className="w-8 h-8" />,
					buttonPrev: slides.length <= 1 ? () => null : undefined,
					buttonNext: slides.length <= 1 ? () => null : undefined,
				}}
				animation={{
					fade: 300,
					swipe: 900,
					navigation: 900,
					easing: {
						fade: "ease-in-out",
						swipe: "cubic-bezier(0.18, 0.89, 0.44, 1)",
						navigation: "cubic-bezier(0.18, 0.89, 0.44, 1)",
					},
				}}
				className={"shadow-xl"}
				styles={{
					root: { 
						visibility: isLoaded ? "visible" : "hidden",
					},
					container: { borderRadius: "0.5rem", position: "relative", aspectRatio: imageAspectRatio },
					slide: { padding: "0", maxHeight: "100vh" }
				}}
			/>
		</div>
	)
}
