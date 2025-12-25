import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Gamification from './components/Gamification'
import HowItWorks from './components/HowItWorks'
import Partners from './components/Partners'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Gamification />
      <HowItWorks />
      <Partners />
      <Team />
      <Footer />
    </div>
  )
}

export default App
