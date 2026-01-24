import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
      const { t } = useLanguage();

      return (
            <section className="py-20 bg-dark" id="projects">
                  <div className="container mx-auto px-4">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                    <span className="border-b-4 border-primary pb-2">{t.projects.title}</span>
                              </h2>
                        </motion.div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                              {t.projects.list.map((project, index) => (
                                    <motion.div
                                          key={project.title}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: index * 0.1 }}
                                          whileHover={{ y: -10 }}
                                          className="w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)] bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group flex flex-col"
                                    >
                                          {/* Project Image */}
                                          <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/30 to-purple-900/30 shrink-0">
                                                {'image' in project ? (
                                                      <img
                                                            src={(project as any).image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                                      />
                                                ) : (
                                                      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-500">
                                                            <div className="w-24 h-24 rounded-full bg-white/10 blur-2xl" />
                                                      </div>
                                                )}
                                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-dark via-dark/80 to-transparent pt-8">
                                                      <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                                                            {project.tags.map(tag => (
                                                                  <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/20 text-blue-300 px-2 py-1 rounded-md border border-primary/20 backdrop-blur-sm whitespace-nowrap">
                                                                        {tag}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                                      {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
                                                      {project.description}
                                                </p>

                                                <div className="flex gap-3 mt-auto">
                                                      {project.github && (project.github as string) !== '#' && (
                                                            <a
                                                                  href={project.github}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:border-primary/50 rounded-lg transition-all"
                                                            >
                                                                  <Github size={16} />
                                                                  {t.projects.viewCode}
                                                            </a>
                                                      )}
                                                      {project.link && (project.link as string) !== '#' && (
                                                            <a
                                                                  href={project.link}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-primary/20 hover:bg-primary/30 text-blue-300 hover:text-white border border-primary/30 hover:border-primary rounded-lg transition-all"
                                                            >
                                                                  <ExternalLink size={16} />
                                                                  {t.projects.viewLive}
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
