import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
	const { t } = useLanguage();

	return (
		<section className="py-24 md:py-32 bg-dark/50 relative overflow-hidden" id="contact">
			{/* Decorative Glow */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 rounded-full blur-[120px]" />

			<div className="container mx-auto px-4 relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-2xl mx-auto"
				>
					<h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">
						{t.contact.title}
					</h2>
					<div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16 md:mb-20" />

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
						<motion.a 
							whileHover={{ y: -8 }}
							href="mailto:domingosifafe@gmail.com" 
							className="glass-card p-8 rounded-3xl group border-white/5 block"
						>
							<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<span className="block font-bold text-white text-sm md:text-base">Email</span>
							<span className="block mt-1 text-xs text-gray-400 truncate">domingosifafe@gmail.com</span>
							<span className="block mt-1 text-[10px] text-gray-600 uppercase tracking-widest">{t.contact.emailLabel ?? 'Get in touch'}</span>
						</motion.a>

						<motion.a 
							whileHover={{ y: -8 }}
							href="https://www.linkedin.com/in/domingos-manuel-ifafe-88b9aa2b1" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="glass-card p-8 rounded-3xl group border-white/5 block"
						>
							<div className="w-16 h-16 rounded-2xl bg-[#0077b5]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0077b5] group-hover:scale-110 transition-all">
								<Linkedin className="w-8 h-8 text-white" />
							</div>
							<span className="block font-bold text-white text-sm md:text-base">LinkedIn</span>
							<span className="block mt-1 text-xs text-gray-400 truncate">Domingos Ifafe</span>
							<span className="block mt-1 text-[10px] text-gray-600 uppercase tracking-widest">Connect</span>
						</motion.a>

						<motion.a 
							whileHover={{ y: -8 }}
							href="https://github.com/ifafe" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="glass-card p-8 rounded-3xl group border-white/5 block"
						>
							<div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all">
								<Github className="w-8 h-8 text-white group-hover:text-dark transition-colors" />
							</div>
							<span className="block font-bold text-white text-sm md:text-base">GitHub</span>
							<span className="block mt-1 text-xs text-gray-400 truncate">github.com/ifafe</span>
							<span className="block mt-1 text-[10px] text-gray-600 uppercase tracking-widest">Follow</span>
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

