import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      description: t('contact.success'),
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'info@almaizalnasser.com' },
    { icon: Phone, label: '+966 XX XXX XXXX' },
    { icon: MapPin, label: t('contact.address') },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-muted-foreground">{info.label}</span>
                </div>
              ))}
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
              <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-lg font-medium">
                Map Placeholder
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.name')}
                  required
                  className="h-12 bg-background border-border focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.email')}
                  required
                  className="h-12 bg-background border-border focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.phone')}
                  className="h-12 bg-background border-border focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.message')}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow group"
              >
                {t('contact.send')}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
