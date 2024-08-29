import BrandsCarousel from "./components/HomeComponents/BrandsCarousel";
import Features from "./components/HomeComponents/Features";
import Hero from "./components/HomeComponents/Hero";
import FAQs from "./components/HomeComponents/FAQs";

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
