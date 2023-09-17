export default function Link({ children, href, target, size, inline, transition, classes }) {

   const textSize = size && `text-${size}`;
   const padding = inline ? "" : "py-1 px-4";
   const transitionClass = transition || "transition-colors";

   const className = `${transitionClass} ${padding} ${textSize} ${classes}`;

   return (
      <a 
         href={href}
         target={target ? target : ""}
         className={className}
      >
         {children}
      </a>
   )
}
