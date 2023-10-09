import { useState } from "react";

// Astro
import { Image } from "astro:assets";

// Import lightbox
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// import lightbox styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function LightboxWrapper({mainImage, imageArr, children}) {
	const [open, setOpen] = useState(false);

	const nonMainImages = imageArr?.map(({image, image_alt}) => {
		return {
			src: image.src,
			alt: image_alt,
			width: image.width,
			height: image.height
		}
	})

	const slides = [
		{
			src: mainImage.image.src,
			alt: mainImage.image.alt,
			width: mainImage.image.width,
			height: mainImage.image.height
		},
		...nonMainImages
	]

	return (
		<>
			<div onClick={() => setOpen(true)}>{children}</div>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				plugins={[Thumbnails, Zoom]}
				thumbnails={{
					showToggle: true
				}}
				zoom={{
					maxZoomPixelRatio: 1.33
				}}
				slides={slides}
				carousel={{
					finite: slides.length > 1 ? false : true,
					imageFit: "contain",
					spacing: 10
				}}
				render={{
					buttonPrev: slides.length <= 1 ? () => null : undefined,
					buttonNext: slides.length <= 1 ? () => null : undefined,
				}}
				animation={{
					fade: 300
				}}
				className={"shadow-xl"}
				styles={{
					// container: { borderRadius: "0.5rem", position: "relative" },
					// slide: { padding: "0", maxHeight: "100vh" }
					// slide: { padding: "0", height: "auto", maxWidth: "768px", width: "100%" },
				}}
			/>
		</>
		
	);
}
