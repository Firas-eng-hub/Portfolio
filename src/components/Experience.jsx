import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Filter } from 'lucide-react';
import profile from '../config/profile';

/**
 * Experience Component
 * Animated project cards with filtering by category
 */
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'DevOps', 'Automation', 'Engineering'];

  const filteredExperience = activeFilter === 'All'
    ? profile.experience
    : profile.experience.filter(exp => exp.category === activeFilter);

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
      id="experience"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-metallic-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-iridescent-purple rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-light mb-4">
              Experience & <span className="text-metallic-gold">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-metallic-gold to-metallic-bronze mx-auto rounded-full mb-6" />
            <p className="text-text-muted max-w-2xl mx-auto">
              Building scalable infrastructure, automating workflows, and solving complex engineering challenges
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300
                           ${activeFilter === filter
                             ? 'bg-gradient-to-r from-metallic-gold to-metallic-bronze text-cosmic-dark shadow-lg shadow-metallic-gold/30'
                             : 'bg-cosmic-slate/50 text-text-accent hover:bg-cosmic-slate border border-metallic-gold/20'
                           }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                layout
                variants={itemVariants}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card */}
                <div className="relative h-full bg-cosmic-slate/50 backdrop-blur-sm 
                              border border-metallic-gold/20 rounded-2xl p-6
                              hover:border-metallic-gold/50 hover:shadow-xl hover:shadow-metallic-gold/10
                              transition-all duration-300 overflow-hidden">
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full
                                   ${exp.type === 'internship' 
                                     ? 'bg-iridescent-purple/20 text-iridescent-purple border border-iridescent-purple/30' 
                                     : 'bg-iridescent-blue/20 text-iridescent-blue border border-iridescent-blue/30'
                                   }`}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-metallic-gold/20 to-metallic-bronze/20
                                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-metallic-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-light mb-2 group-hover:text-metallic-gold transition-colors">
                    {exp.title}
                  </h3>

                  {/* Company */}
                  <p className="text-metallic-gold font-medium mb-3">
                    {exp.company}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-cosmic-dark/50 
                                 text-text-accent border border-iridescent-purple/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {exp.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded bg-cosmic-dark/50 
                                     text-metallic-gold border border-metallic-gold/20">
                        +{exp.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-metallic-gold to-metallic-bronze 
                              rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredExperience.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-text-muted">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
