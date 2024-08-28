import React from "react";

export default function Features() {
	return (
		<section className="max-w-6xl m-auto mt-20">
			<h1 className="text-center text-4xl font-semibold mb-12">Coming Soon</h1>
			<div className="flex flex-col gap-16 w-[90%] m-auto ">
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							AI Assistance
						</h3>
						<p className="text-[#CBD5E1] px-4">
							Struggling with a coding challenge? Our AI-powered assistant will
							guide you through tough problems, offering hints and explanations
							to help you crack even the most challenging questions
						</p>
					</div>
					<div className="md:w-1/2 h-[200px] bg-[#BFDBFE1A] grid place-content-center">
						<p>Image Of Feature Here</p>
					</div>
				</div>
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							More Programming Languages
						</h3>
						<p className="text-[#CBD5E1] px-4">
							JavaScript is just the beginning! We&apos;re expanding to include
							a wide range of programming languages, so you can practice coding
							challenges in Python, Java, C++, and more.
						</p>
					</div>
					<div className="md:w-1/2 h-[200px] bg-[#BFDBFE1A] grid place-content-center">
						<p>Image Of Feature Here</p>
					</div>
				</div>
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row gap-6 md:items-center md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							Detailed Solutions
						</h3>
						<p className="text-[#CBD5E1] px-4">
							Review step-by-step solutions to all questions. Learn optimal
							approaches, discover different ways to solve the same problem, and
							understand the underlying concepts.
						</p>
					</div>
					<div className="md:w-1/2 h-[200px] bg-[#BFDBFE1A] grid place-content-center">
						<p>Image Of Feature Here</p>
					</div>
				</div>
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row-reverse gap-6 md:items-center md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							Community & Leaderboards
						</h3>
						<p className="text-[#CBD5E1] px-4">
							Connect with other coders, share your solutions, and climb the
							leaderboards. Compete to see who can solve the most challenges in
							the least time!
						</p>
					</div>
					<div className="md:w-1/2 h-[200px] bg-[#BFDBFE1A] grid place-content-center">
						<p>Image Of Feature Here</p>
					</div>
				</div>
			</div>
		</section>
	);
}
