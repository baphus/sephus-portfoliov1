"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MapPin } from 'lucide-react';
import Logo from './logo';

export default function HolographicCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="w-full pb-24 md:pb-32">
       <div 
        className="holographic-container max-w-4xl mx-auto h-[250px]"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="holographic-card"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Front of the card */}
          <div className="holographic-face holographic-front bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-lg flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
                Let's Connect
            </h2>
            <p className="mt-4 text-lg text-foreground/80">Hover to reveal my details</p>
          </div>

          {/* Back of the card */}
          <div className="holographic-face holographic-back bg-background/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col justify-center items-center">
            <Logo className="h-16 w-16 mb-6" />
            <div className="space-y-4 text-left w-full max-w-sm">
               <div className="flex items-center gap-4">
                 <User className="h-5 w-5 text-primary"/>
                 <span className="text-foreground/90">Digital Professional</span>
               </div>
               <div className="flex items-center gap-4">
                 <Mail className="h-5 w-5 text-primary"/>
                 <a href="mailto:sarsonasjosephuskim@gmail.com" className="text-foreground/90 hover:text-primary transition-colors">
                   sarsonasjosephuskim@gmail.com
                 </a>
               </div>
               <div className="flex items-center gap-4">
                 <MapPin className="h-5 w-5 text-primary"/>
                 <span className="text-foreground/90">Cebu City, Philippines</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
