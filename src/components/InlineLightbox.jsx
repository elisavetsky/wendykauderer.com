import { useEffect, useState } from "react";

// import utils
import { getImageSrcSet, getAspectRatio } from "../utils/imageTools";

// Import lightbox
import Lightbox from "yet-another-react-lightbox";
import { Inline, Counter } from "yet-another-react-lightbox/plugins";

// import lightbox styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

// import custom icons
import { 
	ChevronLeftIcon, 
	ChevronRightIcon, 
} from '@heroicons/react/24/outline';


export default function InlineLightbox({images, classes, children}) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	const slides = images.optimizedImages?.map(({src, attributes, srcSet}, i) => {
		return {
			src: src,
			alt: images.imagesWithAlts[i].image_alt, // get alt by matching index from optimizedImages
			width: attributes.width,
			height: attributes.height,
			srcSet: getImageSrcSet(attributes.width, attributes.height, srcSet.values) // get srcSet for each additional image with helper function
		}
	})

	const imageAspectRatio = getAspectRatio(slides[0].width, slides[0].height);

	return (
		<div className={classes + " relative" || null}>
			<noscript className="absolute z-10 grid grid-cols-2 gap-1">
				{ children }
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
						// transform: "translate-y(-100%)",
						// display: !isLoaded && "none" 
					},
					container: { borderRadius: "0.5rem", position: "relative", aspectRatio: imageAspectRatio },
					slide: { padding: "0", maxHeight: "100vh" }
					// slide: { padding: "0", height: "auto", maxWidth: "768px", width: "100%" },
				}}
			/>
		</div>
	);
}
