import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
	const { t } = useLanguage();
	const items = t.experience.items;

	return (
		<section className="py-20 md:py-32 bg-dark relative overflow-hidden" id="experience">
			{/* Side Glows */}
			<div className="absolute top-1/2 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-[80px] -translate-x-1/2" />
			<div className="absolute bottom-1/2 right-0 w-48 md:w-72 h-48 md:h-72 bg-secondary/10 rounded-full blur-[80px] translate-x-1/2" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16 md:mb-20"
				>
					<h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-white tracking-tight">
						{t.experience.title}
					</h2>
					<div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
				</motion.div>

				{/* Timeline */}
				<div className="relative max-w-3xl mx-auto">
					{/* Vertical line */}
					<div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent md:-translate-x-px" />

					{items.map((item, index) => {
						const isLeft = index % 2 === 0;
						const Icon = item.type === 'work' ? Briefcase : GraduationCap;
						const iconColor = item.type === 'work' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-green-500/20 text-green-400 border-green-500/30';

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.15, duration: 0.5 }}
								className={`relative flex items-start gap-6 md:gap-0 mb-12 md:mb-16 ${
									isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
								}`}
							>
								{/* Icon — Mobile (left column) */}
								<div className="relative z-10 flex-shrink-0 md:hidden">
									<div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconColor}`}>
										<Icon size={16} />
									</div>
								</div>

								{/* Content Card */}
								<div className={`flex-1 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
									<motion.div
										whileHover={{ y: -4 }}
										className="glass-card p-6 md:p-8 rounded-2xl border-white/5 group hover:border-primary/20 transition-all"
									>
										{/* Period badge */}
										<span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary-light bg-primary/10 px-3 py-1 rounded-full mb-4">
											{item.period}
										</span>

										<h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
											{item.role}
										</h3>
										<p className="text-sm font-semibold text-gray-400 mb-3">{item.company}</p>
										<p className="text-xs md:text-sm text-gray-500 leading-relaxed">
											{item.description}
										</p>
									</motion.div>
								</div>

								{/* Center Icon — Desktop only */}
								<div className="hidden md:flex relative z-10 flex-shrink-0 w-10 items-center justify-center">
									<div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconColor}`}>
										<Icon size={16} />
									</div>
								</div>

								{/* Spacer for the other side on desktop */}
								<div className="hidden md:block flex-1" />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
