import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useLanguage } from './lib/LanguageContext';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-accent selection:text-dark">
      <LanguageSwitcher />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Domingos Manuel Ifafe. {useLanguage().t.footer.text}
      </footer>
    </div>
  );
}

export default App;
