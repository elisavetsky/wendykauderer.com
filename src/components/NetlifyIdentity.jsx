// NetlifyIdentity client:only component
function NetlifyIdentity() {
   if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
         if (!user) {
            window.netlifyIdentity.on("login", () => {
               document.location.href = "/admin/";
            });
         }
      });
   }
}

export { NetlifyIdentity };
