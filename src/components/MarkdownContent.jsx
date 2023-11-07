export default function MarkdownContent({ sectionTitle, heading, content, ...props}) {
   return (
      <div className="mt-3 px-4 flex-1 prose prose-zinc dark:prose-p:text-zinc-100 justify-center dark:prose-invert prose-h1:text-4xl md:prose-lg xl:prose-xl">
         {heading && 
            <header><h1>{heading}</h1></header>
         }
         {content}
         {props.children}
      </div>
   )
}