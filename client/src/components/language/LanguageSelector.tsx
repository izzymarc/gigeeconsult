import React from "react";
import { useI18n, Language } from "../../lib/i18n/i18n-provider";
import { Menu, ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// Language options with labels and flags
const languages: { value: Language; label: string; flag: string }[] = [
  {
    value: "en",
    label: "English",
    flag: "🇬🇧"
  },
  {
    value: "fr",
    label: "Français",
    flag: "🇫🇷"
  },
  {
    value: "es",
    label: "Español",
    flag: "🇪🇸"
  }
];

export default function LanguageSelector() {
  const { language, setLanguage, t } = useI18n();
  
  // Find the currently selected language
  const selectedLanguage = languages.find(l => l.value === language) || languages[0];
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="h-8 gap-1 px-2 text-gray-700 dark:text-gray-300 hover:bg-transparent hover:text-gray-900 dark:hover:text-white"
                aria-label={t('nav.changeLanguage', 'Change language')}
              >
                <span className="text-lg mr-1">{selectedLanguage.flag}</span>
                <span className="hidden md:inline">{selectedLanguage.label}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.value}
                  onClick={() => setLanguage(lang.value)}
                  className={cn(
                    "flex items-center gap-2 cursor-pointer",
                    language === lang.value && "font-medium"
                  )}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>
                  {language === lang.value && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent>
          {t('nav.changeLanguage', 'Change language')}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 