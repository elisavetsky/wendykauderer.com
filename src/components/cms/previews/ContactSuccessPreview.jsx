import { useEffect, useState } from "react";

// import utils
import { loadMarkdown } from "../../../utils/markdownTools.js";

// import layouts
import BodyLayout from "../../layouts/BodyLayout.jsx";
import MainFlexLayout from "../../layouts/MainFlexLayout.jsx";
import Flex2ColLayout from "../../layouts/Flex2ColLayout.jsx";

// import components
import Logo from "../../Logo.jsx";
import SectionTitle from "../../SectionTitle.jsx";
import ImageColumn from "../../ImageColumn.jsx";
import SingleImage from "./SingleImage.jsx";
import MarkdownContent from "../../MarkdownContent.jsx";
import Link from "../../Link.jsx";


export default function ContactSuccessPreview({entry, widgetsFor, getAsset}) {

   const [ image, setImage ] = useState("");  // set initial image state to empty string
   
   const sectionTitle = entry.getIn(["data", "title"]);
   const successHeading = entry.getIn(["data", "success_heading"]);
   const successMessage = entry.getIn(["data", "success_message"]);

   // this useEffect walks around Decap CMS entirely'
   // to retrieve the image specified in the homepage
   // (main-hero.md). This is truly incredible stuff
   // for CMS Custom Previews. Wow.
   useEffect(() => {

      const settingsGlob = import.meta.glob("/src/content/settings/*");
      const settingsCollection = Object.entries(settingsGlob);

      loadMarkdown(settingsCollection).then((res) => {

         // filter the markdown to reach the Homepage frontmatter
         const homepageMarkdown = res.filter((res => res.frontmatter.type === "homepage"))[0];

         const featuredImage = {
            src: getAsset(homepageMarkdown.frontmatter.image).toString(),
            image_alt: homepageMarkdown.frontmatter.image_alt
         }

         // setImage to be able to be used in the preview
         setImage(featuredImage); 
      })

      return () => {}

      // pass in an empty dependency array
      // only when the image has been set to state
      // otherwise, try fetching the image again
      // once a field is being typed out
   }, [image ? null : entry])


   return (
      <BodyLayout>
         <MainFlexLayout header={
            <header className=" absolute top-0 text-primary-text w-full z-40 before:absolute before:inset-0 before:-z-10 dark:text-primary-dark-text before:md:backdrop-blur-none md:sticky md:top-4 md:overflow-y-auto md:min-w-[16rem] md:w-3/12 md:max-h-screen md:max-w-sm">
               <div className={`navbar-container px-2 py-4 gap-8 mx-auto max-w-screen-xl max-md:transition max-md:duration-300 md:bg-transparent md:dark:bg-transparent md:border-0 md:overscroll-contain md:px-6 md:py-0 md:pr-0 flex flex-col md:gap-4  md:justify-between`
               }>
                  <div className="top-0 px-2 flex justify-between gap-2  mt-1 md:backdrop-blur-sm md:bg-inherit md:sticky md:z-50 md:pl-3 md:py-9 md:pt-7 md:pb-6 md:mt-11 dark:md:bg-inherit">
                     <Logo isCMS />
                  </div>
               </div>
            </header>
         }>
            <div className="max-w-xl md:max-w-none">
               <SectionTitle title={sectionTitle} />
               
               <Flex2ColLayout>
                  <div className="flex-auto w-full min-w-min md:max-w-[24rem] xl:max-w-[35rem] mr-auto xl:ml-auto">
                     <MarkdownContent heading={successHeading}>
                        <p>{successMessage}</p>
                        <Link 
                           inline 
                           classes="decoration-transparent underline underline-offset-4 hover:decoration-primary-text"
                        >
                           Go back home
                        </Link>
                     </MarkdownContent>
                  </div>
                  <ImageColumn>
                     <SingleImage image={image} />
                  </ImageColumn>
               </Flex2ColLayout>
            
            </div>
         </MainFlexLayout>
      </BodyLayout>
   )
}