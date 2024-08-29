"use client";
import React from "react";
import { SparklesCore } from "./Sparkles";
import Hero from "./HomeComponents/Hero";

export function SparklesPreview() {
	return (
		<div className="min-h-screen relative w-full bg-[#070815] flex flex-col items-center justify-center overflow-hidden rounded-md">
			<div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>
			<Hero />
		</div>
	);
}
