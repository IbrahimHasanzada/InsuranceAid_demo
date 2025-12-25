import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Brain, FileCheck, Wrench, Trophy } from 'lucide-react';

const NeonsSolution = () => {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const features = [
    {
      icon: Camera,
      title: "Real-Time Capture",
      description: "Snap photos instantly at the scene—no gallery uploads allowed. This prevents fraud and ensures authentic documentation every time."
    },
    {
      icon: Brain,
      title: "AI Damage Analysis",
      description: "Our intelligent system assesses damage in seconds, providing accurate estimates and speeding up your claim process dramatically."
    },
    {
      icon: FileCheck,
      title: "Automated Reporting",
      description: "Say goodbye to paperwork. We automatically generate and submit reports to your insurance provider, saving you hours of hassle."
    },
    {
      icon: Wrench,
      title: "Repair & Emergency Support",
      description: "Instant access to trusted repair shops and emergency services—all integrated seamlessly within the app for your convenience."
    },
    {
      icon: Trophy,
      title: "Safe Driving Rewards",
      description: "Compete on leaderboards and earn rewards for maintaining excellent driving habits. Safety meets motivation."
    }
  ];

  return (
    <section id="solution" className="relative py-20 overflow-hidden">
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

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            How{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                InsuranceAid
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
            {' '}Solve this Problem
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From accident to resolution in minutes, not days. InsuranceAid transforms the stressful post-accident experience into a smooth, intelligent process powered by AI—so you can get back on the road faster and with complete peace of mind.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 h-full">
                {/* Icon with gradient background */}
                <div className="relative mb-5 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-xl">
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
            <span className="text-blue-800 font-semibold">
              ✨ Join thousands of drivers who've already simplified their insurance experience
            </span>
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

      {/* Glowing Rings */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-200 rounded-full opacity-10"></div>
      <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-200 rounded-full opacity-10"></div>
    </section>
  );
};

export default NeonsSolution;