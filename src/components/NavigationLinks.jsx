// Expose site configuration for CMS
import { frontmatter } from "../configuration/SitewideConfig.md";
const email = frontmatter.contact_email;
const instagram_handle = frontmatter.instagram_handle;

export const navArtTypes = [
   {
      title: "Paintings",
      href: "/painting",
   },
   {
      title: "Drawings",
      href: "/drawing",
   },
   {
      title: "Sculptures",
      href: "/sculpture",
   },
]

export const navLinks = [
   {
      title: "Bio",
      href: "/bio"
   },
   {
      title: "Contact",
      href: "/contact"
   },
]

export const additionalNavLinks = [
   {
      title: "Email",
      href: `mailto:${email}`
   },
   {
      title: "Instagram",
      href: `https://www.instagram.com/${instagram_handle}`
   },
]