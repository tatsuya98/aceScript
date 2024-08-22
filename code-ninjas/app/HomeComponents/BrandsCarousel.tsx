// @ts-ignore
import Image from "next/image";
import Google from "../icons/Google";
import Microsoft from "../icons/Microsoft";
import IBM from "../icons/IBM";
import Apple from "../icons/Apple";
import Amazon from "../icons/Amazon";
import AirBnB from "../icons/AirBnB";
import Tesla from "../icons/Tesla";
import Intel from "../icons/Intel";
import Netlix from "../icons/Netlix";
import Disney from "../icons/Disney";
export default function BrandsCarousel() {
	return (
		<div className="pt-24 flex flex-col gap-6 p-6 max-w-7xl m-auto">
			<p className="text-center mb-10 text-[#CBD5E1] font-semibold text-lg ">Our questions have been asked at</p>
			<div className="slider">
				<div className="slide-track">
					<div className="slide">
						<Google />
					</div>
					<div className="slide">
						<Microsoft />
					</div>
					<div className="slide">
						<IBM />
					</div>
					<div className="slide">
						<Apple />
					</div>
					<div className="slide">
						<Amazon />
					</div>
					<div className="slide">
						<AirBnB />
					</div>
					<div className="slide">
						<Tesla />
					</div>
					<div className="slide">
						<Intel />
					</div>
					<div className="slide">
						<Netlix />
					</div>
					<div className="slide">
						<Disney />
					</div>

        
          {/* Duplicated the Logos to make the carousel continuous  */}

          <div className="slide">
						<Google />
					</div>
					<div className="slide">
						<Microsoft />
					</div>
					<div className="slide">
						<IBM />
					</div>
					<div className="slide">
						<Apple />
					</div>
					<div className="slide">
						<Amazon />
					</div>
					<div className="slide">
						<AirBnB />
					</div>
					<div className="slide">
						<Tesla />
					</div>
					<div className="slide">
						<Intel />
					</div>
					<div className="slide">
						<Netlix />
					</div>
					<div className="slide">
						<Disney />
					</div>
				</div>
			</div>
		</div>
	);
}
