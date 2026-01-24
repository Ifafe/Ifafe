import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';

export function About() {
      const { t } = useLanguage();

      return (
            <section className="py-20 bg-dark/50" id="about">
                  <div className="container mx-auto px-4">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="max-w-3xl mx-auto text-center"
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                                    <span className="border-b-4 border-primary pb-2">{t.about.title}</span>
                              </h2>
                              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    {t.about.description}
                              </p>

                              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                          <h3 className="text-xl font-bold mb-4 text-accent">{t.aboutCards.backend.title}</h3>
                                          <p className="text-gray-400">
                                                {t.aboutCards.backend.desc}
                                          </p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                          <h3 className="text-xl font-bold mb-4 text-secondary">{t.aboutCards.mobile.title}</h3>
                                          <p className="text-gray-400">
                                                {t.aboutCards.mobile.desc}
                                          </p>
                                    </div>
                              </div>
                        </motion.div>
                  </div>
            </section>
      );
}
