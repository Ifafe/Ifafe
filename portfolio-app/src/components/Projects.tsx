import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Info, X } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export function Projects() {
	const { t } = useLanguage();
	const [activeProject, setActiveProject] = useState<any | null>(null);

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
						<Tilt
							key={project.title}
							glareEnable={true}
							glareMaxOpacity={0.15}
							glareColor="#ffffff"
							glarePosition="all"
							glareBorderRadius="2rem"
							tiltMaxAngleX={6}
							tiltMaxAngleY={6}
							scale={1.02}
							transitionSpeed={2000}
							className="h-full flex flex-col group/tilt rounded-2xl md:rounded-[2rem] shadow-2xl"
						>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col group h-full border-white/5 relative z-10 shadow-2xl transition-colors duration-500 hover:border-white/20"
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
									
									{/* Floating Tags */}
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
								<div className="p-6 md:p-8 flex flex-col flex-grow relative bg-dark/20">
									<h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-primary-light transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
										{project.description}
									</p>

									{/* Action Buttons */}
									<div className="flex flex-wrap gap-2 mt-auto">
										<button
											onClick={() => setActiveProject(project)}
											className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 md:py-3 px-3 bg-white/5 hover:bg-white/10 text-xs md:text-sm font-bold text-white rounded-xl transition-all border border-white/10"
										>
											<Info size={16} />
											<span className="whitespace-nowrap">Detalhes</span>
										</button>
										{project.github && project.github !== '#' && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 md:py-3 px-3 bg-white/5 hover:bg-white/10 text-xs md:text-sm font-bold text-white rounded-xl transition-all border border-white/10"
											>
												<Github size={16} />
												<span className="whitespace-nowrap">Source</span>
											</a>
										)}
										{project.link && project.link !== '#' && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 md:py-3 px-3 bg-white text-dark hover:bg-primary hover:text-white text-xs md:text-sm font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-white/10"
											>
												<ExternalLink size={16} />
												<span className="whitespace-nowrap">Live</span>
											</a>
										)}
									</div>
								</div>
							</motion.div>
						</Tilt>
					))}
				</div>
			</div>

			<AnimatePresence>
				{activeProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setActiveProject(null)}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
					>
						<motion.div
							initial={{ scale: 0.95, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.95, opacity: 0, y: 20 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							onClick={(e) => e.stopPropagation()}
							className="bg-dark/95 border border-white/10 rounded-3xl p-6 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
						>
							<button 
								onClick={() => setActiveProject(null)}
								className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
							>
								<X size={24} className="text-white" />
							</button>

							{/* Hero Image in Modal */}
							{activeProject.image && (
								<div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8 relative border border-white/5">
									<div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
									<img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
								</div>
							)}

							<h3 className="text-2xl md:text-4xl font-black mb-4 text-white pr-10 leading-tight">
								{activeProject.title}
							</h3>
							
							<div className="flex flex-wrap gap-2 mb-8">
								{activeProject.tags.map((tag: string) => (
									<span key={tag} className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary-light px-3 py-1 rounded-full border border-primary/20">
										{tag}
									</span>
								))}
							</div>

							<div className="space-y-6 md:space-y-8">
								<div>
									<h4 className="text-sm md:text-base font-bold text-white/50 uppercase tracking-widest mb-3">Sobre o Projeto</h4>
									<p className="text-gray-300 leading-relaxed text-sm md:text-base">
										{activeProject.description}
									</p>
								</div>
								
								{activeProject.techDetails && (
									<div className="p-5 md:p-6 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden">
										<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-16 -mt-16" />
										<h4 className="text-sm md:text-base font-black text-primary-light uppercase tracking-widest mb-3 relative z-10">Arquitetura & Detalhes</h4>
										<p className="text-sm md:text-base text-blue-50/80 leading-relaxed font-medium relative z-10">
											{activeProject.techDetails}
										</p>
									</div>
								)}
							</div>

							{/* Actions in modal */}
							<div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
								{activeProject.github && activeProject.github !== '#' && (
									<a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="shadow-lg flex items-center justify-center flex-1 min-w-[200px] gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 hover:border-white/20">
										<Github size={20} /> <span className="opacity-80 font-medium">Ver</span> Código Fonte
									</a>
								)}
								{activeProject.link && activeProject.link !== '#' && (
									<a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center flex-1 min-w-[200px] gap-2 px-6 py-3.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all">
										<ExternalLink size={20} /> <span className="opacity-90 font-medium">Abrir</span> Live Demo
									</a>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

		</section>
	);
}


