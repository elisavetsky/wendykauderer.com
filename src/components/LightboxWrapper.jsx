import { useState, useRef } from "react";

// import utils
import { getImageSrcSet } from "../utils/imageTools";

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


export default function LightboxWrapper({mainImage, additionalImages, children}) {
	const [index, setIndex] = useState(-1);
	const thumbnailsRef = useRef(null);

	const nonMainImages = additionalImages.optimizedImages?.map(({src, attributes, srcSet}, i) => {
		return {
			src: src,
			alt: additionalImages.imagesWithAlts[i].image_alt, // get alt by matching index from optimizedImages
			width: attributes.width,
			height: attributes.height,
			srcSet: getImageSrcSet(attributes.width, attributes.height, srcSet.values) // get srcSet for each additional image with helper function
		}
	})

	const mainImageWidth = mainImage.image.attributes.width;
	const mainImageHeight = mainImage.image.attributes.height;

	const slides = [
		{
			src: mainImage.image.src,
			alt: mainImage.alt,
			width: mainImageWidth,
			height: mainImageHeight,
			srcSet: getImageSrcSet(mainImageWidth, mainImageHeight, mainImage.image.srcSet.values) // get srcSet from mainImage with helper function
		},
		...nonMainImages
	]

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
						optimizedImages: optimizedAdditionalImages || [],
						imagesWithAlts: entry.data.images || []
					}}
				/>
         }
		</>
	);
}
