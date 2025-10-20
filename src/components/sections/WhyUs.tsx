import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Shield, DollarSign, Users } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const reasons = [
    {
      icon: Leaf,
      title: t('whyUs.reason1.title'),
      description: t('whyUs.reason1.description'),
      color: 'text-green-500',
    },
    {
      icon: Shield,
      title: t('whyUs.reason2.title'),
      description: t('whyUs.reason2.description'),
      color: 'text-blue-500',
    },
    {
      icon: DollarSign,
      title: t('whyUs.reason3.title'),
      description: t('whyUs.reason3.description'),
      color: 'text-accent',
    },
    {
      icon: Users,
      title: t('whyUs.reason4.title'),
      description: t('whyUs.reason4.description'),
      color: 'text-primary',
    },
  ];

  return (
    <section id="why-us" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
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
            {t('whyUs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-strong transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${reason.color}`}>
                    <reason.icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l-2xl origin-top" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
