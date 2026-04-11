import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';

export function About() {
	const { t } = useLanguage();

	return (
		<section className="py-20 md:py-32 bg-dark/50 relative" id="about">
			{/* Decorative Elements - Hidden on very small screens to avoid clutter */}
			<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -mr-32 md:-mr-48 -mt-32 md:-mt-48" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:w-1/2 text-center lg:text-left"
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
						className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full"
					>
						<div className="glass-card p-8 md:p-10 rounded-2xl md:rounded-[3rem] border-white/5 group hover:border-primary/30 transition-all">
							<div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
								<h3 className="text-xl md:text-2xl font-black text-primary">01</h3>
							</div>
							<h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{t.aboutCards.backend.title}</h3>
							<p className="text-gray-400 leading-relaxed text-xs md:text-sm">
								{t.aboutCards.backend.desc}
							</p>
						</div>

						<div className="glass-card p-8 md:p-10 rounded-2xl md:rounded-[3rem] border-white/5 group hover:border-secondary/30 transition-all sm:mt-8 lg:mt-12">
							<div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
								<h3 className="text-xl md:text-2xl font-black text-secondary">02</h3>
							</div>
							<h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{t.aboutCards.mobile.title}</h3>
							<p className="text-gray-400 leading-relaxed text-xs md:text-sm">
								{t.aboutCards.mobile.desc}
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}


