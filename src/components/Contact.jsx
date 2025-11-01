import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import profile from '../config/profile';

/**
 * Contact Component
 * Contact form with validation and social links
 */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
    hidden: { opacity: 0, y: 30 },
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
      id="contact"
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-cosmic-darker/50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-iridescent-purple rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-metallic-gold rounded-full blur-3xl" />
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
              Get In <span className="text-metallic-gold">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-metallic-gold to-metallic-bronze mx-auto rounded-full mb-6" />
            <p className="text-text-muted max-w-2xl mx-auto">
              Interested in collaboration or have a question? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-text-light mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <motion.a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 p-4 bg-cosmic-slate/50 backdrop-blur-sm 
                             border border-metallic-gold/20 rounded-xl
                             hover:border-metallic-gold/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-metallic-gold/10 
                                  flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-metallic-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-1">Email</p>
                      <p className="text-text-light font-medium break-all">{profile.email}</p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-4 p-4 bg-cosmic-slate/50 backdrop-blur-sm 
                             border border-iridescent-blue/20 rounded-xl
                             hover:border-iridescent-blue/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-iridescent-blue/10 
                                  flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-iridescent-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-1">Phone</p>
                      <p className="text-text-light font-medium">{profile.phone}</p>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-cosmic-slate/50 backdrop-blur-sm 
                             border border-iridescent-purple/20 rounded-xl"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-iridescent-purple/10 
                                  flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-iridescent-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-1">Location</p>
                      <p className="text-text-light font-medium">{profile.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-display font-bold text-text-light mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    href={`https://${profile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 
                             bg-cosmic-slate/50 backdrop-blur-sm border border-metallic-gold/20 
                             rounded-xl hover:border-metallic-gold/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Github className="w-5 h-5 text-metallic-gold" />
                    <span className="text-sm font-medium text-text-light">GitHub</span>
                  </motion.a>

                  <motion.a
                    href={`https://${profile.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 
                             bg-cosmic-slate/50 backdrop-blur-sm border border-iridescent-blue/20 
                             rounded-xl hover:border-iridescent-blue/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Linkedin className="w-5 h-5 text-iridescent-blue" />
                    <span className="text-sm font-medium text-text-light">LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-light mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 bg-cosmic-slate/50 backdrop-blur-sm 
                              border ${errors.name ? 'border-red-500' : 'border-metallic-gold/20'} 
                              rounded-lg text-text-light placeholder-text-muted
                              focus:outline-none focus:ring-2 focus:ring-metallic-gold/50
                              transition-all duration-300`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-light mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 bg-cosmic-slate/50 backdrop-blur-sm 
                              border ${errors.email ? 'border-red-500' : 'border-metallic-gold/20'} 
                              rounded-lg text-text-light placeholder-text-muted
                              focus:outline-none focus:ring-2 focus:ring-metallic-gold/50
                              transition-all duration-300`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-light mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 bg-cosmic-slate/50 backdrop-blur-sm 
                              border ${errors.subject ? 'border-red-500' : 'border-metallic-gold/20'} 
                              rounded-lg text-text-light placeholder-text-muted
                              focus:outline-none focus:ring-2 focus:ring-metallic-gold/50
                              transition-all duration-300`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-3 bg-cosmic-slate/50 backdrop-blur-sm 
                              border ${errors.message ? 'border-red-500' : 'border-metallic-gold/20'} 
                              rounded-lg text-text-light placeholder-text-muted resize-none
                              focus:outline-none focus:ring-2 focus:ring-metallic-gold/50
                              transition-all duration-300`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-metallic-gold to-metallic-bronze 
                           rounded-lg font-semibold text-cosmic-dark
                           hover:shadow-lg hover:shadow-metallic-gold/50 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 
                             rounded-lg text-green-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
