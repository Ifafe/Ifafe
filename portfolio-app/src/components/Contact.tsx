import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
      const { t } = useLanguage();

      return (
            <section className="py-20 bg-dark/50" id="contact">
                  <div className="container mx-auto px-4 text-center">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                                    <span className="border-b-4 border-primary pb-2">{t.contact.title}</span>
                              </h2>

                              <div className="flex justify-center gap-8 mt-12">
                                    <a href="mailto:domingosifafe@gmail.com" className="group">
                                          <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
                                                <Mail className="w-8 h-8 text-white" />
                                          </div>
                                          <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">{t.contact.email}</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/domingos-manuel-ifafe-88b9aa2b1" target="_blank" rel="noopener noreferrer" className="group">
                                          <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:bg-[#0077b5] group-hover:border-[#0077b5] transition-all">
                                                <Linkedin className="w-8 h-8 text-white" />
                                          </div>
                                          <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">{t.contact.linkedin}</span>
                                    </a>
                                    <a href="https://github.com/ifafe" target="_blank" rel="noopener noreferrer" className="group">
                                          <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:bg-black group-hover:border-white transition-all">
                                                <Github className="w-8 h-8 text-white" />
                                          </div>
                                          <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">{t.contact.github}</span>
                                    </a>
                              </div>
                        </motion.div>
                  </div>
            </section>
      );
}
