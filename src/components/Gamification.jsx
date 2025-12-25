import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Gift, Zap, Award, Users, ChevronRight } from 'lucide-react';

const NeonsGamification = () => {
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

  const features = [
    {
      icon: Target,
      iconColor: "text-blue-600",
      bgColor: "from-blue-50 to-cyan-50",
      title: "Smart Driving Score",
      description: "Your behavior matters. Earn points for smooth acceleration, safe speeds, route consistency, and accident-free miles. The app tracks it all seamlessly in the background.",
      badge: "Real-time tracking"
    },
    {
      icon: Trophy,
      iconColor: "text-cyan-600",
      bgColor: "from-cyan-50 to-blue-50",
      title: "Climb the Leaderboard",
      description: "See how you rank against other drivers in your city or nationwide. Compete with friends, colleagues, or the community—and watch your safe driving pay off.",
      badge: "Monthly rankings"
    },
    {
      icon: Gift,
      iconColor: "text-blue-500",
      bgColor: "from-blue-100 to-cyan-100",
      title: "Exclusive Rewards",
      description: "Top performers unlock real benefits: insurance discounts, repair shop vouchers, premium app features, and seasonal prizes. Safety becomes rewarding, literally.",
      badge: "Cash-back perks"
    },
    {
      icon: TrendingUp,
      iconColor: "text-cyan-500",
      bgColor: "from-cyan-100 to-blue-100",
      title: "Long-Term Engagement",
      description: "InsuranceAid isn't just for accidents—it's your daily driving companion. Build streaks, track improvements, and maintain your score even when roads are clear.",
      badge: "Daily motivation"
    }
  ];

  const leaderboardData = [
    { rank: 1, name: "Alex M.", score: 9847, trend: "up" },
    { rank: 2, name: "Sarah K.", score: 9652, trend: "up" },
    { rank: 3, name: "You", score: 9401, trend: "same", highlight: true },
    { rank: 4, name: "James L.", score: 9285, trend: "down" },
    { rank: 5, name: "Emily R.", score: 9104, trend: "up" },
  ];

  return (
    <section id="gamification" className="relative py-20 lg:py-28 overflow-hidden">
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
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Gamification & Rewards
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Drive Smart,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Get Rewarded
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

          {/* Intro Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Safe driving shouldn't just feel good—it should pay off. InsuranceAid transforms everyday driving into a rewarding experience with smart scoring, competitive leaderboards, and real perks for responsible behavior. The better you drive, the more you earn.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative flex items-start space-x-4">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className={`relative flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.bgColor} rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                      
                      {/* Pulse Animation */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        className={`absolute inset-0 rounded-2xl border-2 ${feature.iconColor.replace('text-', 'border-')}`}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.bgColor} origin-left rounded-b-3xl`}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Leaderboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-100">
              {/* Leaderboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-2xl shadow-xl">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Top Drivers</h3>
                    <p className="text-sm text-gray-600">This Month</p>
                  </div>
                </div>
                <Award className="w-8 h-8 text-blue-600" />
              </div>

              {/* Leaderboard List */}
              <div className="space-y-3">
                {leaderboardData.map((driver, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                      driver.highlight 
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 shadow-md' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Rank Badge */}
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-bold ${
                        driver.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                        driver.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800' :
                        driver.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {driver.rank}
                      </div>
                      
                      {/* Name & Trend */}
                      <div>
                        <div className="font-semibold text-gray-900">{driver.name}</div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <span>{driver.score.toLocaleString()} pts</span>
                          {driver.trend === 'up' && <ChevronRight className="w-3 h-3 text-green-500 rotate-[-90deg]" />}
                          {driver.trend === 'down' && <ChevronRight className="w-3 h-3 text-red-500 rotate-90" />}
                        </div>
                      </div>
                    </div>

                    {/* Trophy for top 3 */}
                    {driver.rank <= 3 && (
                      <Trophy className={`w-5 h-5 ${
                        driver.rank === 1 ? 'text-yellow-500' :
                        driver.rank === 2 ? 'text-gray-400' :
                        'text-orange-500'
                      }`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-blue-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">+500</div>
                <div className="text-xs text-gray-600">Points today</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-cyan-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">15%</div>
                <div className="text-xs text-gray-600">Discount earned</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-100 rounded-3xl p-8 lg:p-10 border border-blue-100 shadow-xl"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Everyone Wins With Safer Roads
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              When drivers compete to be safer, insurers save on claims, cities see fewer accidents, and you get rewarded for doing what you already do best. It's not a zero-sum game—it's a smarter way forward.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
              <span className="text-blue-800 font-semibold">
                ✨ Start earning points today—no accident required
              </span>
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

export default NeonsGamification;