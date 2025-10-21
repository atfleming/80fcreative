import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { featuredCaseStudy } from "../content/caseStudies";

export function CaseStudyPage() {
	const { slug } = useParams<{ slug?: string }>();

	if (slug && slug !== featuredCaseStudy.slug) {
		return <Navigate replace to="/" />;
	}

	return (
		<div className="bg-digital-black text-highlight min-h-screen px-4 py-16 md:px-10">
			<div className="mx-auto flex max-w-5xl flex-col gap-12">
				<header className="space-y-6">
					<Link
						aria-label="Back to home"
						className="inline-flex items-center gap-2 font-ui text-sm uppercase tracking-[0.3em] text-electric-cyan transition-colors hover:text-electric-cyan/70"
						to="/"
					>
						<ArrowLeft className="h-4 w-4" />
						Back
					</Link>
					<p className="font-ui text-xs uppercase tracking-[0.4em] text-electric-cyan/60">
						Case Study
					</p>
					<h1 className="font-pixel text-4xl text-electric-cyan md:text-5xl">
						{featuredCaseStudy.title}
					</h1>
					<p className="font-ui text-lg text-highlight/80">
						{featuredCaseStudy.subtitle}
					</p>
					<p className="font-ui text-base leading-relaxed text-highlight/70">
						{featuredCaseStudy.description}
					</p>
				</header>
				<section className="grid gap-10 md:grid-cols-2">
					<article className="rounded border border-electric-cyan/20 bg-digital-black/70 p-6 shadow-[0_0_25px_rgba(0,255,247,0.12)]">
						<h2 className="font-ui text-sm uppercase tracking-[0.35em] text-electric-cyan">
							The Client
						</h2>
						<p className="mt-4 font-ui text-base leading-relaxed text-highlight/80">
							{featuredCaseStudy.client}
						</p>
					</article>
					<article className="rounded border border-electric-cyan/20 bg-digital-black/70 p-6 shadow-[0_0_25px_rgba(0,255,247,0.12)]">
						<h2 className="font-ui text-sm uppercase tracking-[0.35em] text-electric-cyan">
							The Challenge
						</h2>
						<p className="mt-4 font-ui text-base leading-relaxed text-highlight/80">
							{featuredCaseStudy.challenge}
						</p>
					</article>
				</section>
				<section className="rounded border border-electric-cyan/20 bg-digital-black/70 p-6 shadow-[0_0_25px_rgba(0,255,247,0.12)]">
					<h2 className="font-ui text-sm uppercase tracking-[0.35em] text-electric-cyan">
						The Solution
					</h2>
					<p className="mt-4 font-ui text-base leading-relaxed text-highlight/80">
						{featuredCaseStudy.solution}
					</p>
				</section>
				<section className="rounded border border-electric-cyan/20 bg-digital-black/70 p-6 shadow-[0_0_25px_rgba(0,255,247,0.12)]">
					<h2 className="font-ui text-sm uppercase tracking-[0.35em] text-electric-cyan">
						The Results
					</h2>
					<p className="mt-4 font-ui text-base leading-relaxed text-highlight/80">
						{featuredCaseStudy.results}
					</p>
				</section>
				<section className="flex flex-col gap-8">
					<div className="aspect-video w-full overflow-hidden rounded-[2.5rem] border border-electric-cyan/30 bg-digital-black/80 shadow-[0_0_25px_rgba(0,255,247,0.2)]">
						<iframe
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="University of Memphis Scheidt Performing Arts Center campaign"
							className="h-full w-full"
							src={featuredCaseStudy.videoUrl}
						/>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{featuredCaseStudy.gallery.map((image) => (
							<img
								alt="University of Memphis campaign still"
								className="h-full w-full rounded-3xl border border-electric-cyan/20 object-cover"
								key={image}
								src={image}
							/>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
