import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { FloatingParticle } from './CosmicBackground';
import { useParallax } from '../hooks/useParallax';
import profile from '../config/profile';

/**
 * Hero Component
 * Full-height hero with animated typography and floating particles
 * Features parallax effects and cosmic animations
 */
const Hero = () => {
  const { ref, y } = useParallax(100);

  // Staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} size={i % 3 === 0 ? 'lg' : 'md'} />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-dark/50 to-cosmic-dark pointer-events-none" />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Location Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                          bg-cosmic-slate/50 backdrop-blur-sm border border-metallic-gold/20">
              <MapPin className="w-4 h-4 text-metallic-gold" />
              <span className="text-sm text-text-accent">{profile.location}</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="block text-text-light mb-2">
              {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}
            </span>
            <span className="block bg-gradient-to-r from-metallic-gold via-metallic-bronze to-metallic-gold 
                           bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              {profile.name.split(' ')[2]}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-text-muted mb-4 font-light"
          >
            {profile.title}
          </motion.p>

          {/* Tagline with split animation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {profile.tagline.split(' | ').map((tag, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-lg bg-iridescent-purple/10 border border-iridescent-purple/30
                         text-iridescent-purple font-medium text-sm sm:text-base
                         hover:bg-iridescent-purple/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-metallic-gold to-metallic-bronze 
                       rounded-lg font-semibold text-cosmic-dark overflow-hidden
                       hover:shadow-lg hover:shadow-metallic-gold/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-metallic-bronze to-metallic-gold"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#experience"
              className="px-8 py-4 border-2 border-metallic-gold/50 rounded-lg font-semibold 
                       text-metallic-gold hover:bg-metallic-gold/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cosmic-slate/50 backdrop-blur-sm 
                       hover:bg-iridescent-purple/20 hover:border-iridescent-purple
                       border border-transparent transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-text-accent hover:text-iridescent-purple" />
            </motion.a>

            <motion.a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cosmic-slate/50 backdrop-blur-sm 
                       hover:bg-iridescent-blue/20 hover:border-iridescent-blue
                       border border-transparent transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-text-accent hover:text-iridescent-blue" />
            </motion.a>

            <motion.a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-full bg-cosmic-slate/50 backdrop-blur-sm 
                       hover:bg-metallic-gold/20 hover:border-metallic-gold
                       border border-transparent transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6 text-text-accent hover:text-metallic-gold" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20
                 text-metallic-gold hover:text-metallic-bronze transition-colors
                 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50 rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
