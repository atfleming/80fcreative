import React from "react";
import { motion } from "framer-motion";

export const About = () => {
	return (
		<section id="about" className="bg-[#0f0a1e] py-24">
			<div className="container mx-auto flex max-w-6xl flex-col gap-20 px-4 md:px-6">
				<motion.div
					className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-electric-cyan/30 bg-digital-black/70 px-8 py-12 text-center shadow-[0_0_30px_rgba(0,255,247,0.15)] backdrop-blur-sm md:px-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.8 }}
				>
					<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,247,0.18),_transparent_70%)]" />
					<h2 className="font-pixel text-3xl md:text-4xl text-electric-cyan">
						About 80F Creative
					</h2>
					<p className="mt-4 font-ui text-xl text-electric-cyan/70">
						Telling stories through film, photography, and design.
					</p>
					<div className="mt-8 space-y-6 font-ui text-base leading-relaxed text-highlight/80">
						<p>
							We believe the most effective marketing isn&apos;t marketing at all—it&apos;s authentic storytelling. 80F Creative is an agency built on the philosophy that a great story, told with cinematic quality, can do more than just capture attention. It builds trust, drives action, and creates a lasting legacy.
						</p>
					
					</div>
				</motion.div>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<motion.div
						className="relative overflow-hidden rounded-[2.5rem] border border-[#ff55ee]/25 bg-[#130c24] p-10 shadow-[0_0_35px_rgba(255,85,238,0.12)]"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8 }}
					>
						<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(255,85,238,0.2),_transparent_65%)]" />
						<h3 className="font-pixel text-3xl md:text-4xl text-electric-cyan">
							Our Founder
						</h3>
						<div className="mt-6 space-y-6 font-ui text-base leading-relaxed text-highlight/80">
							<p>
								80F Creative is led by Andrew Trent Fleming ("Drew"), who has produced and directed award-winning commercial work, photography, creative, and independent film work for brands, agencies, and production companies since 2005.
							</p>
							<p>
								His philosophy centers on blending documentary storytelling with strategic thinking, ensuring that every visual element serves both aesthetic and functional purposes to meet clients&apos; needs. Drew has a passion for music-focused work and enjoys producing and directing music videos and artist promo packages.
							</p>
							<p>
								From Stax Records, to FedEx, to Complex, to CNN: Drew has collaborated with brands across a wide variety of industries, bringing their stories to life through compelling visual narratives.
							</p>
						</div>
						<div className="mt-8">
							<h4 className="font-pixel text-xl text-electric-cyan">
								Recognition
							</h4>
							<ul className="mt-4 space-y-2 list-disc pl-5 font-ui text-sm text-highlight/70">
								<li>Winner, Gold/Best of Show for Video/Directing, American Advertising Federation Memphis 2021</li>
								<li>Winner, Indie Memphis Narrative Short Audience Choice Award 2020</li>
								<li>Winner, Best Mississippi Short, Oxford Film Festival 2020</li>
								<li>Winner, Memphis Film Prize 2019</li>
							</ul>
						</div>
					</motion.div>
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8 }}
					>
						<div className="relative aspect-square overflow-hidden rounded-3xl border border-electric-cyan/30 shadow-[0_0_25px_rgba(0,255,247,0.2)]">
							<video
								autoPlay
								loop
								muted
								playsInline
								src="/bts-video-about.mov"
								className="h-full w-full object-cover"
							>
								Your browser does not support the video tag.
							</video>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};