"use client"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function Testimonials() {
  return (
    <AnimatedTestimonials
      title="What Our Customers Say"
      subtitle="Real experiences from people who have made DUSKIN part of their daily skincare routine."
      badgeText="Trusted by skincare enthusiasts"
      className="bg-black/5"
      testimonials={[
        {
          id: 1,
          name: "Lena M.",
          role: "Aesthetician",
          company: "Pure Glow Spa",
          content:
            "GlowBoost Moisturizer has become a staple in my skincare recommendations. Clients love the immediate hydration and long-lasting radiance. It gives a dewy finish without any greasiness.",
          rating: 4,
          avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        },
        {
          id: 2,
          name: "Jason R.",
          role: "Skincare Reviewer",
          company: "The Glow Guide",
          content:
            "After using GlowBoost Moisturizer for a month, I saw a real difference in my skin's plumpness and glow. It's lightweight but deeply nourishing—perfect for both AM and PM routines.",
          rating: 4,
          avatar: "https://randomuser.me/api/portraits/men/61.jpg",
        },
        {
          id: 3,
          name: "Priya S.",
          role: "Makeup Artist",
          company: "Flawless Faces",
          content:
            "GlowBoost is my go-to moisturizer under makeup. It smooths out texture and gives the perfect canvas for foundation without pilling. My clients are obsessed!",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
          id: 4,
          name: "Carlos B.",
          role: "Outdoor Fitness Coach",
          company: "PeakForm Athletics",
          content:
            "HydraShield 50 SPF Sunscreen keeps my skin protected during intense outdoor sessions. It’s sweat-resistant and doesn’t clog my pores. No white cast—just solid protection.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/71.jpg",
        },
        {
          id: 5,
          name: "Hannah W.",
          role: "Dermatology Nurse",
          company: "ClearSkin Clinic",
          content:
            "HydraShield 50 is one of the best sunscreens I’ve come across. It offers high protection while being incredibly lightweight. Patients with sensitive skin love it!",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/77.jpg",
        },
        {
          id: 6,
          name: "Noah G.",
          role: "Travel Blogger",
          company: "Roam & Radiate",
          content:
            "As someone always in the sun, HydraShield 50 has become a must-have. It blends in fast, feels comfortable, and keeps my skin calm even in extreme heat.",
          rating: 4,
          avatar: "https://randomuser.me/api/portraits/men/80.jpg",
        },
      ]}      
      trustedCompanies={["Vogue", "Elle", "GQ", "Cosmopolitan", "Harper's Bazaar"]}
      trustedCompaniesTitle="Featured in leading publications"
    />
  )
} 