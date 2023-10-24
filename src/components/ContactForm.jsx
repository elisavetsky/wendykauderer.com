// import components
import React from "react";
import * as Form from '@radix-ui/react-form';

// import custom icons
import { 
	UserIcon, 
   EnvelopeIcon, 
} from '@heroicons/react/24/solid';

export default function ContactForm() {
	return (
      <Form.Root name="contact" method="POST" data-netlify="true" className="px-4">
         <input type="hidden" name="form-name" value="contact" />
         <Form.Field className="group relative max-w-[24rem]" name="name">
            <Form.Label className="text-sm inline-block mb-1 mt-8">Name</Form.Label>
            <UserIcon className="absolute h-5 w-5 pl-1 pt-0.5 ml-1 mt-2"/>
            <Form.Control asChild className="peer">
               <input 
                  type="text" 
                  required
                  minLength={2}
                  maxLength={911}
                  className="indent-6 border-0 text-md px-2 my-1 h-8 rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full dark:border-zinc-200 data-[invalid=true]:border-rose-700 dark:data-[invalid=true]:border-rose-400"
               />
            </Form.Control>

            <div className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible">
               <Form.Message asChild match="valueMissing">
                  <p><span aria-hidden="true">➔ </span>Please enter your name</p>
               </Form.Message>
               <Form.Message asChild match="typeMismatch">
                  <p><span aria-hidden="true">➔ </span>Please type only letters, spaces, hyphens, or periods</p>
               </Form.Message>
               <Form.Message asChild match="tooShort">
                  <p><span aria-hidden="true">➔ </span>Your name is longer than that...come on now</p>
               </Form.Message>
               <Form.Message asChild match={(value, formData) => value.length >= 911}>
                  <p><span aria-hidden="true">➔ </span>This is too long of a name...come on now</p>
               </Form.Message>
            </div>
            {/* <Form.ValidityState /> */}
         </Form.Field>

         <Form.Field className="relative max-w-[24rem]" name="email">
            <Form.Label className="text-sm inline-block mb-1 mt-8">Email</Form.Label>
            <EnvelopeIcon className="absolute h-5 w-5 pl-1 pt-0.5 ml-1 mt-2"/>
            <Form.Control asChild className="peer">
               <input className="indent-6 border-0 text-md px-2 my-1 h-8 rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full dark:border-zinc-200  data-[invalid=true]:border-rose-700 dark:data-[invalid=true]:border-rose-400" type="email" required />
            </Form.Control>

            <div className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible">
               <Form.Message name="email" asChild match="valueMissing">
                  <p><span aria-hidden="true">➔ </span>Please enter your email</p>
               </Form.Message>
               <Form.Message name="email" asChild match="typeMismatch">
                  <p><span aria-hidden="true">➔ </span>Please provide a valid email</p>
               </Form.Message>
            </div>
            {/* <Form.ValidityState /> */}
         </Form.Field>

         <Form.Field className="w-full" name="message">
            <Form.Label className="text-sm inline-block mb-1 mt-8">Message</Form.Label>
            <Form.Control asChild className="peer">
               <textarea 
                  required 
                  minLength={5}
                  className="w-full border-0 text-md px-2 my-1 h-28 min-h-[20rem] max-h-[40rem] rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 dark:border-zinc-200 data-[invalid=true]:border-rose-700 dark:data-[invalid=true]:border-rose-400"
               />
            </Form.Control>

            <div className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible">
               <Form.Message name="message" asChild match="valueMissing">
                  <p><span aria-hidden="true">➔ </span>Your message must not be empty</p>
               </Form.Message>
               <Form.Message name="message" asChild match="tooShort">
                  <p><span aria-hidden="true">➔ </span>Your message should be longer than that</p>
               </Form.Message>
               {/* <Form.Message asChild match="valueMissing">
                  <p><span aria-hidden="true">➔ </span>Your message must not contain any strange characters</p>
               </Form.Message> */}
            </div>
         </Form.Field>

         <div aria-live="assertive" id="formMessage"></div>

         <Form.Submit asChild className="max-w-[24rem]">
            <button 
               type="submit" 
               className="transition-colors w-full py-2 px-4 mt-6 border text-gray-100 bg-zinc-700 border-zinc-500 rounded-lg hover:bg-zinc-500"
            >
               Send
            </button>
         </Form.Submit>

      </Form.Root>


		// <form name="contact" method="POST" data-netlify="true" className="px-4 w-fit xl:ml-auto">

      //    <label htmlFor="name" className="text-sm inline-block mb-1 mt-8">Name: </label>
      //    <input 
      //       type="text" 
      //       name="name" 
      //       aria-invalid="true" 
      //       aria-describedby="nameHint" 
      //       className="border-0 text-md px-2 my-1 h-8 rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full dark:border-zinc-200 peer invalid:border-rose-700 dark:invalid:border-rose-400"
      //    />
      //    <p className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible" id="nameHint">
      //       <span aria-hidden="true">➔ </span>
      //       Your name must not have any numbers.
      //    </p>
      
      //    <label htmlFor="email" className="text-sm inline-block mb-1 mt-8">Email: </label>
      //    <input 
      //       type="text" 
      //       name="email" 
      //       aria-invalid="true" 
      //       aria-describedby="emailHint" 
      //       className="border-0 text-md px-2 my-1 h-8 rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full  dark:border-zinc-200 peer invalid:border-rose-700 dark:invalid:border-rose-400"
      //    />
      //    <p className="mt-1.5 invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible" id="emailHint">
      //       <span aria-hidden="true">➔ </span>
      //       Your email must not have any spaces.
      //    </p>
      
      //    <label htmlFor="message" className="text-sm inline-block mb-1 mt-8">Message: </label>
      //    <textarea 
      //       type="text" 
      //       name="message" 
      //       aria-invalid="true" 
      //       aria-describedby="messageHint" 
      //       className="border-0 text-md px-2 my-1 h-28 min-h-[2rem] max-h-[30rem] rounded-none border-b-2 border-l-4 bg-inherit border-gray-800 w-full dark:border-zinc-200 peer invalid:border-rose-700 dark:invalid:border-rose-400"
      //    />
      //    <p className="invisible text-xs h-5 text-rose-700 dark:text-rose-400 peer-invalid:visible" id="messageHint">
      //       <span aria-hidden="true">➔ </span>
      //       Your message must not have any strange characters.
      //    </p>

      //    <div aria-live="assertive" id="formMessage"></div>
      
      //    <button 
      //       type="submit" 
      //       className="transition-colors w-full py-2 px-4 mt-6 border text-gray-100 bg-zinc-700 border-zinc-500 rounded-lg hover:bg-zinc-500 sm:w-fit"
      //    >
      //       Send
      //    </button>
		// </form>
	);
}
