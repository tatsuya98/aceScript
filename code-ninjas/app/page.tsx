import Image from "next/image";
import Footer from "./Footer";
import Hero from "./HomeComponents/Hero";

export default function Home() {
	return (
		<>
			<main className="flex-1">
				<Hero />
			</main>
			<Footer />
		</>
	);
}
