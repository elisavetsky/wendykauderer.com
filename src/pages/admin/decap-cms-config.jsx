/*
// Initialize the CMS object 
// NEED TO WAIT UNTIL DECAPCMS OFFICIALLY SUPPORTS REACT 18
// Until then an "overrides" object is added to package.json to "trick" React
*/

import CMS from 'decap-cms-app'

// import styles
import '../../styles/main.css'

// import preview templates
import ArtworkPreview from './previews/ArtworkPreview';

export default function DecapCMS() {
   CMS.init();

   // Now the registry is available via the CMS object.

   // CMS.registerPreviewStyle();

   // register preview templates
   CMS.registerPreviewTemplate("artwork", ArtworkPreview);
}
