const CLIENT_LOGOS = [
	{ alt: "University of Memphis", src: "/clients/umemphis_logo.png" },
	{ alt: "Stax Museum", src: "/clients/stax_logo.avif" },
	{ alt: "FedEx", src: "/clients/fedEx_logo.png" },
	{ alt: "CNN", src: "/clients/cnn_logo.png" },
	{ alt: "Complex", src: "/clients/complex_logo.png" },
	{ alt: "Craft Recordings", src: "/clients/craft_recordings.png" },
	{ alt: "Old Dominick", src: "/clients/Old-Dominick_Logo-FullColor.png" },
	{ alt: "Hyatt", src: "/clients/hyatt_logo.png" },
	{ alt: "iBank", src: "/clients/ibank_logo.png" },
	{ alt: "SMC", src: "/clients/smc_logo.png" },
	{ alt: "WeeSprout", src: "/clients/weesprout.png" },
	{ alt: "Champions for Literacy", src: "/clients/champions_for_literacy_logo.png" },
	{ alt: "MRP", src: "/clients/mrp-white-logo.png" }
];

export const ClientMarquee = () => {
	const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

	return (
		<section
			aria-label="Trusted by marquee"
			className="relative border-y border-electric-cyan/20 bg-digital-black/80"
		>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-digital-black via-digital-black/90 to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-digital-black via-digital-black/90 to-transparent" />
			<div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:px-10">
				<p className="font-ui text-xs uppercase tracking-[0.4em] text-electric-cyan/60">
					Trusted by:
				</p>
				<div className="overflow-hidden">
					<ul className="marquee-track flex gap-10">
						{marqueeItems.map((logo, index) => (
							<li
								className="flex h-20 min-w-[160px] items-center justify-center rounded-full border border-electric-cyan/15 bg-digital-black/60 px-6"
								key={`${logo.alt}-${index}`}
							>
								<img
									alt={logo.alt}
									className="max-h-12 w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
									src={logo.src}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};