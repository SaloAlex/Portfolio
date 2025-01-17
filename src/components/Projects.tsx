import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import imagep3 from '../public/assets/react.png';
import imagep4 from '../public/assets/hotel.png';
import imagep5 from '../public/assets/javascript.png';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'projects.project1.description',
    image: 'https://tecnoymas.shop/wp-content/uploads/2025/01/Baneer-2.jpg',
    tech: ['Wordpress', 'Css', 'WooCommerce', 'Gutemberg', 'Api'],
    github: '',
    demo: 'https://tecnoymas.shop/',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'projects.project2.description',
    image: 'https://menualan.netlify.app/assets/parrilla-imagen-CHym25Cf.png',
    tech: ['React', 'Tailwind', 'Vite', 'Firebase'],
    github: 'https://github.com/SaloAlex/Menu.git',
    demo: 'https://menualan.netlify.app/',
    },
  
  {
    id: 3,
    title: 'Project 3',
    description: 'projects.project3.description',
    image: imagep3,
    tech: ['React', 'Css', 'Bootstrap', 'Api'],
    github: 'https://github.com/SaloAlex/Entrega-Final-Alexander-Salomon-React.git',
    demo: 'https://glittery-madeleine-9451cb.netlify.app/',
  }, 
  {
    id: 4,
    title: 'Project 4',
    description: 'projects.project4.description',
    image: imagep4,
    tech: ['Html', 'Css', 'Sass', 'Bootstrap'],
    github: 'https://github.com/SaloAlex/Hotel-Resort-HTML-CSS.git',
    demo: 'https://saloalex.github.io/Hotel-Resort-HTML-CSS/',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'projects.project5.description',
    image:imagep5 ,
    tech: ['Html', 'Css', 'Javascript', 'Bootstrap', 'Api'],
    github: 'https://github.com/SaloAlex/E-comerce-Javascript-vanilla.git',
    demo: 'https://saloalex.github.io/E-comerce-Javascript-vanilla/',
    }, 
  
  
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12 max-w-6xl mx-auto"
      >
        {/* Título del componente */}
        <h2 className="text-3xl font-bold text-center text-primary dark:text-primary-light">
          {t('projects.title')}
        </h2>

        {/* Tarjetas de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-b from-background/50 to-muted/50 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Imagen del proyecto */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-110"
                />
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary dark:text-primary-light">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full" size="lg" variant="outline">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full" size="lg">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}