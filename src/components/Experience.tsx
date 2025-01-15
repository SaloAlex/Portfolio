import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Experience() {
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
            {t('experience.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-4 border-gradient-to-b from-primary/50 to-primary/20 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-primary/70 shadow-md" />

              {/* Job Details */}
              <div className="p-4 rounded-lg shadow-md bg-gradient-to-b from-background/50 to-muted/20 hover:shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span>{t(`experience.jobs.${index + 1}.period`)}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-primary-light">
                  {t(`experience.jobs.${index + 1}.title`)}
                </h3>
                <p className="text-lg font-medium text-muted-foreground">
                  {t(`experience.jobs.${index + 1}.company`)}
                </p>
                <p className="text-muted-foreground">
                  {t(`experience.jobs.${index + 1}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
