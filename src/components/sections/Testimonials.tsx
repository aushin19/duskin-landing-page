"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  
  const testimonials = [
    {
      quote: "After just two weeks of using DUSKIN's Serum 01, I noticed a significant improvement in my skin's texture and brightness. The science-backed approach really delivers results.",
      name: "Sarah K.",
      info: "35, Combination Skin"
    },
    {
      quote: "I've tried countless products for my sensitive skin, but DUSKIN is the first brand that didn't cause irritation while still providing visible improvements to my fine lines.",
      name: "Michael T.",
      info: "42, Sensitive Skin"
    },
    {
      quote: "The skincare routine recommended by DUSKIN transformed my skin. The products work together perfectly, and I love knowing there's real science behind each formula.",
      name: "Emma L.",
      info: "28, Dry Skin"
    },
    {
      quote: "As someone who values transparency in skincare, I appreciate how DUSKIN clearly explains the research behind each ingredient. And more importantly, the results speak for themselves!",
      name: "David W.",
      info: "39, Oily Skin"
    }
  ]
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto">
            Real experiences from people who have made DUSKIN part of their daily skincare routine.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div 
            ref={testimonialsRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <motion.div 
                    className="bg-black/5 p-8 md:p-12 rounded-lg text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg 
                      className="w-10 h-10 mx-auto mb-6 text-black/20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.618-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.618-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg md:text-xl mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-black/70">{testimonial.info}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-black' : 'bg-black/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 