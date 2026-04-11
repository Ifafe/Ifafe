import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

export function Projects() {
	const { t } = useLanguage();

	return (
		<section className="py-20 md:py-32 bg-dark relative overflow-hidden" id="projects">
			{/* Side Glows - Resized for mobile */}
			<div className="absolute top-1/2 left-0 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2" />
			<div className="absolute top-1/3 right-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/10 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16 md:mb-20"
				>
					<h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-white tracking-tight">
						{t.projects.title}
					</h2>
					<div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
					{t.projects.list.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{ y: -12 }}
							className="glass-card glass-card-hover rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col group h-full border-white/5"
						>
							{/* Project Image Container */}
							<div className="h-48 md:h-56 relative overflow-hidden shrink-0">
								{/* Image Overlay - Primary tint */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 opacity-40 group-hover:opacity-20 transition-opacity" />
								
								{/* Readability Gradient - Bottom heavy dark fade */}
								<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-15 opacity-80" />

								{project.image ? (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
									/>
								) : (
									<div className="absolute inset-0 flex items-center justify-center bg-dark-lighter">
										<Code size={40} className="md:size-48 text-primary/20" />
									</div>
								)}
								
								{/* Floating Tags - Always on dark gradient for visibility */}
								<div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
									<div className="flex flex-wrap gap-2">
										{project.tags.map(tag => (
											<span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-white/10 text-white px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border border-white/20 shadow-lg">
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Project Content */}
							<div className="p-6 md:p-8 flex flex-col flex-grow">
								<h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-primary-light transition-colors">
									{project.title}
								</h3>
								<p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
									{project.description}
								</p>

								{/* Tech Details Tooltip */}
								<div className="mb-6 md:mb-8 p-3 md:p-4 bg-primary/5 rounded-xl md:rounded-2xl border border-primary/10 transition-all duration-300">
									<h4 className="text-[9px] md:text-[10px] font-black text-primary-light uppercase tracking-[0.2em] mb-1.5 md:mb-2">{t.projects.details}</h4>
									<p className="text-[10px] md:text-xs text-blue-100/70 italic leading-snug">
										"{project.techDetails}"
									</p>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-4 mt-auto">
									{project.github && project.github !== '#' && (
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 md:py-3 px-4 glass-card hover:bg-white/10 text-xs md:text-sm font-bold text-white rounded-xl transition-all"
										>
											<Github size={18} />
											<span className="whitespace-nowrap">{t.projects.viewCode}</span>
										</a>
									)}
									{project.link && project.link !== '#' && (
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 md:py-3 px-4 bg-white text-dark hover:bg-primary-light hover:text-white text-xs md:text-sm font-bold rounded-xl transition-all shadow-lg"
										>
											<ExternalLink size={18} />
											<span className="whitespace-nowrap">{t.projects.viewLive}</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


