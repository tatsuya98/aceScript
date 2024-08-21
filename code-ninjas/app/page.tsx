import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./HomeComponents/Hero";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex-1">
				<Hero />
			</main>
			<Footer />
		</>
	);
}
