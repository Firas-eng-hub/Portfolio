import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import profile from '../config/profile';

/**
 * Skills Component
 * Categorized skill badges with proficiency levels and iridescent hover effects
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Get icon component dynamically
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('')];
    return IconComponent || Icons.Circle;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-cosmic-darker/50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-metallic-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-iridescent-indigo rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-light mb-4">
              Skills & <span className="text-metallic-gold">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-metallic-gold to-metallic-bronze mx-auto rounded-full mb-6" />
            <p className="text-text-muted max-w-2xl mx-auto">
              A comprehensive toolkit spanning cloud infrastructure, data engineering, and modern development practices
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {Object.entries(profile.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-display font-bold text-text-light">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-metallic-gold/50 to-transparent" />
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = getIcon(skill.icon);
                    
                    return (
                      <motion.div
                        key={skill.name}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        {/* Skill Card */}
                        <div className="relative h-full bg-cosmic-slate/50 backdrop-blur-sm 
                                      border border-metallic-gold/20 rounded-xl p-5
                                      hover:border-iridescent-purple/50 hover:shadow-lg hover:shadow-iridescent-purple/20
                                      transition-all duration-300 overflow-hidden">
                          
                          {/* Icon */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-iridescent-purple/20 to-iridescent-blue/20
                                          flex items-center justify-center group-hover:scale-110 transition-transform">
                              <IconComponent className="w-5 h-5 text-iridescent-purple group-hover:text-iridescent-blue transition-colors" />
                            </div>
                            
                            {/* Proficiency Badge */}
                            <span className="text-xs font-bold text-metallic-gold bg-metallic-gold/10 
                                         px-2 py-1 rounded-full border border-metallic-gold/30">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Skill Name */}
                          <h4 className="text-lg font-semibold text-text-light mb-3 group-hover:text-iridescent-purple transition-colors">
                            {skill.name}
                          </h4>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-cosmic-dark/50 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-iridescent-purple via-iridescent-blue to-iridescent-indigo
                                       rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                delay: categoryIndex * 0.2 + index * 0.05 + 0.3, 
                                duration: 1, 
                                ease: 'easeOut' 
                              }}
                            />
                            
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: '-100%' }}
                              animate={{ x: '200%' }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                delay: categoryIndex * 0.2 + index * 0.05 + 0.5
                              }}
                            />
                          </div>

                          {/* Hover Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-iridescent-purple/0 via-iridescent-purple/5 to-iridescent-blue/0
                                        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>

                        {/* Card Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-iridescent-purple to-iridescent-blue 
                                      rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity -z-10" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interests Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-display font-bold text-text-light mb-6">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {profile.interests.map((interest, index) => (
                <motion.span
                  key={index}
                  className="px-5 py-3 rounded-full bg-cosmic-slate/50 backdrop-blur-sm 
                           border border-metallic-gold/30 text-text-accent
                           hover:border-metallic-gold hover:text-metallic-gold hover:scale-105
                           transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  whileHover={{ y: -3 }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
