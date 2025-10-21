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
			className="border-y border-electric-cyan/20 bg-digital-black/80 py-10"
		>
			<div className="mx-auto w-full max-w-6xl px-4 text-center md:px-6 md:text-left">
				<p className="font-ui text-xs uppercase tracking-[0.4em] text-electric-cyan/60">
					Trusted by:
				</p>
			</div>
			<div className="mt-6 w-full overflow-hidden">
				<ul className="marquee-track flex items-center gap-10">
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
		</section>
	);
};
