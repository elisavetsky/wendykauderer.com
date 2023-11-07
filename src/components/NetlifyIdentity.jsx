// manually import Netlify Identity Widget
// importing it through a normal <script> tag causes
// problems. If you press the `Login with Netlify Indentity`
// button immediately atfter page load, the popup closes
// for some reason
import netlifyIdentity from "netlify-identity-widget";


// NetlifyIdentity client:only component
function NetlifyIdentity() {

   window.netlifyIdentity = netlifyIdentity; // attatch it to the global window object

   netlifyIdentity.init(); // init the widget

   if (window.netlifyIdentity) {

      window.netlifyIdentity.on("init", (user) => {

         if (!user) {
            window.netlifyIdentity.on("login", () => {
               document.location.href = "/admin/";
            });
         } else { 
            window.netlifyIdentity.on("logout", () => {
               document.location.href = "/admin/";
            });
         }
      });

      window.netlifyIdentity.on("login", () => {
         document.location.href = "/admin/";
      })

      window.netlifyIdentity.on("logout", () => {
         document.location.href = "/admin/";
      })
   }
}

export { NetlifyIdentity };
