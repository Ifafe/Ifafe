import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useLanguage } from './lib/LanguageContext';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-600 text-xs border-t border-white/5">
        <span className="text-gradient-primary font-bold">DI</span>
        {' '}© {new Date().getFullYear()} Domingos Manuel Ifafe.
        <span className="ml-2">{useLanguage().t.footer.text}</span>
      </footer>
    </div>
  );
}

export default App;
