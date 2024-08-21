import BrandsCarousel from "./HomeComponents/BrandsCarousel";
import Hero from "./HomeComponents/Hero";

export default function Home() {
	return (
		<>
			<main className="flex-1">
				<Hero />
				<BrandsCarousel />
			</main>
			
		</>
	);
}
