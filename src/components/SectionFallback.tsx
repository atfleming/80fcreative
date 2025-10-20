import type { FC } from "react";

interface SectionFallbackProps {
	label: string;
	className?: string;
}

export const SectionFallback: FC<SectionFallbackProps> = ({ label, className }) => {
	return (
		<section
			className={`mx-auto w-full max-w-6xl rounded-lg border border-electric-cyan/20 bg-gunmetal/40 px-6 py-16 text-center shadow-[0_0_20px_rgba(0,255,247,0.08)] backdrop-blur ${className ?? ""}`.trim()}
			role="status"
			aria-live="polite"
			aria-label={`${label} loading`}
			aria-busy="true"
		>
			<span className="font-pixel text-xs uppercase tracking-[0.35em] text-electric-cyan/70">
				Loading {label}
			</span>
			<div className="mx-auto mt-6 h-1 w-24 overflow-hidden rounded-full bg-electric-cyan/15">
				<div className="h-full w-full animate-pulse bg-electric-cyan/60" />
			</div>
		</section>
	);
};
