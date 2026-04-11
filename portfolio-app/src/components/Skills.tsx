import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Award, RefreshCcw } from 'lucide-react';

interface HardSkill {
      name: string;
      icon: string;
      color: string;
}

interface SoftSkill {
      name: string;
      icon: any;
}

interface SkillsData {
      hard: HardSkill[];
      soft: SoftSkill[];
}



export function Skills() {
	const { t } = useLanguage();

	const skillsData: SkillsData = {
		hard: [
			{ name: "Flutter", icon: "https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white", color: "from-[#02569B]/20 to-blue-900/10" },
			{ name: "Spring Boot", icon: "https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white", color: "from-[#6DB33F]/20 to-green-900/10" },
			{ name: "Java", icon: "https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white", color: "from-[#ED8B00]/20 to-orange-900/10" },
			{ name: "React / Next.js", icon: "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB", color: "from-[#20232A]/20 to-blue-900/10" },
			{ name: "Node.js", icon: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white", color: "from-[#339933]/20 to-green-900/10" },
			{ name: "TypeScript", icon: "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white", color: "from-[#3178C6]/20 to-blue-900/10" },
			{ name: "PostgreSQL", icon: "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white", color: "from-[#4169E1]/20 to-blue-950/10" },
			{ name: "Supabase / Firebase", icon: "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black", color: "from-[#FFCA28]/20 to-yellow-900/10" },
		],
		soft: [
			{ name: t.softSkills.mentorship, icon: Users },
			{ name: t.softSkills.communication, icon: MessageSquare },
			{ name: t.softSkills.leadership, icon: Award },
			{ name: t.softSkills.adaptability, icon: RefreshCcw },
		]
	};

	return (
		<section className="py-20 md:py-32 bg-dark" id="skills">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-16 md:mb-24"
				>
					<h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-16 text-center text-white">
						{t.skills.hard}
					</h2>

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
						{skillsData.hard.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.05 }}
								whileHover={{ scale: 1.05, y: -5 }}
								className={`relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass-card flex flex-col items-center justify-center gap-3 transition-all cursor-default overflow-hidden group border-white/5 shadow-md`}
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
								<img src={skill.icon} alt={skill.name} className="h-8 md:h-10 relative z-10 group-hover:scale-110 shadow-sm transition-transform duration-300" />
								<div className="w-8 h-1 bg-white/10 rounded-full mt-2 group-hover:bg-white/50 transition-colors relative z-10" />
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-16 text-center text-white mt-12 md:mt-20">
						{t.skills.soft}
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
						{skillsData.soft.map((skill, index) => {
							const IconComponent = skill.icon;
							return (
								<motion.div
									key={skill.name}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -8 }}
									className="glass-card p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] text-center group border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg relative overflow-hidden"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
									<div className="flex justify-center mb-4 md:mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
										<div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
											<IconComponent className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" strokeWidth={2} />
										</div>
									</div>
									<h3 className="font-bold text-white text-base md:text-lg tracking-tight relative z-10 relative group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
										{skill.name}
									</h3>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}


