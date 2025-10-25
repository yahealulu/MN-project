import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Mail, Youtube, Phone } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const quickLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.fiberglass'), href: '#fiberglass' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.projects'), href: '#projects' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1HPUyxSNiG/?mibextid=wwXIfr' },
    { icon: Instagram, href: 'https://www.instagram.com/m_n_companyy?igsh=aXZhZHJvMXdvdTh5&utm_source=qr' },
    { icon: Youtube, href: 'https://youtube.com/@mn_companyy?si=uNpPCF4FccpZSbtJ' },
    { icon: Mail, href: 'mailto:mncompanyy.info@gmail.com' },
  ];

  // Get contact numbers based on current language
  const contactNumbers = t('footer.contactNumbers', { returnObjects: true }) as { number: string; name: string }[];

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-background to-primary/10 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Al-Maiz & Al-Nasser" className="h-17 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('products.product1.name')}</li>
              <li>{t('products.product2.name')}</li>
              <li>{t('products.product3.name')}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">{t('footer.connect')}</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <h3 className="font-bold text-lg mb-4">📞 {t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {contactNumbers.map((contact, index) => (
                <li key={index} className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a 
                    href={`tel:${contact.number}`} 
                    className="hover:text-accent transition-colors"
                  >
                    {contact.number} {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Al-Maiz & Al-Nasser. {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;