import BrandsCarousel from "./HomeComponents/BrandsCarousel";
import Features from "./HomeComponents/Features";
import Hero from "./HomeComponents/Hero";
import FAQs from "./HomeComponents/FAQs";

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
