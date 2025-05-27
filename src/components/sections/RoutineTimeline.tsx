"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const RoutineTimeline = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const routineSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v10Z" />
          <path d="M12 14v-4" />
          <path d="M10 3v3" />
          <path d="M14 3v3" />
        </svg>
      ),
      step: 'Cleanse',
      description: 'Remove impurities and prepare skin for treatment.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3c0-.5.5-1 1-1h.3c.5 0 1 .5 1 1v5.7c0 1.3.8 2 2.2 2.1h.3" />
          <path d="M4 10.184V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.184a3 3 0 0 1 0 5.633V16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.183a3 3 0 0 1 0-5.633Z" />
        </svg>
      ),
      step: 'Toner',
      description: 'Balance pH levels and hydrate the skin.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 7.5a1.5 1.5 0 0 1 4 0 1.5 1.5 0 0 1-4 0" />
          <path d="M8.26 3.75a2 2 0 0 1 1.98-.51l5.49 1.5a2 2 0 0 1 1.45 2.41L14.5 18.24a2 2 0 0 1-1.96 1.54H7.7a2 2 0 0 1-1.96-1.54L3.06 7.15a2 2 0 0 1 1.45-2.41l5.49-1.5a2 2 0 0 1 1.98.51Z" />
        </svg>
      ),
      step: 'Serum',
      description: 'Deliver concentrated active ingredients to target specific concerns.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      step: 'Moisturize',
      description: 'Lock in hydration and strengthen the skin barrier.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
      step: 'Sunscreen',
      description: 'Protect skin from UV damage and premature aging.'
    }
  ]

  const lineVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%', 
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      } 
    }
  }

  return (
    <section id="routine" className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-4">Your Daily Routine</h2>
          <p className="max-w-2xl mx-auto">
            Follow our science-backed skincare routine for optimal results. 
            Each step is designed to work synergistically for healthier, more radiant skin.
          </p>
        </motion.div>

        <div className="mt-16">
          {/* Desktop Timeline (horizontal) */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line Background */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/5 -translate-y-1/2"></div>
              
              {/* Animated Timeline Line */}
              <motion.div 
                className="absolute top-1/2 left-0 h-0.5 bg-black/30 -translate-y-1/2 origin-left"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              />
              
              {/* Timeline Steps */}
              <div className="flex justify-between relative z-10">
                {routineSteps.map((step, index) => (
                  <motion.div 
                    key={step.step}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <motion.div 
                      className={`bg-white p-4 rounded-full border cursor-pointer transition-all duration-300 mb-4 ${
                        activeStep === index || hoveredStep === index 
                          ? 'border-black shadow-lg scale-110' 
                          : 'border-black/10'
                      }`}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="text-black w-10 h-10 flex items-center justify-center"
                        animate={{ 
                          rotate: activeStep === index ? [0, -10, 10, -5, 5, 0] : 0,
                        }}
                        transition={{ 
                          duration: 0.5, 
                          ease: "easeInOut",
                          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                        }}
                      >
                        {step.icon}
                      </motion.div>
                    </motion.div>
                    <motion.div className="bg-white px-2 py-1 z-20 text-center w-full">
                      <motion.h3 
                        className={`text-lg font-medium mb-1 ${activeStep === index ? 'text-black' : ''}`}
                        animate={{ 
                          scale: activeStep === index ? 1.05 : 1,
                          fontWeight: activeStep === index ? 500 : 400
                        }}
                      >
                        {step.step}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-center max-w-[150px] mx-auto"
                        animate={{ 
                          opacity: activeStep === index ? 1 : 0.8
                        }}
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline (vertical) */}
          <div className="md:hidden">
            <div className="relative pl-14">
              {/* Timeline Line Background */}
              <div className="absolute top-0 left-6 h-full w-0.5 bg-black/5 transform -translate-x-1/2 z-0"></div>
              
              {/* Animated Timeline Line */}
              <motion.div 
                className="absolute top-0 left-6 w-0.5 bg-black/30 transform -translate-x-1/2 origin-top z-0"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true, margin: "-100px" }}
              />
              
              {/* Timeline Steps - Vertical Layout */}
              <div className="space-y-12 relative z-10">
                {routineSteps.map((step, index) => (
                  <motion.div 
                    key={step.step}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                  >
                    <motion.div 
                      className={`absolute top-0 left-0 -translate-x-[calc(100%+8px)] bg-white p-3 rounded-full border cursor-pointer ${
                        activeStep === index ? 'border-black shadow-md' : 'border-black/10'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-black w-7 h-7 flex items-center justify-center"
                        animate={{ 
                          rotate: activeStep === index ? [0, -10, 10, -5, 5, 0] : 0 
                        }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeInOut",
                          times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                        }}
                      >
                        {step.icon}
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className={`bg-white pl-4 py-3 pr-2 rounded-lg border ${
                        activeStep === index ? 'border-black/20 shadow-sm' : 'border-transparent'
                      }`}
                    >
                      <motion.h3 
                        className={`text-lg font-medium mb-1 ${activeStep === index ? 'text-black' : ''}`}
                        animate={{ 
                          fontWeight: activeStep === index ? 500 : 400
                        }}
                      >
                        {step.step}
                      </motion.h3>
                      <motion.p 
                        className="text-sm"
                        animate={{ 
                          opacity: activeStep === index ? 1 : 0.8
                        }}
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoutineTimeline 