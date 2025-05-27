"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Text Column */}
        <motion.div 
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="font-bold tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skincare<span className="text-orange-500">.</span><br />Evolved by Science<span className="text-orange-500">.</span>
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            DUSKIN combines cutting-edge research with potent, clean ingredients to deliver visible results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="#products"
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Explore Our Innovation
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div 
          className="relative aspect-ratio-4x3 md:h-[500px] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="https://placehold.co/800x1000/f5f5f5/000000?text=DUSKIN+PRODUCT"
            alt="DUSKIN Skincare Product"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 