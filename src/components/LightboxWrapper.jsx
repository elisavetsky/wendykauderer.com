import { useState, useEffect, useRef } from "react";

// import utils
import { getImageSrcSet, getAspectRatio, createLightboxSlides } from "../utils/imageTools";
import { resolveAndSetState } from "../utils/arrayTools";

// Import lightbox
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

// import my components
import GalleryThumbs from "./GalleryThumbs.jsx";

// import lightbox styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

// import custom icons
import { 
	ChevronLeftIcon, 
	ChevronRightIcon, 
	MagnifyingGlassPlusIcon,
	MagnifyingGlassMinusIcon,
	EyeIcon,
	EyeSlashIcon,
	XMarkIcon
} from '@heroicons/react/24/outline';


export default function LightboxWrapper({isCMS, mainImage, additionalImages, children, ...props}) {
	const [index, setIndex] = useState(-1);
	const thumbnailsRef = useRef(null);

	// set the state of images
	const [slides, setSlides] = useState([]);
   const [cmsImages, setCmsImages] = useState([]);
	const [additionalGalleryImages, setAdditionalGalleryImages] = useState([]);

	// this useEffect resolves Promises that need to be resolved
	// every time a new image is added in the CMS, component re-renders
	// then sets the cmsImages state
	useEffect(() => {

		// const nonMainImages = additionalImages.optimizedImages?.map(({src, attributes, srcSet}, i) => {
		// 	return {
		// 		src: src,
		// 		alt: additionalImages.imagesWithAlts[i].image_alt, // get alt by matching index from optimizedImages
		// 		width: attributes.width,
		// 		height: attributes.height,
		// 		srcSet: getImageSrcSet(attributes.width, attributes.height, srcSet.values) // get srcSet for each additional image with helper function
		// 	}
		// })
		
		// const mainImageWidth = mainImage.image.attributes.width;
		// const mainImageHeight = mainImage.image.attributes.height;

		// const incomingImages = [
		// 	{
		// 		src: mainImage.image.src,
		// 		alt: mainImage.alt,
		// 		width: mainImageWidth,
		// 		height: mainImageHeight,
		// 		srcSet: getImageSrcSet(mainImageWidth, mainImageHeight, mainImage.image.srcSet.values) // get srcSet from mainImage with helper function
		// 	},
		// 	...nonMainImages
		// ]

		const incomingImages = [
			mainImage.image,
			...additionalImages?.optimizedImages
		]

		// conditions based on whether user is editing on CMS
		if (isCMS) {

			// resolve CMS images because they are Promises
			// this sets the state of all images in the gallery
			resolveAndSetState({
				data: incomingImages,
				setStateFunction: setCmsImages
			});

			// this sets the state of the additional images
			resolveAndSetState({
				data: [...additionalImages?.optimizedImages],
				setStateFunction: setAdditionalGalleryImages
			});
		} else {

			setCmsImages(incomingImages); // set state directly because we don't need to resolve them
			setAdditionalGalleryImages(additionalImages?.optimizedImages); // this sets the state of the additional images
		}

		return () => {}
	}, [mainImage, additionalImages])

	// this useEffect re-creates the slides every time cmsImages changes somehow
	useEffect(() => {

		console.log("CMS", cmsImages)
		const slidesArr = createLightboxSlides({
			isCMS: isCMS,
			images: cmsImages,
			imagesWithAlts: [mainImage, ...additionalImages.imagesWithAlts]
		})
		console.log("slidesARR", slidesArr)
		setSlides(slidesArr);
		console.log("SLIDES", slides)
		return () => {}
	}, [cmsImages])


	return (
		<>
			<div className="mb-2" onClick={() => setIndex(0)}>{children}</div>
			<Lightbox
				index={index}
				open={index >= 0}
				close={() => setIndex(-1)}
				plugins={[Thumbnails, Zoom, Counter]}
				thumbnails={{
					ref: thumbnailsRef,
					border: 0,
					borderRadius: 0,
					width: 100,
					imageFit: "contain",
					padding: 0,
					gap: 2,
					vignette: true,
					showToggle: true,
				}}
				on={{
					entering: () => {
						(slides.length <= 1 ? thumbnailsRef.current?.hide : thumbnailsRef.current?.show)();
					},
				}}
				zoom={{
					maxZoomPixelRatio: 1.33,
				}}
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
					finite: slides.length > 1 ? false : true,
					imageFit: "contain",
					spacing: "30%",
					padding: 0,
				}}
				render={{
					iconZoomIn: () => (
						<MagnifyingGlassPlusIcon className="w-8 h-8" />
					),
					iconZoomOut: () => (
						<MagnifyingGlassMinusIcon className="w-8 h-8" />
					),
					buttonThumbnails: slides.length <= 1 ? () => null : undefined,
					iconThumbnailsVisible: () => <EyeIcon className="w-8 h-8" />,
					iconThumbnailsHidden: () => <EyeSlashIcon className="w-8 h-8" />,
					iconPrev: () => <ChevronLeftIcon className="w-8 h-8" />,
					iconNext: () => <ChevronRightIcon className="w-8 h-8" />,
					iconClose: () => <XMarkIcon className="w-8 h-8" />,
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
				className=""
				styles={
					{
						// container: { borderRadius: "0.5rem", position: "relative" },
						// slide: { padding: "0", maxHeight: "100vh" }
						// slide: { padding: "0", height: "auto", maxWidth: "768px", width: "100%" },
					}
				}
			/>

			{additionalImages.optimizedImages.length > 0 &&
            <GalleryThumbs 
					setIndex={setIndex} 
					images={{
						optimizedImages: additionalGalleryImages || [],
						imagesWithAlts: additionalImages.imagesWithAlts || []
					}}
				/>
         }
		</>
	);
}
