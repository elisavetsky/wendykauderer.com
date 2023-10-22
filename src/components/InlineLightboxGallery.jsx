import { useState, useEffect } from "react";

// import utils
import { getAspectRatio, createLightboxSlides } from "../utils/imageTools";
import { resolveAndSetState } from "../utils/arrayTools";

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

export default function InlineLightboxGallery({ariaLabel, isCMS, data, classes}) {
	const [isLoaded, setIsLoaded] = useState(false);
   const [slides, setSlides] = useState([]);
   const [cmsImages, setCmsImages] = useState([]);

	// this useEffect resolves Promises that need to be resolved
	// every time a new image is added in the CMS, component re-renders
	// then sets the cmsImages state
	useEffect(() => {

		setIsLoaded(true) // attempt to mitigate empty space left behind if user blocks javascript

		// conditions based on whether user is editing on CMS
		if (isCMS) {

			// resolve CMS images because they are Promises
			resolveAndSetState({
				data: data.images,
				setStateFunction: setCmsImages
			});
		} else {

			setCmsImages(data.images); // set state directly because we don't need to resolve them
		}

		return () => {}
	}, [data.images])
	
	// this useEffect re-creates the slides every time cmsImages changes somehow
	useEffect(() => {
		
		const slidesArr = createLightboxSlides({
			isCMS: isCMS,
			images: cmsImages,
			imagesWithAlts: data.imagesWithAlts
		})

		setSlides(slidesArr);

		return () => {}
	}, [cmsImages])

	// get the aspect ratio to help with Cumulative Layout Shift
	const imageAspectRatio = getAspectRatio(slides[0]?.width, slides[0]?.height);

	return (
		<div 
			aria-label={ariaLabel}
			className={`${classes} relative` || null}
		>
			<noscript>
				<ul className=" grid grid-cols-2 gap-1">
					{!isCMS && data.images?.map(({src, attributes}, i) => {
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
               // slide: ({ slide, offset, rect }) => {
               // },
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
					slide: { padding: "0" }
				}}
			/>
		</div>
	)
}