import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredCaseStudy } from "../content/caseStudies";

export const FeaturedCaseStudy = () => {
	return (
		<section
			id="featured-case-study"
			className="relative mt-24 overflow-hidden border border-electric-cyan/30 bg-digital-black/60 px-4 py-16 md:px-10"
		>
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,247,0.12),_transparent_55%)]" />
			<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
				<div className="space-y-6 text-highlight md:w-1/2">
					<p className="font-ui text-sm uppercase tracking-[0.35em] text-electric-cyan/70">
						Featured Case Study
					</p>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.6 }}
						className="font-pixel text-3xl leading-tight text-electric-cyan md:text-4xl whitespace-pre-line"
					>
						{featuredCaseStudy.title}
					</motion.h3>
					<p className="font-ui text-base text-highlight/80">
						{featuredCaseStudy.subtitle}
					</p>
					<Link className="mt-8 inline-flex" to={`/case-studies/${featuredCaseStudy.slug}`}>
						<span className="button-glow inline-flex items-center gap-3 px-6 py-3 font-ui text-sm uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-y-1">
							{featuredCaseStudy.ctaLabel}
						</span>
					</Link>
				</div>
				<motion.figure
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6 }}
					className="relative overflow-hidden rounded-[2.5rem] border border-electric-cyan/20 bg-digital-black/80 shadow-[0_0_25px_rgba(0,255,247,0.15)] md:w-1/2"
				>
					<img
						alt="University of Memphis case study still"
						className="h-full w-full object-cover"
						src={featuredCaseStudy.heroImage}
					/>
				</motion.figure>
			</div>
		</section>
	);
};