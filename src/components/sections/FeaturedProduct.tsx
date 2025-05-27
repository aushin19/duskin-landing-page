"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const FeaturedProduct = () => {
  const benefits = [
    'Reduces Fine Lines',
    'Boosts Hydration',
    'Improves Radiance',
    'Balances Skin Tone'
  ]
  
  return (
    <section id="products" className="py-16 md:py-24 bg-black/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            className="relative h-[500px] w-full order-1 md:order-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="https://placehold.co/800x1000/ffffff/000000?text=SERUM+01"
              alt="DUSKIN Serum 01 - Advanced Repair Formula"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Serum 01</h2>
            <div className="w-12 h-1 bg-black"></div>
            <p className="text-lg">
              Our revolutionary formula combines peptides, hyaluronic acid, and vitamin C to target 
              fine lines while deeply hydrating and brightening skin. Clinically proven to improve 
              visible signs of aging in just 2 weeks.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="#" 
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Discover Serum 01
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct 