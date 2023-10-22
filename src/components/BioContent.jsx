export default function BioContent({ heading, content, ...props}) {
   return (
      <div className="mt-7 px-4 flex-1 prose prose-zinc dark:prose-p:text-zinc-100 justify-center dark:prose-invert md:prose-lg">
         {heading && 
            <h2>{heading}</h2>
         }
         {content}
         {props.children}
      </div>
   )
}