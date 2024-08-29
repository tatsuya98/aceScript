import BrandsCarousel from "./components/HomeComponents/BrandsCarousel";
import Features from "./components/HomeComponents/Features";
import Hero from "./components/HomeComponents/Hero";
import FAQs from "./components/HomeComponents/FAQs";
import { SparklesPreview } from "./components/SparklesPreview";

export default function Home() {
	return (
		<>
			<main className="flex-1">
				<div className="min-h-screen lg:h-auto">
					<Hero />
					<BrandsCarousel />
				</div>
				<Features />
				<FAQs />
			</main>
		</>
	);
}
