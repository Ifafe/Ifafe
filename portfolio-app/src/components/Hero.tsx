import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

import { ParticleCanvas } from './ParticleCanvas';

export function Hero() {
	const { t } = useLanguage();

	return (
		<section className="min-h-screen flex items-center justify-center bg-dark text-white relative overflow-hidden px-4">
			{/* Ambient Background Blobs - Slightly smaller on mobile */}
			<div className="absolute top-[-5%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
			<div className="absolute bottom-[-5%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
			
			{/* Interactive Particles Layer */}
			<div className="absolute inset-0 z-0">
				<ParticleCanvas />
			</div>

			<div className="container mx-auto relative z-10 py-20">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative inline-block mb-6 px-4 md:px-6 py-2 rounded-full glass-card border-white/5"
					>
						<span className="text-primary-light font-semibold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs">
							{t.hero.role}
						</span>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1]">
							<span className="opacity-70 font-light block text-xl md:text-3xl lg:text-4xl mb-2">{t.hero.greeting}</span>
							<span className="text-gradient">Domingos Manuel</span>
							<br />
							<span className="text-gradient-primary">Ifafe</span>
						</h1>
					</motion.div>

					<motion.div
						className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-8 md:mt-12"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						<button
							onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
							className="w-full sm:w-auto group relative px-8 md:px-10 py-3.5 md:py-4 bg-white text-dark font-bold rounded-xl md:rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
							<span className="relative z-10 group-hover:text-white transition-colors">{t.hero.cta}</span>
						</button>
						
						<a
							href="https://github.com/Ifafe"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 glass-card glass-card-hover text-white font-bold rounded-xl md:rounded-2xl transition-all inline-flex items-center justify-center gap-3"
						>
							<Github size={20} className="text-primary-light" />
							{t.hero.github}
						</a>
					</motion.div>
				</div>
			</div>
			
			{/* Bottom Fade Gradient */}
			<div className="absolute bottom-0 inset-x-0 h-24 md:h-32 bg-gradient-to-t from-dark to-transparent z-10" />
		</section>
	);
}


