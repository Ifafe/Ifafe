import { useLanguage } from '../lib/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Github, ChevronDown, MapPin } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { useRef, useEffect, useState } from 'react';

function CountUp({ target, duration = 1500 }: { target: string; duration?: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });
	const [display, setDisplay] = useState('0');

	useEffect(() => {
		if (!isInView) return;
		// Parse: "3+", "100+", "2" → numeric + suffix
		const match = target.match(/^(\d+)([+]?)$/);
		if (!match) { setDisplay(target); return; }
		const num = parseInt(match[1]);
		const suffix = match[2] ?? '';
		const steps = 40;
		const interval = duration / steps;
		let current = 0;
		const timer = setInterval(() => {
			current += 1;
			const value = Math.round((current / steps) * num);
			setDisplay(value + suffix);
			if (current >= steps) {
				clearInterval(timer);
				setDisplay(target);
			}
		}, interval);
		return () => clearInterval(timer);
	}, [isInView, target, duration]);

	return <div ref={ref}>{display}</div>;
}

export function Hero() {
	const { t } = useLanguage();

	return (
		<section className="min-h-screen flex items-center justify-center bg-dark text-white relative overflow-hidden px-4">
			{/* Ambient Background Blobs */}
			<div className="absolute top-[-5%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
			<div className="absolute bottom-[-5%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
			
			{/* Particles */}
			<div className="absolute inset-0 z-0">
				<ParticleCanvas />
			</div>

			<div className="container mx-auto relative z-10 py-24 md:py-32">
				<div className="max-w-4xl mx-auto text-center">

					{/* Available Badge */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card border-white/5"
					>
						<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
						<span className="text-green-400 font-semibold text-xs tracking-widest uppercase">
							{t.hero.availableBadge}
						</span>
					</motion.div>

					{/* Role Pill */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="flex items-center justify-center gap-2 mb-6"
					>
						<MapPin size={13} className="text-primary-light" />
						<span className="text-gray-500 font-medium text-xs tracking-widest uppercase">Angola</span>
						<span className="text-white/10 mx-1">|</span>
						<span className="text-primary-light font-semibold tracking-[0.15em] uppercase text-xs">
							{t.hero.role}
						</span>
					</motion.div>

					{/* Name */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight leading-[1.1]">
							<span className="opacity-50 font-light block text-base md:text-xl mb-3 tracking-normal">{t.hero.greeting}</span>
							<span className="text-gradient">Domingos Manuel</span>
							<br />
							<span className="text-gradient-primary">Ifafe</span>
						</h1>
						<p className="text-gray-500 text-sm md:text-base mt-4 mb-10 max-w-lg mx-auto leading-relaxed">
							{t.hero.tagline}
						</p>
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						<button
							onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
							className="w-full sm:w-auto group relative px-8 md:px-10 py-3.5 bg-white text-dark font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
							<span className="relative z-10 group-hover:text-white transition-colors">{t.hero.cta}</span>
						</button>
						
						<a
							href="https://github.com/Ifafe"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-8 md:px-10 py-3.5 glass-card glass-card-hover text-white font-bold rounded-xl transition-all inline-flex items-center justify-center gap-3"
						>
							<Github size={18} className="text-primary-light" />
							{t.hero.github}
						</a>
					</motion.div>

					{/* Stats Row — with CountUp */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="flex justify-center gap-8 md:gap-16 mt-16 md:mt-20"
					>
						{t.stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="text-2xl md:text-3xl font-black text-gradient-primary">
									<CountUp target={stat.value} />
								</div>
								<div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">
									{stat.label}
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			
			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 8, 0] }}
				transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/20"
			>
				<ChevronDown size={28} />
			</motion.div>

			{/* Bottom Fade Gradient */}
			<div className="absolute bottom-0 inset-x-0 h-24 md:h-32 bg-gradient-to-t from-dark to-transparent z-[5]" />
		</section>
	);
}
