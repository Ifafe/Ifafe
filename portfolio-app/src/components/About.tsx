import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Server, Smartphone, GraduationCap } from 'lucide-react';

const cards = [
	{
		icon: Server,
		colorVar: 'primary',
		borderHover: 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
		bgColor: 'bg-primary/10',
		iconColor: 'text-primary',
		key: 'backend' as const,
	},
	{
		icon: Smartphone,
		colorVar: 'secondary',
		borderHover: 'hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
		bgColor: 'bg-secondary/10',
		iconColor: 'text-secondary',
		key: 'mobile' as const,
	},
	{
		icon: GraduationCap,
		colorVar: 'green',
		borderHover: 'hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',
		bgColor: 'bg-green-500/10',
		iconColor: 'text-green-400',
		key: 'education' as const,
	},
];

export function About() {
	const { t } = useLanguage();

	return (
		<section className="py-20 md:py-32 bg-dark/50 relative" id="about">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -mr-32 md:-mr-48 -mt-32 md:-mt-48" />

			<div className="container mx-auto px-4 max-w-7xl relative z-10">
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
					
					{/* Left Side: Sticky Title and Intro */}
					<div className="lg:w-[45%] lg:sticky lg:top-32 pt-4 z-20">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
								{t.about.title}
								<span className="text-primary">.</span>
							</h2>
							<div className="h-2 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
							<p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium">
								{t.about.description}
							</p>
						</motion.div>
					</div>

					{/* Right Side: Scrollable Narrative Cards */}
					<div className="lg:w-[55%] flex flex-col gap-16 md:gap-32 lg:pb-32 mt-12 lg:mt-0 relative z-10">
						{cards.map((card, i) => (
							<motion.div
								key={card.key}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								className={`glass-card p-8 md:p-14 rounded-3xl border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500`}
							>
								{/* Huge Background Watermark Number */}
								<div className="absolute top-2 -right-4 font-black text-[120px] leading-none opacity-[0.03] text-white pointer-events-none transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4">
									0{i + 1}
								</div>

								{/* Subtle background glow effect for the card */}
								<div className={`absolute -left-20 -top-20 w-64 h-64 blur-[80px] ${card.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
								
								<div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${card.bgColor} flex items-center justify-center mb-8 shadow-2xl relative z-10 
								transform group-hover:rotate-6 transition-transform duration-500 border border-white/5`}>
									<card.icon className={`w-8 h-8 md:w-10 md:h-10 ${card.iconColor}`} strokeWidth={2} />
								</div>
								
								<div className="relative z-10 max-w-xl">
									<h3 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">
										{t.aboutCards[card.key].title}
									</h3>
									<p className="text-gray-400 leading-relaxed text-base md:text-lg">
										{t.aboutCards[card.key].desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
