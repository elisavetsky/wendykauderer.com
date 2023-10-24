import { useState, useEffect, useRef } from "react";

// import utils
import { createLightboxSlides } from "../utils/imageTools";
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


export default function LightboxWrapper({isCMS, mainImage, additionalImages, ...props}) {

	// check if children is truthy by using nullish coalescing 
	const children = props.children ?? {};

	const [index, setIndex] = useState(-1);
	const thumbnailsRef = useRef(null);

	// set the state of images
	const [slides, setSlides] = useState([]);
   const [cmsImages, setCmsImages] = useState([]);
	const [additionalGalleryImages, setAdditionalGalleryImages] = useState([]);

	// set portal within CMS iframe if environment is CMS
	const [ portal, setPortal ] = useState({});

	// this useEffect resolves Promises that need to be resolved
	// every time a new image is added in the CMS, component re-renders
	// then sets the cmsImages state
	useEffect(() => {

		const incomingImages = [
			mainImage.image,
			...additionalImages?.optimizedImages
		]

		// conditions based on whether user is editing on CMS
		if (isCMS) {

			// set lightbox portal to the body inside the iframe
			// const iframe = document.querySelector("#preview-pane");
			// iframe.addEventListener("load", () => {
			// 	setPortal(iframe.contentDocument || iframe.contentWindow.document);
			// })

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

			// set lightbox portal to the body of the entire website
			setPortal(document.querySelector("body"))

			setCmsImages(incomingImages); // set state directly because we don't need to resolve them
			setAdditionalGalleryImages(additionalImages?.optimizedImages); // this sets the state of the additional images
		}

		return () => {}
	}, [mainImage, additionalImages])

	// this useEffect re-creates the slides every time cmsImages changes somehow
	useEffect(() => {

		const additionalImagesWithAlts = isCMS
														? additionalGalleryImages
														: additionalImages.imagesWithAlts

		const slidesArr = createLightboxSlides({
			isCMS: isCMS,
			images: cmsImages,
			imagesWithAlts: [mainImage, ...additionalImagesWithAlts]
		})

		setSlides(slidesArr);

		return () => {}
	}, [cmsImages])


	return (
		<>
			<div className="mb-2" onClick={() => setIndex(0)}>{children}</div>
			<Lightbox
				portal={portal}
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
					gap: 8,
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
					iconClose: () => isCMS ? <span>Close</span> : <XMarkIcon className="w-8 h-8" />,
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
						imagesWithAlts: isCMS ? additionalGalleryImages : additionalImages.imagesWithAlts || []
					}}
				/>
         }
		</>
	);
}
