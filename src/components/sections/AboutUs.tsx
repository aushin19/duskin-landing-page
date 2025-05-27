"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-6">Pioneering Skin Science</h2>
          <p className="text-lg mb-6">
            At DUSKIN, we combine decades of dermatological research with innovative formulation 
            technology to create transformative skincare products. Our mission is to offer 
            transparent, effective solutions backed by rigorous scientific testing.
          </p>
          <p className="mb-8">
            Founded by a team of dermatologists and biochemists, we're committed to 
            developing products that deliver measurable results. We believe in clean 
            formulations, sustainable practices, and the perfect balance of science and nature.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-black/5 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Research-Driven</span>
            </div>
            <div className="flex items-center bg-black/5 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Dermatologist Formulated</span>
            </div>
            <div className="flex items-center bg-black/5 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Clinically Tested</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 relative h-[200px] sm:h-[250px] md:h-[400px] mx-auto max-w-4xl overflow-hidden rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="https://placehold.co/1200x400/f5f5f5/000000?text=DUSKIN+LAB"
            alt="DUSKIN Research Lab"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 800px"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs 