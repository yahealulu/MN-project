import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Waves, Palette, Thermometer, Clock } from 'lucide-react';

const Fiberglass = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const advantages = [
    {
      icon: Zap,
      title: t('fiberglass.advantage1.title'),
      description: t('fiberglass.advantage1.description'),
      color: 'text-blue-500',
    },
    {
      icon: Shield,
      title: t('fiberglass.advantage2.title'),
      description: t('fiberglass.advantage2.description'),
      color: 'text-green-500',
    },
    {
      icon: Waves,
      title: t('fiberglass.advantage3.title'),
      description: t('fiberglass.advantage3.description'),
      color: 'text-purple-500',
    },
    {
      icon: Palette,
      title: t('fiberglass.advantage4.title'),
      description: t('fiberglass.advantage4.description'),
      color: 'text-accent',
    },
    {
      icon: Thermometer,
      title: t('fiberglass.advantage5.title'),
      description: t('fiberglass.advantage5.description'),
      color: 'text-orange-500',
    },
    {
      icon: Clock,
      title: t('fiberglass.advantage6.title'),
      description: t('fiberglass.advantage6.description'),
      color: 'text-primary',
    },
  ];

  return (
    <section id="fiberglass" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t('fiberglass.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('fiberglass.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            {t('fiberglass.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 -z-10" />
              
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-strong transition-all duration-300">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${advantage.color} mb-6`}>
                  <advantage.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fiberglass;