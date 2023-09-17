// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;
// Usage with import from npm package
import CMS, { init } from "decap-cms-app";

/*
// Initialize the CMS object 
// NEED TO WAIT UNTIL DECAPCMS OFFICIALLY SUPPORTS REACT 18
// Until then an "overrides" object is added to package.json to "trick" React
*/

// import styles
import "../../../public/admin/example.css";

// import preview templates
import ArtworkPreview from "./previews/ArtworkPreview";

export default function DecapCMS() {
	init({
		config: {
			local_backend: true, // # when using the default proxy server port
			load_config_file: false,
			site_url: "https://wendykauderer.com",
			logo_url: "/public/favicon.svg",
			backend: {
				name: "git-gateway",
				branch: "main",
			},
			media_folder: "src/content/artwork/*", // # Folder where user uploaded files should go
			public_folder: "/images/uploads", // # Resolved folder on live site

		/*
      #####################
      #### Collections ####
      #####################
      */

			collections: [
				{
					name: "artwork",
					label: "My Artwork",
					folder: "src/content/artwork",
					create: true,
					nested: {
						depth: 200,
						summary: "{{title}} | {{fields.date}}", // # optional summary for a tree node, defaults to the inferred title field
					},
					view_filters: [
						{
							label: "Featured",
							field: "featured",
							pattern: true,
						},
						{
							label: "Not Featured",
							field: "featured",
							pattern: false,
						},
						{
							label: "Paintings",
							field: "art_type",
							pattern: "painting",
						},
						{
							label: "Drawings",
							field: "art_type",
							pattern: "drawing",
						},
						{
							label: "Sculptures",
							field: "art_type",
							pattern: "sculpture",
						},
					],
					view_groups: [
						{
							label: "Drafts",
							field: "draft",
						},
						{
							label: "Year",
							field: "date",
							pattern: "\\d{4}", // # groups items based on the value matched by the pattern
						},
						{
							label: "Artwork Type - ",
							field: "art_type",
						},
					],
					fields: [
						{
							label: "Draft",
							name: "draft",
							widget: "boolean",
						},
						{
							label: "💲 Sold/Unavailable",
							name: "sold",
							widget: "boolean",
							default: false,
						},
						{
							label: "❇️ Title",
							name: "title",
							widget: "string",
						},
						{
							label: "📆 Artwork Date",
							name: "date",
							widget: "datetime",
						},
						{
							label: "🎨 Art Type",
							name: "art_type",
							widget: "select",
							options: [
								{
									label: "Painting",
									value: "painting",
								},
								{
									label: "Drawing",
									value: "drawing",
								},
								{
									label: "Scultpure",
									value: "sculpture",
								},
							],
						},
						{
							label: "🏷️ Tags",
							label_singular: "Tag",
							name: "tags",
							widget: "relation",
							multiple: true,
                     collection: "tags",
							value_field: "slug",
                     search_fields: ["slug"],
                     min: 1,
							summary: "{{fields | lower}}", // # summary string template transformation
						},
						{
							label: " 🏞️ Artwork Image(s)",
							label_singular: "Image",
							name: "images",
							widget: "list",
							collapsed: false,
							summary:
								"{{fields.image}} ||||| ALT TEXT: {{fields.image_alt}}",
							fields: [
								{
									label: "📷 Image",
									name: "image",
									widget: "image",
									choose_url: false,
									default: null,
									media_folder: "./",
									media_library: {
										config: null,
										multiple: true,
									},
								},
								{
									label: "♿ Alternative Text (for Accessibility)",
									name: "image_alt",
									widget: "text",
								},
							],
						},
						{
							label: "💬 Description",
							name: "description",
							widget: "text",
						},
						{
							label: "✏️ Body",
							name: "body",
							widget: "markdown",
                     buttons: ["bold", "italic", "link", "quote"],
                     editor_components: ["false"],
                     modes: ["rich_text"],
                     sanitize_preview: true
						},
					],
				},
            /////////////////////
            // TAGS COLLECTION //
            /////////////////////
            {
					name: "tags",
					label: "Tags",
               label_singular: "Tag",
					folder: "src/content/tags",
					create: true,
               fields: [
						{
							label: "Name",
							name: "slug",
							widget: "string",
						},
               ]
            }
			],
		},
	});

   // Register preview styles from minified css output from astro build
   // Not a permanent solution, wish I knew how to directly import @tailwind
	CMS.registerPreviewStyle("./public/admin/example.css");

	// Register preview templates
	CMS.registerPreviewTemplate("artwork", ArtworkPreview);
}
