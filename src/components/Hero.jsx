import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

const NeonsHero = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI-Powered Accident Reporting
              </span>
            </motion.div>

            {/* Logo/Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-2xl shadow-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                InsuranceAid
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
            >
              Accidents Reported in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Seconds
                </span>
                <motion.span
                  animate={{
                    scaleX: [0, 1],
                  }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200 -z-0"
                  style={{ transformOrigin: 'left' }}
                ></motion.span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Our AI-powered mobile app instantly captures accident scenes, prevents insurance fraud, and accelerates claims processing—getting you back on the road faster than ever.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Shield, text: 'Fraud Prevention' },
                { icon: Zap, text: 'Instant AI Analysis' },
                { icon: Smartphone, text: 'Mobile First' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-blue-100"
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10s</div>
                <div className="text-sm text-gray-600">Average Report Time</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">AI Accuracy</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Always Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Floating Phone Mockup */}
            <motion.div
              animate={floatingAnimation}
              className="relative z-20"
            >
              {/* Phone Frame */}
              <div className="relative w-72 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl p-3 border-8 border-gray-900">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50 flex items-center justify-between px-6 text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Interface */}
                  <div className="pt-8 pb-4 px-4 h-full bg-gradient-to-b from-blue-50 to-white">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-3 shadow-lg">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Accident Detected</h3>
                      <p className="text-sm text-gray-600">Tap to report instantly</p>
                    </div>
                    
                    {/* Mock Camera View */}
                    <div className="bg-gray-200 rounded-2xl h-64 mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20"></div>
                      <svg className="w-20 h-20 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                        <path d="M21 15l-5-5L5 21" strokeWidth="2"/>
                      </svg>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold shadow-lg">
                      Capture & Report
                    </button>
                  </div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-10 right-10 w-20 h-20 border-4 border-blue-300 rounded-full opacity-20"
            ></motion.div>
            
            <motion.div
              animate={{
                rotate: -360,
                transition: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
              className="absolute bottom-10 left-10 w-16 h-16 border-4 border-cyan-300 rounded-full opacity-20"
            ></motion.div>

            {/* Glowing Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-200 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-200 rounded-full opacity-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="url(#wave-gradient)"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            opacity="0.1"
          ></path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default NeonsHero;