import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Recycle, Navigation } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const products = [
    {
      icon: Layers,
      name: t('products.product1.name'),
      description: t('products.product1.description'),
      gradient: 'from-primary to-primary/60',
    },
    {
      icon: Recycle,
      name: t('products.product2.name'),
      description: t('products.product2.description'),
      gradient: 'from-accent to-accent/60',
    },
    {
      icon: Navigation,
      name: t('products.product3.name'),
      description: t('products.product3.description'),
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <section id="products" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" 
                   style={{ background: `linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)` }} />
              
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-strong transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} mb-6 shadow-glow`}>
                  <product.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
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

export default Products;
