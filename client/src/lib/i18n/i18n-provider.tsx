import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

// English translations
import enTranslations from "./translations/en";

// Types
export type Language = "en" | "fr" | "es";
type Translations = typeof enTranslations;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

// Create the context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Available translations
const translations: Record<Language, Translations> = {
  en: enTranslations,
  fr: enTranslations, // Placeholder for French translations
  es: enTranslations, // Placeholder for Spanish translations
};

// Load saved language from local storage or use browser language
const getBrowserLanguage = (): Language => {
  // Check for stored preference
  const storedLang = localStorage.getItem("language") as Language | null;
  if (storedLang && ["en", "fr", "es"].includes(storedLang)) {
    return storedLang;
  }

  // Use browser language
  const browserLang = navigator.language.split("-")[0];
  if (["en", "fr", "es"].includes(browserLang)) {
    return browserLang as Language;
  }

  // Default to English
  return "en";
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(getBrowserLanguage);

  // Set language and save to local storage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  // Translation function
  const t = useCallback(
    (key: string, defaultValue?: string): string => {
      const keys = key.split(".");
      let value: any = translations[language];

      // Traverse the object using the key path
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          // Key not found, return default or key
          return defaultValue || key;
        }
      }

      // Return the value if it's a string, otherwise return default or key
      return typeof value === "string" ? value : defaultValue || key;
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

// Hook to use i18n in components
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}; 