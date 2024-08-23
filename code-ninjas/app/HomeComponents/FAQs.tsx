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
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-2">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-4">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-5">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
        <AccordionItem value="item-6">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
