import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
	const { t, locale } = useLanguage();
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [sent, setSent] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// mailto fallback — works without a backend
		const subject = encodeURIComponent(`Contacto do Portfolio — ${formData.name}`);
		const body = encodeURIComponent(
			`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
		);
		window.open(`mailto:domingosifafe@gmail.com?subject=${subject}&body=${body}`);
		setSent(true);
		setTimeout(() => setSent(false), 4000);
	};

	const socials = [
		{
			Icon: Mail,
			label: 'Email',
			sub: 'domingosifafe@gmail.com',
			hint: locale === 'pt' ? 'Enviar e-mail' : 'Get in touch',
			href: 'mailto:domingosifafe@gmail.com',
			hoverBg: 'group-hover:bg-primary',
		},
		{
			Icon: Linkedin,
			label: 'LinkedIn',
			sub: 'Domingos Ifafe',
			hint: 'Connect',
			href: 'https://www.linkedin.com/in/domingos-manuel-ifafe-88b9aa2b1',
			hoverBg: 'group-hover:bg-[#0077b5]',
		},
		{
			Icon: Github,
			label: 'GitHub',
			sub: 'github.com/ifafe',
			hint: 'Follow',
			href: 'https://github.com/ifafe',
			hoverBg: 'group-hover:bg-white',
		},
	];

	return (
		<section className="py-24 md:py-32 bg-dark/50 relative overflow-hidden" id="contact">
			{/* Decorative Glow */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 rounded-full blur-[120px]" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16 md:mb-20"
				>
					<h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight">
						{t.contact.title}
					</h2>
					<div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
					{/* Left: Social Cards */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="flex flex-col gap-4"
					>
						<p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
							{locale === 'pt'
								? 'Estou disponível para novos projetos, colaborações ou apenas para trocar ideias. Escolha a forma que preferir:'
								: "I'm available for new projects, collaborations, or just to exchange ideas. Choose your preferred way to reach me:"
							}
						</p>
						{socials.map(({ Icon, label, sub, hint, href, hoverBg }) => (
							<motion.a
								key={label}
								whileHover={{ x: 6 }}
								href={href}
								target={href.startsWith('mailto') ? undefined : '_blank'}
								rel="noopener noreferrer"
								className="glass-card p-5 rounded-2xl group border-white/5 hover:border-primary/20 flex items-center gap-5 transition-all"
							>
								<div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 ${hoverBg} group-hover:scale-110 transition-all`}>
									<Icon className="w-5 h-5 text-white" />
								</div>
								<div className="min-w-0">
									<span className="block font-bold text-white text-sm">{label}</span>
									<span className="block text-xs text-gray-400 truncate">{sub}</span>
								</div>
								<span className="ml-auto text-[10px] text-gray-600 uppercase tracking-widest whitespace-nowrap">
									{hint}
								</span>
							</motion.a>
						))}
					</motion.div>

					{/* Right: Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border-white/5 flex flex-col gap-5">
							<h3 className="text-white font-bold text-lg mb-1">
								{locale === 'pt' ? 'Enviar mensagem' : 'Send a message'}
							</h3>

							<div className="flex flex-col gap-1">
								<label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
									{locale === 'pt' ? 'Nome' : 'Name'}
								</label>
								<input
									required
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									placeholder={locale === 'pt' ? 'O teu nome' : 'Your name'}
									className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Email</label>
								<input
									required
									type="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									placeholder={locale === 'pt' ? 'O teu email' : 'Your email'}
									className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
									{locale === 'pt' ? 'Mensagem' : 'Message'}
								</label>
								<textarea
									required
									rows={4}
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									placeholder={locale === 'pt' ? 'Em que posso ajudar?' : 'How can I help you?'}
									className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
								/>
							</div>

							<motion.button
								type="submit"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.97 }}
								className="group relative overflow-hidden flex items-center justify-center gap-3 py-3.5 bg-white text-dark font-bold rounded-xl transition-all shadow-lg"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
								<Send size={16} className="relative z-10 group-hover:text-white transition-colors" />
								<span className="relative z-10 group-hover:text-white transition-colors">
									{sent
										? (locale === 'pt' ? '✓ Enviado!' : '✓ Sent!')
										: (locale === 'pt' ? 'Enviar mensagem' : 'Send message')}
								</span>
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
