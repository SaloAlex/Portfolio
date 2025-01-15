import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'skills.frontend.title',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Javascript'],
  },
  {
    icon: Database,
    title: 'skills.backend.title',
    skills: ['Node.js', 'Python', 'Api Rest'],
  },
  {
    icon: Palette,
    title: 'skills.design.title',
    skills: ['Adobe Photoshop', 'Adobe Premiere', 'Adobe After Effects', 'UI/UX'],
  },
  {
    icon: Globe,
    title: 'skills.other.title',
    skills: ['Git', 'GitHub', 'WordPress', 'Shopify'],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
            {t('skills.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border/50 bg-gradient-to-b from-background/50 to-muted/50 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="p-4 rounded-full bg-gradient-to-tr from-primary/10 to-primary/20 shadow-md">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-primary dark:text-primary-light">
                    {t(category.title)}
                  </h3>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
