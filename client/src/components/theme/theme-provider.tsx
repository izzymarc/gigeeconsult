import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
  themes?: string[];
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "gigee-theme",
  themes = ["light", "dark", "system"],
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    
    // Add a class to the body to enable smoother transitions
    document.body.classList.add('theme-transition');
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('theme-transition');
    };
  }, []);

  if (!mounted) {
    // Return a placeholder that won't flash during hydration
    return (
      <div className="theme-init">
        <style>{`
          .theme-init {
            opacity: 0;
            visibility: hidden;
          }
          
          .theme-transition * {
            transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
          }
        `}</style>
        {children}
      </div>
    );
  }

  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme={defaultTheme}
      storageKey={storageKey}
      themes={themes}
      enableSystem={true}
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeProviderContext = createContext<{ theme: string | undefined; setTheme: (theme: string) => void }>({
  theme: undefined,
  setTheme: () => null,
});

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};