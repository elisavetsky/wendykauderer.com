// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;

// Usage with import from npm package
import CMS, { init } from "decap-cms-app";

/*
// Initialize the CMS object 
// NEED TO WAIT UNTIL DECAPCMS OFFICIALLY SUPPORTS REACT 18
// Until then an "overrides" object is added to package.json to "trick" React
*/

const test = import.meta.glob("../../content/artwork/*");
const testIterable = Object.entries(test);

// Cool tweaked function from Aaron Hubbard 
// (https://www.aaronhubbard.dev/blogposts/text-from-module)
// This loads markdown files and parses them 
// and returns content of interest for the CMS
async function loadMarkdown(globEntries) {
	const promisedEntries = await Promise.all(
		globEntries.map(async ([path, resolver]) => {
			const { frontmatter, rawContent } = await resolver();

			return {
				frontmatter: frontmatter,
				body: rawContent(),
			};
	}))

	return promisedEntries;
}
	
loadMarkdown(testIterable).then((res) => {
	console.log("res", res)
})


// import utils
import { humanDate } from "../../utils/textTools";

// import preview templates
import HomepagePreview from "./previews/HomepagePreview.jsx";
import ArtworkPreview from "./previews/ArtworkPreview.jsx";
import BioPreview from "./previews/BioPreview.jsx";

// create alt text pattern variable for easier tweaking
const altTextPattern = [".{20,}", "Alternative text must be at least 20 characters long. Try giving just a bit more detail."];


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
			media_folder: "/src/assets/images", // # Folder where user uploaded files should go
			public_folder: "/", // # Resolved folder on live site

		/*
      #####################
      #### Collections ####
      #####################
      */

			collections: [
				////////////////////////////////
            // GLOBAL SETTINGS COLLECTION //
            ////////////////////////////////
				{
					name: "configuration",
					label: "Global Settings",
					folder: "src/configuration",
					summary: "{{fields.label}}",
					editor: {
						preview: false,
					},
					srotable_fields: [],
					fields: [
						{
							label: "👩‍🎨 Your Name",
							name: "site_name",
							widget: "string",
						},
						{
							label: "📄 Sitewide Description",
							name: "site_description",
							widget: "string",
							hint: "Keep this short and simple."
						},
						{
							label: "📩 Contact Email",
							name: "contact_email",
							widget: "string",
							pattern: ["^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$", "You must use a correct email format"],
							hint: "Your email which will be used for people to contact you on your site."
						},
						{
							label: "⏹️ Curved Image Edges",
							name: "curved_image_edges",
							widget: "boolean",
							hint: "If this switch is on, it means all images have a slight curve to their edges. If it is off, all images have sharp corners."
						}
					]
				},
				//////////////////////////////
            // PAGE SETTINGS COLLECTION //
            //////////////////////////////
				{
					name: "settings",
					label: "Page Settings",
					folder: "src/content/settings/",
					summary: "{{fields.label}}",
					description: "Tweak your homepage and more!",
					sortable_fields: [],
					fields: [
						{
							label: "🖼️ Featured Image",
							name: "image",
							widget: "image",
							choose_url: false,
							media_folder: "/src/assets/images",
						},
						{
							label: "♿ Featured Image Alternative Text",
							name: "image_alt",
							widget: "text",
							pattern: altTextPattern,
							hint: "For accessibility purposes."
						},
						{
							label: "📣 Tagline",
							name: "body",
							widget: "markdown",
							hint: "Edit the text that appears below your featured image & on the right of the image on larger screens.",
                     buttons: [],
                     editor_components: ["false"],
                     modes: ["rich_text"],
                     sanitize_preview: true
						},
					]
				},
				////////////////////////
            // ARTWORK COLLECTION //
            ////////////////////////
				{
					name: "artwork",
					label: "My Artwork",
					label_singular: "Artwork",
					folder: "src/content/artwork",
					media_folder: "/src/assets/images",
					create: true,
					preview_path: "{{fields.art_type}}/{{slug}}",
					summary: "{{title}} | {{fields.tags}} | {{fields.date}}",
					// nested: {
					// 	depth: 200,
					// 	summary: "{{title}} | {{fields.date}}", // # optional summary for a tree node, defaults to the inferred title field
					// },
					view_filters: [
						{
							label: "📝 Drafts",
							field: "draft",
							pattern: true,
						},
						{
							label: "🟢 Available (Unsold, etc.)",
							field: "sold",
							pattern: false,
						},
						{
							label: "🔴 Not Available (Sold, etc.)",
							field: "sold",
							pattern: true,
						},
						{
							label: "🖼️ Paintings",
							field: "art_type",
							pattern: "painting",
						},
						{
							label: "✏️ Drawings",
							field: "art_type",
							pattern: "drawing",
						},
						{
							label: "🗿 Sculptures",
							field: "art_type",
							pattern: "sculpture",
						},
					],
					view_groups: [
						{
							label: "📝 Drafts",
							field: "draft",
						},
						{
							label: "🟢 Available",
							field: "sold",
							
						},
						{
							label: "🔢 Year - ",
							field: "date",
							pattern: "\\d{4}", // # groups items based on the value matched by the pattern
						},
						{
							label: "*️⃣ Type - ",
							field: "art_type",
						},
						{
							label: "🏷️ Tags - ",
							field: "tags",
						},
					],
					fields: [
						{
							label: "📝 Draft",
							name: "draft",
							widget: "boolean",
							default: false
						},
						{
							label: "💲 Sold/Unavailable",
							name: "sold",
							widget: "boolean",
							default: false,
							hint: "Turn this on if this piece is no longer available."
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
							format: "YYYY-MM-DD",
							time_format: false
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
									label: "Sculpture",
									value: "sculpture",
								},
							],
						},
						{
							label: "🏷️ Tags",
							label_singular: "Tag",
							name: "tags",
							widget: "relation",
							hint: "To create new tags, please go to your 'Tags' collection.",
							multiple: true,
                     collection: "tags",
							display_fields: ["title"],
							value_field: "{{slug}}",
                     search_fields: ["title"],
                     min: 1,
							summary: "{{fields | lower}}", // # summary string template transformation
						},
						{
							label: "🖼️ Main Image",
							name: "image",
							// media_folder: "/src/assets/images",
							widget: "image"
						},
						{
							label: "♿ Main Image Alternative Text",
							name: "main_image_alt",
							widget: "text",
							pattern: altTextPattern,
							hint: "For accessibility purposes.",
						},
						{
							label: " 🏞️ Other Artwork Image(s)",
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
									// media_folder: "/src/assets/images",
									// public_folder: "./",
									// media_library: {
									// 	config: {
									// 		media_folder: "/src/assets/images"
									// 	}
									// },
								},
								{
									label: "♿ Alternative Text",
									name: "image_alt",
									widget: "text",
									pattern: altTextPattern,
									hint: "For accessibility purposes.",
								},
							],
						},
						{
							label: "📄 Description",
							name: "body",
							required: false,
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
					label: "Tag Collection",
               label_singular: "Tag",
					folder: "src/content/tags",
					extension: "yml",
					create: true,
					delete: false,
					edit: false,
					slug: "{{fields.title}}",
					editor: {
						preview: false,
					},
					summary: "{{fields.title | lower}}",
					description: "All my artwork tags live here. In order to create a new one to use with my artwork entry, I must create it using the 'New Tag' button.",
               fields: [
						{
							label: "Name",
							name: "title",
							widget: "string",
							hint: "Must be lowercase!",
							pattern: ["^[a-z\s]+", "Tag must have only lowercase letters and spaces!"]
						},
               ]
            },
				////////////////////
            // BIO COLLECTION //
            ////////////////////
				{
					name: "bio",
					label: "Bio",
					folder: "src/content/bio/",
					summary: "Bio",
					description: "I can edit my bio here!",
					sortable_fields: [],
					fields: [
						{
							label: "📰 Heading",
							name: "heading",
							widget: "string",
							required: false
						},
						{
							label: "👤 Bio",
							name: "body",
							widget: "markdown",
                     buttons: ["bold", "italic", "link", "quote"],
                     editor_components: ["false"],
                     modes: ["rich_text"],
                     sanitize_preview: false
						},
						{
							label: "🏞️ Gallery",
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
									media_folder: "/src/assets/images",
								},
								{
									label: "♿ Alternative Text",
									name: "image_alt",
									widget: "string",
									pattern: altTextPattern,
									hint: "For accessibility purposes.",
								},
							],
						},
					]
				},
			],
		},
	});

   // Register preview styles from minified css output from astro build
   // Not a permanent solution, wish I knew how to directly import @tailwind
	CMS.registerPreviewStyle("./admin/admin.css");

	// Register preview templates
	CMS.registerPreviewTemplate("settings", HomepagePreview);
	CMS.registerPreviewTemplate("artwork", ArtworkPreview);
	CMS.registerPreviewTemplate("bio", BioPreview);
}
