"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const TrustedBy = () => {
  const partners = [
    { name: "Future Science Journal", logo: "https://placehold.co/200x80/f5f5f5/000000?text=FSJ" },
    { name: "Medical Bioscience", logo: "https://placehold.co/200x80/f5f5f5/000000?text=MB" },
    { name: "Science Institute", logo: "https://placehold.co/200x80/f5f5f5/000000?text=SCI" },
    { name: "Skin Biome Lab", logo: "https://placehold.co/200x80/f5f5f5/000000?text=SBL" },
    { name: "Institute of Dermatological Research", logo: "https://placehold.co/200x80/f5f5f5/000000?text=IDR" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }
  
  return (
    <section className="py-12 md:py-16 border-t border-b border-black/5">
      <div className="container">
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-medium">Trusted By</h3>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.name} 
              className="w-full h-20 relative"
              variants={itemVariants}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 40vw, 200px"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy 