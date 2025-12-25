import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Twitter, Github, ArrowUp, Zap } from 'lucide-react';

const NeonsFooter = () => {
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
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gamification', href: '#gamification' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/neons',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/neons',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/neons',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Animated orbs */}
        <motion.div
          animate={pulseAnimation}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            ...pulseAnimation,
            transition: { ...pulseAnimation.transition, delay: 1 }
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px),
                         linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12"
        >
          
          {/* Left Column - Branding */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="InsuranceAid Logo"
                className="h-12 mx-auto md:mx-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Logo */}
              <div className="hidden items-center justify-center md:justify-start">
                <div className="flex items-center space-x-3">
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-xl shadow-lg">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={2.5} />
              </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    InsuranceAid
                  </span>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
              Reimagining road safety through smart automation.
            </p>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2025 InsuranceAid. All rights reserved.
            </p>
          </motion.div>

          {/* Center Column - Navigation */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-center md:justify-start">
              <span className="mr-2">Explore</span>
              <div className="h-px flex-grow max-w-[60px] bg-gradient-to-r from-blue-400 to-transparent"></div>
            </h3>

            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mb-8"
          style={{ transformOrigin: 'center' }}
        ></motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-blue-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-300">•</span>
            <a href="#terms" className="hover:text-blue-600 transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-gray-300">•</span>
            <a href="#cookies" className="hover:text-blue-600 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-10 right-10 w-16 h-16 border-4 border-blue-200 rounded-full opacity-30"
      ></motion.div>
      
      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-10 left-10 w-12 h-12 border-4 border-cyan-200 rounded-full opacity-30"
      ></motion.div>
    </footer>
  );
};

export default NeonsFooter;