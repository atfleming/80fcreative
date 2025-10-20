import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../components/Button";
import { PhotoModal } from "../components/PhotoModal";

const DESIGN_FILES = [
	{
		file: "80fcreativelogo.png",
		alt: "80F Creative electric cyan logo rendered on dark background"
	},
	{
		file: "coheed_skull_fan_art.jpg",
		alt: "Glitched skull illustration inspired by Coheed and Cambria"
	},
	{
		file: "fjmediaco.png",
		alt: "FJ Media Co brand lockup with neon glow"
	},
	{
		file: "looper.png",
		alt: "Looper spoof movie poster"
	},
	{
		file: "donniebarko.png",
		alt: "Donnie Barko spoof movie poster"
	},
	{
		file: "fastandfurryous.png",
		alt: "Fast and Furryous spoof movie poster"
	},
	{
		file: "sports_intro_titles.png",
		alt: "High-energy sports intro title design with scanline texture"
	},
	{
		file: "thebarkknight.png",
		alt: "The Bark Knight spoof movie poster"
	},
	{
		file: "wedding_invite.png",
		alt: "Custom wedding invitation layout with retro-futuristic typography"
	},
	{
		file: "youvegottail.png",
		alt: "You've Got Tail spoof movie poster"
	}
];

const DESIGN_ITEMS = DESIGN_FILES.map((item, index) => ({
	id: `design-${index + 1}`,
	url: `/design/${encodeURIComponent(item.file)}`,
	alt: item.alt
}));

export const Design = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const heroImage = DESIGN_ITEMS[0]?.url;
	const heroAlt = DESIGN_ITEMS[0]?.alt ?? "Design showcase hero";
	const openModal = (index: number) => setActiveIndex(index);
	const closeModal = () => setActiveIndex(null);
	const showNext = () => {
		if (activeIndex === null || activeIndex >= DESIGN_ITEMS.length - 1) {
			return;
		}
		setActiveIndex(activeIndex + 1);
	};
	const showPrevious = () => {
		if (activeIndex === null || activeIndex <= 0) {
			return;
		}
		setActiveIndex(activeIndex - 1);
	};
	const modalImage = activeIndex !== null ? DESIGN_ITEMS[activeIndex] : null;
	return (
		<div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
			<div className="pixel-grid">
				<main>
					<section className="relative h-[70vh] md:h-[80vh]">
						<div className="absolute inset-0 z-0">
							<div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black z-10" />
							{heroImage && (
								<img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" />
							)}
						</div>
						<div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center text-center">
							<Link to="/" className="absolute top-8 left-8 flex items-center text-electric-cyan hover:text-white transition-colors">
								<ArrowLeftIcon className="w-5 h-5 mr-2" />
								Back to Home
							</Link>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
							>
								<h1 className="text-5xl md:text-7xl font-pixel mb-4 text-electric-cyan neon-cyan">
									Design Portfolio
								</h1>
								<p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
									Pixel-perfect visuals, brand systems, and print pieces crafted with the 80F Creative glow.
								</p>
							</motion.div>
						</div>
					</section>
					<section className="py-20 bg-[#130c24]">
						<div className="container mx-auto px-4 md:px-6">
							<motion.div
								className="text-center mb-12"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<h2 className="font-pixel text-3xl md:text-4xl text-electric-cyan">
									select design projects
								</h2>
							
							
							</motion.div>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{DESIGN_ITEMS.map((item, index) => (
									<motion.button
										key={item.id}
										type="button"
										onClick={() => openModal(index)}
										className="group relative overflow-hidden rounded-lg shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan"
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
									>
										<img
											src={item.url}
											alt={item.alt}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</motion.button>
								))}
							</div>
							<motion.div
								className="text-center mt-16"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<Link to="/">
									<Button>Return to Home</Button>
								</Link>
							</motion.div>
						</div>
					</section>
				</main>
			</div>
			{modalImage && (
				<PhotoModal
					image={{
						url: modalImage.url,
						alt: modalImage.alt,
						category: "Design"
					}}
					onClose={closeModal}
					onNext={showNext}
					onPrevious={showPrevious}
					hasNext={activeIndex !== null && activeIndex < DESIGN_ITEMS.length - 1}
					hasPrevious={activeIndex !== null && activeIndex > 0}
				/>
			)}
		</div>
	);
};