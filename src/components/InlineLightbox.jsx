import { useState } from "react";

// Astro
import { Image } from "astro:assets";

// Import lightbox
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

export default function InlineLightbox({imageArr}) {
	const [open, setOpen] = useState(false);

	const slides = imageArr.map((image) => {
		return {
			src: image.src,
			alt: image.attributes.alt,
			width: image.attributes.width,
			height: image.attributes.height
		}
	})

	return (
			<Lightbox
				plugins={[Inline]}
				slides={slides}
				carousel={{
					imageFit: "cover",
					spacing: 10
				}}
				className={"shadow-xl"}
				styles={{
					container: { borderRadius: "0.5rem", position: "relative" },
					slide: { padding: "0", maxHeight: "100vh" }
					// slide: { padding: "0", height: "auto", maxWidth: "768px", width: "100%" },
				}}
			/>
	);
}
