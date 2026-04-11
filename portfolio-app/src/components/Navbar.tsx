import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';
import { Menu, X } from 'lucide-react';

export function Navbar() {
	const { t, locale, toggleLanguage } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const pos = window.scrollY;
			const total = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(pos > 20);
			setScrollProgress((pos / total) * 100);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ label: t.nav?.about ?? 'About', href: '#about' },
		{ label: t.nav?.skills ?? 'Skills', href: '#skills' },
		{ label: t.nav?.projects ?? 'Projects', href: '#projects' },
		{ label: t.nav?.contact ?? 'Contact', href: '#contact' },
	];

	const scrollTo = (href: string) => {
		const el = document.querySelector(href);
		el?.scrollIntoView({ behavior: 'smooth' });
		setMobileOpen(false);
	};

	return (
		<>
			{/* Scroll Progress Bar */}
			<div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-dark/50">
				<motion.div
					className="h-full bg-gradient-to-r from-primary to-secondary"
					style={{ width: `${scrollProgress}%` }}
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
							className="font-black text-lg md:text-xl tracking-tight"
						>
							<span className="text-gradient-primary">DI</span>
							<span className="text-white/40">.</span>
						</motion.button>

						{/* Desktop Links */}
						<div className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => (
								<button
									key={link.href}
									onClick={() => scrollTo(link.href)}
									className="text-sm font-semibold text-gray-400 hover:text-white transition-colors relative group"
								>
									{link.label}
									<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full" />
								</button>
							))}
						</div>

						{/* Right Controls */}
						<div className="flex items-center gap-3">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={toggleLanguage}
								className="relative px-4 py-1.5 rounded-full text-[11px] font-black text-white tracking-[0.15em] overflow-hidden glass-card border-white/10"
							>
								<span className="relative z-10">{locale === 'pt' ? 'EN' : 'PT'}</span>
								<span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity" />
							</motion.button>

							{/* Mobile Menu Toggle */}
							<button
								className="md:hidden glass-card p-2 rounded-xl border-white/10 text-white"
								onClick={() => setMobileOpen(!mobileOpen)}
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
							className="md:hidden bg-dark/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
						>
							<div className="container mx-auto px-4 py-6 flex flex-col gap-4">
								{navLinks.map((link, i) => (
									<motion.button
										key={link.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.07 }}
										onClick={() => scrollTo(link.href)}
										className="text-left text-lg font-bold text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors"
									>
										<span className="text-primary mr-3">0{i + 1}.</span>
										{link.label}
									</motion.button>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}
