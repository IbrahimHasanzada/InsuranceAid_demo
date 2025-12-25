import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Camera, Brain, Send, CheckCircle, Wrench, RefreshCw, ArrowRight } from 'lucide-react';

const NeonsHowItWorks = () => {
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
      transition: { staggerChildren: 0.2 }
    }
  };

  const steps = [
    {
      number: "01",
      icon: Smartphone,
      iconColor: "text-blue-600",
      bgGradient: "from-blue-500 to-cyan-500",
      title: "Accident Happens",
      description: "Stay calm. Open the InsuranceAid app immediately at the scene—it's designed for moments like this.",
      time: "0 sec"
    },
    {
      number: "02",
      icon: Camera,
      iconColor: "text-cyan-600",
      bgGradient: "from-cyan-500 to-blue-500",
      title: "Capture in Real Time",
      description: "Follow the guided prompts to photograph your vehicle from all angles. Gallery uploads are blocked to ensure authenticity and prevent fraud.",
      time: "30 sec"
    },
    {
      number: "03",
      icon: Brain,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-600 to-cyan-600",
      title: "AI Damage Assessment",
      description: "Our AI engine analyzes the photos instantly, identifying damage severity, estimated repair costs, and generating a detailed assessment.",
      time: "10 sec"
    },
    {
      number: "04",
      icon: Send,
      iconColor: "text-cyan-500",
      bgGradient: "from-cyan-600 to-blue-600",
      title: "Instant Report Sent",
      description: "The system automatically creates a comprehensive report and submits it directly to your insurance provider. No paperwork, no phone calls, no waiting.",
      time: "5 sec"
    },
    {
      number: "05",
      icon: CheckCircle,
      iconColor: "text-blue-600",
      bgGradient: "from-blue-500 to-cyan-500",
      title: "Track & Resolve",
      description: "Monitor your claim status in real-time. Receive updates, communicate with your insurer, and get compensated faster than ever before.",
      time: "Minutes, not days"
    }
  ];

  const additionalFeatures = [
    {
      icon: Wrench,
      title: "Repair & Towing Assistance",
      description: "Get instant access to nearby trusted repair shops and emergency towing services."
    },
    {
      icon: RefreshCw,
      title: "Compare Insurance Offers",
      description: "Not happy with your current provider? Browse and switch to better insurance deals directly in the app."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
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
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            From Crash to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Clarity
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
            {' '}in 5 Steps
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            InsuranceAid handles everything from the moment of impact to final settlement. No complicated forms, no endless phone calls—just a smooth, intelligent process designed to get you back on track fast.
          </motion.p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 group">
                    {/* Step Number Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-6xl font-bold bg-gradient-to-r ${step.bgGradient} bg-clip-text text-transparent opacity-20`}>
                        {step.number}
                      </span>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className={`mt-6 h-1 bg-gradient-to-r ${step.bgGradient} origin-left rounded-full`}
                    ></motion.div>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative flex-shrink-0">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.bgGradient} rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative flex items-center justify-center w-24 h-24 bg-gradient-to-br ${step.bgGradient} rounded-full shadow-2xl z-10`}>
                      <step.icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>

                    {/* Pulse animation */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      className={`absolute inset-0 rounded-full border-4 bg-gradient-to-r ${step.bgGradient}`}
                      style={{ borderImage: 'linear-gradient(to right, #3b82f6, #06b6d4) 1' }}
                    ></motion.div>
                  </div>

                  {/* Connecting arrow (mobile only) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" />
                    </div>
                  )}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 mb-10"
          >
            Plus, We've Got You Covered
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-xl">
                      <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default NeonsHowItWorks;