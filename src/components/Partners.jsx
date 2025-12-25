import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Cloud, Brain, Target, Code, ArrowRight } from 'lucide-react';

const NeonsPartners = () => {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const partners = [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      bgGradient: "from-blue-500 to-cyan-500",
      title: "Insurance Companies",
      description: "B2B2C partners leveraging InsuranceAid to streamline claim processing, reduce fraud, and improve customer satisfaction with faster settlements."
    },
    {
      icon: Wrench,
      iconColor: "text-cyan-600",
      bgGradient: "from-cyan-500 to-blue-500",
      title: "Auto Repair & Towing Services",
      description: "Trusted service providers connected directly through the app, offering instant assistance to drivers when they need it most."
    },
    {
      icon: Code,
      iconColor: "text-cyan-600",
      bgGradient: "from-cyan-500 to-blue-500",
      title: "API Integration Partners",
      description: "Businesses licensing our damage analysis API to access real-time assessments without full platform integration."
    }
  ];

  return (
    <section id="partners" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Animated orbs */}
        <motion.div
          animate={pulseAnimation}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            ...pulseAnimation,
            transition: { ...pulseAnimation.transition, delay: 1 }
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            ...pulseAnimation,
            transition: { ...pulseAnimation.transition, delay: 0.5 }
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full filter blur-3xl"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px),
                         linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Working Together for{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Safer Roads
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200 -z-0"
                style={{ transformOrigin: 'left' }}
              ></motion.span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            InsuranceAid thrives on collaboration. We partner with industry leaders across insurance, technology, and automotive services to deliver a seamless experience that benefits drivers, businesses, and the entire ecosystem.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${partner.bgGradient} rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${partner.bgGradient} rounded-2xl shadow-xl`}>
                  <partner.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {partner.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {partner.description}
              </p>

              {/* Bottom Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className={`mt-6 h-1 bg-gradient-to-r ${partner.bgGradient} origin-left rounded-full`}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* API Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100 shadow-xl mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-3xl shadow-2xl">
                <Code className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Access Our Damage Analysis API
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Want to integrate real-time vehicle damage assessment into your platform? Our API provides instant analysis without requiring full system integration—perfect for insurance portals, repair networks, and fleet management tools.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-20 right-20 w-20 h-20 border-4 border-blue-300 rounded-full opacity-20"
      ></motion.div>
      
      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 15, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-20 left-20 w-16 h-16 border-4 border-cyan-300 rounded-full opacity-20"
      ></motion.div>
    </section>
  );
};

export default NeonsPartners;