import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';

const cards = [
	{
		number: '01',
		colorVar: 'primary',
		borderHover: 'hover:border-primary/30',
		bgColor: 'bg-primary/20',
		textColor: 'text-primary',
		key: 'backend' as const,
	},
	{
		number: '02',
		colorVar: 'secondary',
		borderHover: 'hover:border-secondary/30',
		bgColor: 'bg-secondary/20',
		textColor: 'text-secondary',
		key: 'mobile' as const,
	},
	{
		number: '03',
		colorVar: 'green',
		borderHover: 'hover:border-green-500/30',
		bgColor: 'bg-green-500/20',
		textColor: 'text-green-400',
		key: 'education' as const,
	},
];

export function About() {
	const { t } = useLanguage();

	return (
		<section className="py-20 md:py-32 bg-dark/50 relative" id="about">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -mr-32 md:-mr-48 -mt-32 md:-mt-48" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:w-2/5 text-center lg:text-left lg:sticky lg:top-28"
					>
						<h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 text-white tracking-tight">
							{t.about.title}
						</h2>
						<p className="text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 font-medium">
							{t.about.description}
						</p>
						<div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full"
					>
						{cards.map((card, i) => (
							<motion.div
								key={card.key}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ y: -6 }}
								className={`glass-card p-8 md:p-10 rounded-2xl md:rounded-[3rem] border-white/5 group ${card.borderHover} transition-all ${
									// 3rd card spans full width on sm
									i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
								}`}
							>
								<div className={`w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl ${card.bgColor} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
									<h3 className={`text-xl md:text-2xl font-black ${card.textColor}`}>{card.number}</h3>
								</div>
								<h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
									{t.aboutCards[card.key].title}
								</h3>
								<p className="text-gray-400 leading-relaxed text-xs md:text-sm">
									{t.aboutCards[card.key].desc}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
