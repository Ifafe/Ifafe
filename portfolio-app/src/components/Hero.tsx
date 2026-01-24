import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';

import { ParticleCanvas } from './ParticleCanvas';

export function Hero() {
      const { t } = useLanguage();

      return (
            <section className="min-h-screen flex items-center justify-center bg-dark text-white relative overflow-hidden">
                  {/* Background/Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-purple-900/20 pointer-events-none" />

                  {/* Interactive Particles */}
                  <ParticleCanvas />

                  <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                        >
                              <span className="text-secondary font-medium tracking-wider mb-4 block">
                                    {t.hero.greeting}
                              </span>
                              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    Domingos Manuel Ifafe
                              </h1>
                              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                                    {t.hero.role}
                              </h2>

                              <motion.div
                                    className="flex justify-center gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                              >
                                    <button
                                          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                          className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-medium transition-colors"
                                    >
                                          {t.hero.cta}
                                    </button>
                                    <a
                                          href="https://github.com/Ifafe/Ifafe"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
                                    >
                                          {t.hero.github}
                                    </a>
                              </motion.div>
                        </motion.div>
                  </div>
            </section>
      );
}
