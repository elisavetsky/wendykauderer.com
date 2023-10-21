export default function ContactForm() {
	return (
		<form name="contact" method="POST" data-netlify="true" className="px-4 w-fit xl:ml-auto">

         <label htmlFor="name" className="text-sm inline-block mb-1 mt-8">Name: </label>
         <input 
            type="text" 
            name="name" 
            aria-invalid="true" 
            aria-describedby="nameHint" 
            className="border-0 text-md px-2 my-1 h-8 rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full dark:border-zinc-200 peer invalid:border-rose-700 dark:invalid:border-rose-400"
         />
         <p className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible" id="nameHint">
            <span aria-hidden="true">➔ </span>
            Your name must not have any numbers.
         </p>
      
         <label htmlFor="email" className="text-sm inline-block mb-1 mt-8">Email: </label>
         <input 
            type="text" 
            name="email" 
            aria-invalid="true" 
            aria-describedby="emailHint" 
            className="border-0 text-md px-2 my-1 h-8 rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full  dark:border-zinc-200 peer invalid:border-rose-700 dark:invalid:border-rose-400"
         />
         <p className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible" id="emailHint">
            <span aria-hidden="true">➔ </span>
            Your email must not have any spaces.
         </p>
      
         <label htmlFor="message" className="text-sm inline-block mb-1 mt-8">Message: </label>
         <textarea 
            type="text" 
            name="message" 
            aria-invalid="true" 
            aria-describedby="messageHint" 
            className="border-0 text-md px-2 my-1 h-28 min-h-[2rem] max-h-[30rem] rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full dark:border-zinc-200 peer invalid:border-rose-700 dark:invalid:border-rose-400"
         />
         <p className="invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible" id="messageHint">
            <span aria-hidden="true">➔ </span>
            Your message must not have any strange characters.
         </p>

         <div aria-live="assertive" id="formMessage"></div>
      
         <button 
            type="submit" 
            className="transition-colors w-full py-2 px-4 mt-6 border text-gray-100 bg-zinc-700 border-zinc-500 rounded-lg hover:bg-zinc-500 sm:w-fit"
         >
            Send
         </button>
		</form>
	);
}
