import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, Camera, TrendingUp, XCircle, FileWarning } from 'lucide-react';

const NeonsProblemSection = () => {
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

  const problemPoints = [
    {
      icon: Clock,
      iconColor: "text-blue-600",
      bgColor: "from-blue-50 to-cyan-50",
      title: "Hours Lost on the Roadside",
      description: "Drivers are stuck waiting 60–90 minutes at accident scenes for insurance adjusters, police reports, and manual documentation. Time that could be spent safely at home or work.",
      stats: "60-90 min",
      statsLabel: "Average wait time"
    },
    {
      icon: Camera,
      iconColor: "text-cyan-600",
      bgColor: "from-cyan-50 to-blue-50",
      title: "Insurance Fraud & Manipulation",
      description: "Manually submitted photos can be edited, altered, or taken from galleries instead of real-time scenes. This creates massive fraud risks and delays legitimate claims processing.",
      stats: "30%",
      statsLabel: "Fraud-related claims"
    },
    {
      icon: TrendingUp,
      iconColor: "text-blue-500",
      bgColor: "from-blue-100 to-cyan-100",
      title: "Traffic Chaos & Delays",
      description: "Stalled vehicles and prolonged accident scenes cause gridlock, affecting thousands of commuters. Slow police response times compound the problem, creating hours of traffic backups.",
      stats: "3-5 hours",
      statsLabel: "Traffic delays caused"
    },
    {
      icon: FileWarning,
      iconColor: "text-cyan-500",
      bgColor: "from-cyan-100 to-blue-100",
      title: "Manual Processing Bottlenecks",
      description: "Traditional accident reporting relies on paperwork, phone calls, and back-and-forth communication. This outdated process creates unnecessary delays in claim settlements and repairs.",
      stats: "7-14 days",
      statsLabel: "Claim processing time"
    }
  ];

  return (
    <section id="problem" className="relative py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">The Current Reality</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            What's the{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Problem</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200 -z-0"></span>
            </span>
            ?
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every year, millions of drivers face the same frustrating reality after accidents: endless waiting, manual paperwork, fraud risks, and traffic nightmares. The traditional system is broken—and it's costing everyone time, money, and safety.
          </motion.p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {problemPoints.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 lg:p-10">
                {/* Icon Container */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${problem.bgColor} rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500`}>
                    <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
                    
                    {/* Warning Circle Animation */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 rounded-2xl border-2 ${problem.iconColor.replace('text-', 'border-')}`}
                    ></motion.div>
                  </div>

                  {/* Stats Badge */}
                  <div className="text-right">
                    <div className={`text-2xl lg:text-3xl font-bold ${problem.iconColor}`}>
                      {problem.stats}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {problem.statsLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {problem.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.bgColor} origin-left`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-100 rounded-3xl p-8 lg:p-10 border border-blue-100 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md">
                <XCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">The Cost of Inaction</h4>
                <p className="text-gray-600">Every minute wasted is money, time, and safety lost</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">$2.8B</div>
                <div className="text-sm text-gray-600">Annual fraud losses</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-blue-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">40M+</div>
                <div className="text-sm text-gray-600">Hours wasted yearly</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-blue-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">15K+</div>
                <div className="text-sm text-gray-600">Traffic jams daily</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transition Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            There has to be a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">better way</span>
            . And there is.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NeonsProblemSection;