import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Award, ArrowRight } from 'lucide-react';

const NeonsTeam = () => {
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

  const teamMembers = [
    {
      name: "Arzu Mammadzada",
      title: "Marketing Manager",
      experience: "4+ years",
      currentRole: "Kaplan International Pathways",
      photo: "/img/arzuMammadzada.jpg",
      email: "arzumammadzada@gmail.com",
      linkedin: "https://www.linkedin.com/in/arzumammadzada/",
      phone: "+994 50 123 45 67",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ibrahim Hasanzada",
      title: "Software Engineer",
      experience: "1.5+ years",
      currentRole: "Div Academy",
      photo: "/img/ibrahimHasanzada.png",
      email: "ibrahimhesenzade03@gmail.com",
      linkedin: "https://www.linkedin.com/in/ibrahimhasanzada/",
      phone: "+994 70 244 25 26",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Ramazan Ismayilov",
      title: "Software Engineer",
      experience: "2+ years",
      currentRole: "Uniser MMC",
      photo: "/img/ramazanIsmayilov.jpg",
      email: "ramazanismayilovh@gmail.com",
      linkedin: "https://www.linkedin.com/in/ramazan-ismayilov/",
      phone: "+994  50 572 18 98",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      name: "Ali Abdurahmanli",
      title: "Software Engineer",
      experience: "1+ years",
      currentRole: "Coders Azerbaijan",
      photo: "/img/aliAbdurahmanli.jpg",
      email: "liabdurahmanli@gmail.com",
      linkedin: "https://www.linkedin.com/in/ali-abdurahmanli/",
      phone: "+994 50 769 17 93",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      name: "Emil Huseynov",
      title: "Software Engineer",
      experience: "1.5+ years",
      currentRole: ".ini",
      photo: "/img/emilHuseynov.jpg",
      email: "emilhuseynvh@gmail.com",
      linkedin: "https://www.linkedin.com/in/emilhuseynvh/",
      phone: "+994 50 406 24 35",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Mehemmed Emchiyev",
      title: "Software Engineer",
      experience: "1+ years",
      currentRole: "Kitgid",
      photo: "/img/mehemmedEmchiyev.jpeg",
      email: "memciyev@std.beu.edu.az",
      linkedin: "linkedin.com/in/emilmustafayev",
      phone: "+994 51 862 91 33",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="team" className="relative py-20 lg:py-28 overflow-hidden">
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
            Meet the{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Team
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
            We're a passionate team of engineers, designers, and industry experts building safer roads through AI. With decades of combined experience from leading tech and insurance companies, we're here to transform how accidents are handled.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100"
            >
              {/* Photo Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                {/* Placeholder gradient when image loads */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>
                
                {/* Image placeholder */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />


                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-900">{member.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.title}
                </p>

                {/* Current Role */}
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  {member.currentRole}
                </p>

                {/* Contact Icons */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="group/icon relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Email
                    </span>
                  </a>

                  <a
                    href={`${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-white" strokeWidth={2} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="group/icon relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 whitespace-nowrap">
                      Call
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className={`h-1 bg-gradient-to-r ${member.gradient}`}
                style={{ transformOrigin: 'left' }}
              ></motion.div>
            </motion.div>
          ))}
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

export default NeonsTeam;