import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { useLanguage } from './lib/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const { t, locale } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const footerLinks = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.projects, id: 'projects' },
    { label: locale === 'pt' ? 'Experiência' : 'Experience', id: 'experience' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/5 pt-12 pb-8">
        <div className="container mx-auto px-4">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <span className="text-gradient-primary font-black text-2xl">D'Ifafe<span className="text-white/30">.</span></span>
              <p className="text-gray-600 text-xs mt-1 max-w-xs">
                {t.footer.text}
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-xs text-gray-500 hover:text-white transition-colors font-semibold uppercase tracking-widest"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:domingosifafe@gmail.com"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/domingos-manuel-ifafe-88b9aa2b1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://github.com/ifafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-white/5 pt-6 text-center text-[11px] text-gray-700">
            © {new Date().getFullYear()} D'Ifafe. {locale === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
