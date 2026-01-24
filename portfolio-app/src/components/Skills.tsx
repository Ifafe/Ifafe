import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';

interface HardSkill {
      name: string;
      icon: string;
      color: string;
}

interface SoftSkill {
      name: string;
      icon: string;
}

interface SkillsData {
      hard: HardSkill[];
      soft: SoftSkill[];
}



export function Skills() {
      const { t } = useLanguage();

      const skillsData: SkillsData = {
            hard: [
                  { name: "Flutter", icon: "https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white", color: "bg-[#02569B]" },
                  { name: "Dart", icon: "https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white", color: "bg-[#0175C2]" },
                  { name: "Java", icon: "https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white", color: "bg-[#ED8B00]" },
                  { name: "Spring", icon: "https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white", color: "bg-[#6DB33F]" },
                  { name: "React", icon: "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB", color: "bg-[#20232A]" },
                  { name: "Node.js", icon: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white", color: "bg-[#339933]" },
                  { name: "MongoDB", icon: "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white", color: "bg-[#47A248]" },
                  { name: "Firebase", icon: "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black", color: "bg-[#FFCA28]" },
            ],
            soft: [
                  { name: t.softSkills.mentorship, icon: "🤝" },
                  { name: t.softSkills.communication, icon: "📢" },
                  { name: t.softSkills.leadership, icon: "⚖️" },
                  { name: t.softSkills.adaptability, icon: "🔄" },
            ]
      };

      return (
            <section className="py-20 bg-dark" id="skills">
                  <div className="container mx-auto px-4">
                        <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              className="mb-16"
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                                    <span className="border-b-4 border-accent pb-2">{t.skills.hard}</span>
                              </h2>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                                    {skillsData.hard.map((skill, index) => (
                                          <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                                                className={`${skill.color} p-4 rounded-xl flex items-center justify-center gap-3 transition-all cursor-default bg-opacity-20 border border-white/10 backdrop-blur-sm hover:brightness-110`}
                                          >
                                                {/* Using valid image URLs for icons would be better, but text fallback for now if images fail */}
                                                <span className="font-bold text-white text-lg">{skill.name}</span>
                                          </motion.div>
                                    ))}
                              </div>
                        </motion.div>

                        <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white mt-20">
                                    <span className="border-b-4 border-secondary pb-2">{t.skills.soft}</span>
                              </h2>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                    {skillsData.soft.map((skill) => (
                                          <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-white/5 p-6 rounded-xl text-center border border-white/10 hover:border-secondary/50 transition-colors"
                                          >
                                                <div className="text-4xl mb-4">{skill.icon}</div>
                                                <h3 className="font-medium text-gray-200">{skill.name}</h3>
                                          </motion.div>
                                    ))}
                              </div>
                        </motion.div>
                  </div>
            </section>
      );
}
