import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
      const { locale, toggleLanguage } = useLanguage();

      return (
            <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLanguage}
                  className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
            >
                  {locale === 'pt' ? '🇺🇸 EN' : '🇵🇹 PT'}
            </motion.button>
      );
}
