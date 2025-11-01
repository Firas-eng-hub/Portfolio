import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import profile from '../config/profile';

/**
 * Achievements Component
 * Animated timeline for certifications, leadership roles, and associations
 */
const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Get icon component dynamically
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-./g, x => x[1].toUpperCase())];
    return IconComponent || Icons.Star;
  };

  // Group achievements by type
  const achievementTypes = {
    certification: { color: 'metallic-gold', borderColor: 'metallic-gold/30', bgColor: 'metallic-gold/10' },
    association: { color: 'iridescent-blue', borderColor: 'iridescent-blue/30', bgColor: 'iridescent-blue/10' },
    leadership: { color: 'iridescent-purple', borderColor: 'iridescent-purple/30', bgColor: 'iridescent-purple/10' },
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-metallic-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-iridescent-purple rounded-full blur-3xl" />
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
              Achievements & <span className="text-metallic-gold">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-metallic-gold to-metallic-bronze mx-auto rounded-full mb-6" />
            <p className="text-text-muted max-w-2xl mx-auto">
              Certifications, leadership roles, and contributions to student organizations
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 
                            bg-gradient-to-b from-metallic-gold via-iridescent-purple to-iridescent-blue
                            hidden md:block" />

              {/* Achievement Items */}
              <div className="space-y-12">
                {profile.achievements.map((achievement, index) => {
                  const IconComponent = getIcon(achievement.icon);
                  const typeStyle = achievementTypes[achievement.type];
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={achievement.id}
                      className={`relative flex items-center ${
                        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex-col`}
                      variants={itemVariants}
                    >
                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                        <motion.div
                          className={`group relative bg-cosmic-slate/50 backdrop-blur-sm 
                                    border border-${typeStyle.borderColor} rounded-2xl p-6
                                    hover:border-${typeStyle.color} hover:shadow-xl hover:shadow-${typeStyle.color}/20
                                    transition-all duration-300 overflow-hidden`}
                          whileHover={{ scale: 1.03, y: -5 }}
                        >
                          {/* Type Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full
                                          bg-${typeStyle.bgColor} text-${typeStyle.color} 
                                          border border-${typeStyle.borderColor}`}>
                              {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                            </span>
                            <span className="text-xs text-text-muted">{achievement.date}</span>
                          </div>

                          {/* Icon & Title */}
                          <div className="flex items-start gap-4 mb-3">
                            <div className={`w-12 h-12 rounded-lg bg-${typeStyle.bgColor}
                                          flex items-center justify-center flex-shrink-0
                                          group-hover:scale-110 transition-transform`}>
                              <IconComponent className={`w-6 h-6 text-${typeStyle.color}`} />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-text-light mb-1 group-hover:text-metallic-gold transition-colors">
                                {achievement.title}
                              </h3>
                              <p className="text-sm text-text-muted">
                                {achievement.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Hover Glow */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-${typeStyle.color}/5 to-transparent
                                        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                        </motion.div>
                      </div>

                      {/* Center Star (Desktop Only) */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                                    w-8 h-8 items-center justify-center z-10">
                        <motion.div
                          className={`w-6 h-6 rounded-full bg-${typeStyle.color} 
                                    border-4 border-cosmic-dark shadow-lg shadow-${typeStyle.color}/50
                                    flex items-center justify-center`}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-white"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Spacer (Desktop Only) */}
                      <div className="hidden md:block w-5/12" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Certifications', value: '1+', icon: 'Award', color: 'metallic-gold' },
              { label: 'Leadership Roles', value: '2', icon: 'Trophy', color: 'iridescent-purple' },
              { label: 'Organizations', value: '3', icon: 'Users', color: 'iridescent-blue' },
              { label: 'Events Organized', value: '5+', icon: 'Calendar', color: 'metallic-bronze' },
            ].map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <motion.div
                  key={stat.label}
                  className="bg-cosmic-slate/50 backdrop-blur-sm border border-metallic-gold/20 
                           rounded-xl p-6 text-center hover:border-metallic-gold/50 
                           hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <IconComponent className={`w-8 h-8 text-${stat.color} mx-auto mb-3`} />
                  <p className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
