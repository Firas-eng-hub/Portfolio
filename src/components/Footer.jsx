import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AnalyticsConsent from './AnalyticsConsent';
import profile from '../config/profile';

/**
 * Footer Component
 * Glassmorphic footer with quick links and social icons
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-cosmic-darker/80 backdrop-blur-lg border-t border-metallic-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              className="text-2xl font-display font-bold bg-gradient-to-r from-metallic-gold to-metallic-bronze 
                       bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {profile.name.split(' ').map(word => word[0]).join('')}
            </motion.div>
            <p className="text-text-muted text-sm mb-4">
              Telecommunications Engineering Student passionate about DevOps, Cloud Infrastructure, and Data Automation.
            </p>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-text-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-metallic-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-text-light mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-text-muted hover:text-metallic-gold transition-colors break-all"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-text-muted hover:text-metallic-gold transition-colors"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="text-text-muted">{profile.location}</li>
            </ul>
          </div>
        </div>

        <AnalyticsConsent />

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-metallic-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {currentYear} {profile.name}. Built with{' '}
              <Heart className="inline w-4 h-4 text-red-500" /> using React + Vite
            </p>

            <div className="flex items-center gap-4">
              <p className="text-text-muted text-xs">
                Designed for performance & accessibility
              </p>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-cosmic-slate/50 backdrop-blur-sm 
                         hover:bg-metallic-gold/20 hover:border-metallic-gold
                         border border-transparent transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-metallic-gold" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-metallic-gold via-iridescent-purple to-iridescent-blue" />
    </footer>
  );
};

export default Footer;
