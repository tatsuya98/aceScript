import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
	return (
		<section className="w-[90%] m-auto max-w-4xl mt-32 flex flex-col gap-6">
			<h3 className="text-center font-semibold text-4xl">FAQs</h3>
			<Accordion
				type="single"
				collapsible
				className=""
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>How do I create an account?</AccordionTrigger>
					<AccordionContent>
					To create an account, click on the `Register` button on top left of the page.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-2">
					<AccordionTrigger>How do I search for problems?</AccordionTrigger>
					<AccordionContent>
						Once you are logged in click on the dashboard button at the top of the page.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Which programming languages are supported?</AccordionTrigger>
					<AccordionContent>
					Our platform supports JavaScript only. We plan to add support for multiple programming languages, including Python, Java, C++, etc.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-4">
					<AccordionTrigger>Why did my submission fail?</AccordionTrigger>
					<AccordionContent>
					Common reasons for failure include incorrect logic, syntax errors, or failing edge cases. Review the problem requirements and test cases to debug your code.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-5">
					<AccordionTrigger>How is my code evaluated?</AccordionTrigger>
					<AccordionContent>
					Your code is evaluated against a set of test cases. You need to pass all test cases for your submission to be considered correct.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-6">
					<AccordionTrigger>My code editor is not working properly. How can I fix it?</AccordionTrigger>
					<AccordionContent>
					Make sure your browser is up-to-date, disable any browser extensions that might interfere with the editor, or try using a different browser.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
