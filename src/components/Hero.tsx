import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import foto from '../public/assets/foto.jpg';

const LINKS = {
  email: "mailto:dvdsalomon6@gmail.com",
  github: "https://github.com/SaloAlex",
  linkedin: "https://www.linkedin.com/in/alexander-salomon-98a814183/",
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text and Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">
            {t('hero.greeting')} <br />
            <span className="text-primary">{t('hero.name')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="flex items-center transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() => (window.location.href = LINKS.email)}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('hero.contact')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() =>
                window.open(LINKS.github, "_blank", "noopener,noreferrer")
              }
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() =>
                window.open(LINKS.linkedin, "_blank", "noopener,noreferrer")
              }
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
              <img
                src={foto}
                alt={t('hero.altText', { defaultValue: 'Profile Picture' })}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent group-hover:opacity-100 transition-opacity duration-300 opacity-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
