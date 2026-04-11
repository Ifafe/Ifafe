import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';
import { Menu, X } from 'lucide-react';

export function Navbar() {
	const { t, locale, toggleLanguage } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	// Scroll progress + blur trigger
	useEffect(() => {
		const handleScroll = () => {
			const pos = window.scrollY;
			const total = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(pos > 20);
			setScrollProgress(total > 0 ? (pos / total) * 100 : 0);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Active section via IntersectionObserver
	useEffect(() => {
		const ids = ['about', 'skills', 'projects', 'contact'];
		const observers: IntersectionObserver[] = [];

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const obs = new IntersectionObserver(
				([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
				{ rootMargin: '-35% 0px -60% 0px' }
			);
			obs.observe(el);
			observers.push(obs);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	const navLinks = [
		{ label: t.nav?.about ?? 'About', href: '#about' },
		{ label: t.nav?.skills ?? 'Skills', href: '#skills' },
		{ label: t.nav?.projects ?? 'Projects', href: '#projects' },
		{ label: t.nav?.experience ?? 'Experience', href: '#experience' },
		{ label: t.nav?.contact ?? 'Contact', href: '#contact' },
	];

	const scrollTo = (href: string) => {
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
		setMobileOpen(false);
	};

	return (
		<>
			{/* Scroll Progress Bar */}
			<div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
				<motion.div
					className="h-full bg-gradient-to-r from-primary to-secondary origin-left"
					style={{ scaleX: scrollProgress / 100 }}
					transition={{ ease: 'linear' }}
				/>
			</div>

			{/* Navbar */}
			<motion.nav
				initial={{ y: -80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
					scrolled
						? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
						: 'bg-transparent'
				}`}
			>
				<div className="container mx-auto px-4 sm:px-6">
					<div className="flex items-center justify-between h-16 md:h-20">

						{/* Logo */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className="font-black text-xl tracking-tight"
						>
							<span className="text-gradient-primary">DI</span>
							<span className="text-white/30">.</span>
						</motion.button>

						{/* Desktop Links */}
						<div className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => {
								const isActive = activeSection === link.href.replace('#', '');
								return (
									<button
										key={link.href}
										onClick={() => scrollTo(link.href)}
										className={`text-sm font-semibold transition-colors duration-200 relative group ${
											isActive ? 'text-white' : 'text-gray-500 hover:text-gray-200'
										}`}
									>
										{link.label}
										<span
											className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
												isActive ? 'w-full' : 'w-0 group-hover:w-full'
											}`}
										/>
									</button>
								);
							})}
						</div>

						{/* Right Controls */}
						<div className="flex items-center gap-3">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={toggleLanguage}
								className="glass-card px-4 py-1.5 rounded-full text-[11px] font-black text-white tracking-[0.15em] border-white/10 hover:border-primary/40 transition-colors"
							>
								{locale === 'pt' ? 'EN' : 'PT'}
							</motion.button>

							{/* Mobile Toggle */}
							<button
								className="md:hidden glass-card p-2 rounded-xl border-white/10 text-white"
								onClick={() => setMobileOpen(!mobileOpen)}
								aria-label="Toggle menu"
							>
								{mobileOpen ? <X size={18} /> : <Menu size={18} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{mobileOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.25, ease: 'easeInOut' }}
							className="md:hidden bg-dark/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
						>
							<div className="container mx-auto px-4 py-6 flex flex-col gap-1">
								{navLinks.map((link, i) => {
									const isActive = activeSection === link.href.replace('#', '');
									return (
										<motion.button
											key={link.href}
											initial={{ opacity: 0, x: -16 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: i * 0.06 }}
											onClick={() => scrollTo(link.href)}
											className={`text-left text-lg font-bold py-3 border-b border-white/5 transition-colors ${
												isActive ? 'text-white' : 'text-gray-400 hover:text-white'
											}`}
										>
											<span className="text-primary/60 text-sm mr-3 font-mono">0{i + 1}.</span>
											{link.label}
										</motion.button>
									);
								})}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}
