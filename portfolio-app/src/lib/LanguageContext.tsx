import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { dictionaries, type Locale } from './dictionaries';

// Define the shape of the dictionary based on one of them (they must be identical in structure)
type Dictionary = typeof dictionaries['pt'];

interface LanguageContextType {
      locale: Locale;
      t: Dictionary;
      toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
      const [locale, setLocale] = useState<Locale>('pt');

      useEffect(() => {
            const saved = localStorage.getItem('language') as Locale;
            if (saved && (saved === 'pt' || saved === 'en')) {
                  setLocale(saved);
            }
      }, []);

      const toggleLanguage = () => {
            setLocale((prev) => {
                  const newLocale = prev === 'pt' ? 'en' : 'pt';
                  localStorage.setItem('language', newLocale);
                  return newLocale;
            });
      };

      const value = {
            locale,
            t: dictionaries[locale] as Dictionary, // Cast to generic Dictionary type to satisfy TS
            toggleLanguage,
      };

      return (
            <LanguageContext.Provider value={value}>
                  {children}
            </LanguageContext.Provider>
      );
}

export function useLanguage() {
      const context = useContext(LanguageContext);
      if (context === undefined) {
            throw new Error('useLanguage must be used within a LanguageProvider');
      }
      return context;
}
