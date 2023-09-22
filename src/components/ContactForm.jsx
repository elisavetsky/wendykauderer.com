export default function ContactForm() {
	return (
		<form name="contact" method="POST" data-netlify="true" className="px-5 sm:px-0 dark:text-slate-100 sm:max-w-sm">
			<p>
				<label>
					Your Name: <input type="text" name="name" className="mt-1 border border-slate-500 rounded-lg w-full" />
				</label>
			</p>
			<p>
				<label>
					Your Email: <input type="email" name="email" className="w-full" />
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name="message" className="w-full"></textarea>
				</label>
			</p>
			<p>
				<button type="submit" className="transition-colors w-full py-1 px-4 border border-slate-500 hover:bg-slate-200 rounded-lg sm:w-fit">Send</button>
			</p>
		</form>
	);
}
