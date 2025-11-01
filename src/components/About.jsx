import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Server, Database, Award } from 'lucide-react';
import profile from '../config/profile';

/**
 * About Component
 * Animated bio with skill bars and education timeline
 */
const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-iridescent-purple rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-iridescent-blue rounded-full blur-3xl" />
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
              About <span className="text-metallic-gold">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-metallic-gold to-metallic-bronze mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-cosmic-slate/50 backdrop-blur-sm border border-metallic-gold/20 
                            rounded-2xl p-8 hover:border-metallic-gold/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-metallic-gold" />
                  <h3 className="text-2xl font-display font-bold text-text-light">
                    My Journey
                  </h3>
                </div>
                
                <p className="text-text-muted leading-relaxed mb-6">
                  {profile.bio}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-cosmic-dark/50 rounded-lg p-4 border border-iridescent-purple/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-5 h-5 text-iridescent-purple" />
                      <span className="text-xs text-text-muted uppercase tracking-wide">DevOps</span>
                    </div>
                    <p className="text-2xl font-bold text-text-light">5+</p>
                    <p className="text-xs text-text-muted">Technologies</p>
                  </div>

                  <div className="bg-cosmic-dark/50 rounded-lg p-4 border border-iridescent-blue/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-5 h-5 text-iridescent-blue" />
                      <span className="text-xs text-text-muted uppercase tracking-wide">Data & BI</span>
                    </div>
                    <p className="text-2xl font-bold text-text-light">4+</p>
                    <p className="text-xs text-text-muted">Tools Mastered</p>
                  </div>

                  <div className="bg-cosmic-dark/50 rounded-lg p-4 border border-metallic-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-metallic-gold" />
                      <span className="text-xs text-text-muted uppercase tracking-wide">Leadership</span>
                    </div>
                    <p className="text-2xl font-bold text-text-light">3+</p>
                    <p className="text-xs text-text-muted">Roles</p>
                  </div>

                  <div className="bg-cosmic-dark/50 rounded-lg p-4 border border-metallic-bronze/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-5 h-5 text-metallic-bronze" />
                      <span className="text-xs text-text-muted uppercase tracking-wide">Languages</span>
                    </div>
                    <p className="text-2xl font-bold text-text-light">5+</p>
                    <p className="text-xs text-text-muted">Proficient</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-metallic-gold" />
                <h3 className="text-2xl font-display font-bold text-text-light">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {profile.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="relative pl-8 pb-8 border-l-2 border-metallic-gold/30 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full 
                                  bg-metallic-gold border-4 border-cosmic-dark
                                  shadow-lg shadow-metallic-gold/50" />

                    {/* Content */}
                    <div className="bg-cosmic-slate/50 backdrop-blur-sm border border-metallic-gold/20 
                                  rounded-xl p-6 hover:border-metallic-gold/40 
                                  hover:shadow-lg hover:shadow-metallic-gold/10
                                  transition-all duration-300">
                      {edu.status === 'current' && (
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold 
                                     bg-iridescent-purple/20 text-iridescent-purple 
                                     rounded-full border border-iridescent-purple/30">
                          Current
                        </span>
                      )}
                      <h4 className="text-lg font-bold text-text-light mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-metallic-gold font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-text-muted">
                        {edu.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h4 className="text-xl font-display font-bold text-text-light mb-4">
                  Languages
                </h4>
                <div className="space-y-4">
                  {profile.languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, width: 0 }}
                      animate={isInView ? { opacity: 1, width: '100%' } : { opacity: 0, width: 0 }}
                      transition={{ delay: index * 0.15 + 0.8, duration: 0.6 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-text-light">
                          {lang.name}
                        </span>
                        <span className="text-xs text-text-muted">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-2 bg-cosmic-dark/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-metallic-gold to-metallic-bronze"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                          transition={{ delay: index * 0.15 + 0.9, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
