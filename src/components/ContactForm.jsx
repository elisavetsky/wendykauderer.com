export default function ContactForm() {
	return (
		<form name="contact" method="POST" data-netlify="true" className="px-4 m-auto sm:m-0">

         <label for="name" className="text-sm inline-block mb-1 mt-8">Name: </label>
         <input 
            type="text" 
            name="name" 
            aria-invalid="true" 
            aria-describedby="nameHint" 
            className="text-md px-2 my-1 h-8 rounded-none border-b border-l-2 bg-gray-50 border-slate-800 w-full dark:bg-slate-700 dark:border-slate-300"
         />
         <p className="mt-1.5 text-xs h-5 text-rose-500 dark:text-rose-400" id="nameHint">
            <span aria-hidden="true">➔ </span>
            Your name must not have any numbers.
         </p>
      
         <label for="email" className="text-sm inline-block mb-1 mt-8">Email: </label>
         <input 
            type="text" 
            name="email" 
            aria-invalid="true" 
            aria-describedby="emailHint" 
            className="text-md px-2 my-1 h-8 rounded-none border-b border-l-2 bg-gray-50 border-slate-800 w-full dark:bg-slate-700 dark:border-slate-300"
         />
         <p className="mt-1.5 text-xs h-5 text-rose-500 dark:text-rose-400" id="emailHint">
            <span aria-hidden="true">➔ </span>
            Your email must not have any spaces.
         </p>
      
         <label for="message" className="text-sm inline-block mb-1 mt-8">Message: </label>
         <textarea 
            type="text" 
            name="message" 
            aria-invalid="true" 
            aria-describedby="messageHint" 
            className="text-md px-2 my-1 h-28 min-h-[2rem] max-h-[30rem] rounded-none border-b border-l-2 bg-gray-50 border-slate-800 w-full dark:bg-slate-700 dark:border-slate-300"
         />
         <p className="text-xs h-5 text-rose-500 dark:text-rose-400" id="messageHint">
            <span aria-hidden="true">➔ </span>
            Your message must not have any strange characters.
         </p>

         <div aria-live="assertive" id="formMessage"></div>
      
         <button 
            type="submit" 
            className="transition-colors w-full py-2 px-4 mt-6 border text-gray-100 bg-slate-700 border-slate-500 hover:bg-slate-200 rounded-lg sm:w-fit"
         >
            Send
         </button>
		</form>
	);
}
