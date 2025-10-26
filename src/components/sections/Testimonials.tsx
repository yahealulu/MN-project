import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Only Arabic testimonials
  const testimonials = [
    {
      name: 'أحمد الراشد',
      position: 'المالك، شركة البناء التقني',
      content: 'التعامل مع شركة الميزر والناصر غير طريقة عملنا في البناء المستدام. المواد التي قدموها تجاوزت توقعاتنا من حيث الجودة والتأثير البيئي الإيجابي.',
      avatar: '👨‍💼',
    },
    {
      name: 'سارة العتيبي',
      position: 'مدير المشاريع، المشاريع الخضراء',
      content: 'البدائل الصديقة للبيئة المقدمة من هذه الشركة ساعدتنا في تقليل بصمة الكربون بشكل كبير مع الحفاظ على متانة الهيكل. أنصح بها بشدة!',
      avatar: '👩‍💼',
    },
    {
      name: 'محمد الزهراني',
      position: 'مدير، البنية التحتية الحضرية',
      content: 'منتجات ممتازة وخدمة استثنائية. فريقهم دعمنا طوال المشروع بأكمله، مما ضمن تنفيذ حلول مستدامة بسلاسة.',
      avatar: '👨‍🔧',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-accent/80 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              
              <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-strong hover:shadow-glow transition-all duration-300">
                <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;