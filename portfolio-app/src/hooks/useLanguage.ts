import { useState, useEffect } from 'react';
import { dictionaries, type Locale } from '../lib/dictionaries';

export function useLanguage() {
      const [locale, setLocale] = useState<Locale>('pt');

      useEffect(() => {
            // Optional: Auto-detect browser language or load from local storage
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

      return {
            locale,
            t: dictionaries[locale],
            toggleLanguage,
      };
}
