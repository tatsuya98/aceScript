import BrandsCarousel from "./HomeComponents/BrandsCarousel";
import FAQs from "./HomeComponents/FAQs";
import Features from "./HomeComponents/Features";
import Hero from "./HomeComponents/Hero";

export default function Home() {
	return (
		<>
			<main className="flex-1">
				<Hero />
				<BrandsCarousel />
				<Features />
				<FAQs />
			</main>
			
		</>
	);
}
