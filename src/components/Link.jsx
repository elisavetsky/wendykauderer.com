export default function Link({ children, href, target, size, inline, transition, classes, ...props }) {

   const textSize = size && `text-${size}`;
   const padding = inline ? "" : "py-1 px-3";
   const transitionClass = transition || "transition-colors";

   const className = `decoration-2 ${classes?.includes("no-underline") ? "" : "hover:underline hover:underline-offset-4"}  ${transitionClass} ${padding} ${textSize} ${classes}`;

   return (
      <a 
         href={href}
         target={target ? target : ""}
         className={className}
         {...props}
      >
         {children}
      </a>
   )
}

