import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function App() {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-muted dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-border/40 bg-background/80 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary dark:text-primary-light"
          >
            AlexSalo Portfolio
          </motion.h1>
          <div className="flex gap-4 items-center">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-transform hover:scale-105 focus:ring-2 focus:ring-primary"
                >
                  <Globe2 className="h-5 w-5 text-primary dark:text-primary-light" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => changeLanguage('es')}
                  className={i18n.language === 'es' ? 'bg-primary/10 text-primary' : ''}
                >
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage('en')}
                  className={i18n.language === 'en' ? 'bg-primary/10 text-primary' : ''}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative transition-transform hover:scale-105 focus:ring-2 focus:ring-primary"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0 text-primary dark:text-primary-light" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100 text-primary dark:text-primary-light" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
