export default function Link({ children, href, target, size, classes }) {

   const textSize = size && `text-${size}`;
   const className = `transition-colors py-1 px-4 ${textSize} ${classes}`

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

