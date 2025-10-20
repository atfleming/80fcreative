import React from 'react';
import { motion } from 'framer-motion';
export const About = () => {
  return <section id="about" className="py-24 bg-[#0f0a1e]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-6 text-electric-cyan neon-cyan">
              About Drew
            </h2>
            <p className="text-lg text-gray-300 mb-6 font-sans">
              Andrew Trent Fleming ("Drew")
              has produced and directed award-winning commercial work,
              photography, creative, and independent film work for brands,
              agencies, and production companies since 2005. His focus is on visual
              storytelling with a personal touch.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              His philosophy centers on blending documentary storytelling with
              strategic thinking, ensuring that every visual element serves both
              aesthetic and functional purposes to meet clients' needs. Drew has
              a passion for music-focused work and enjoys producing and
              directing music videos and artists promo packages.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From Stax Records, to FedEx, to Complex, to CNN: Drew has
              collaborated with brands across a wide variety of industries,
              bringing their stories to life through compelling visual
              narratives.
            </p>
            <div className="mt-8">
              <h3 className="font-pixel text-xl font-semibold mb-4 text-electric-cyan">
                Recognition
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-[#ff55ee] mr-2">•</span>
                  <span>
                    Winner, Best Short Film "The Typewriter", FEEDBACK Under 5 Minute Film Festival, Los Angeles, 2021
                  </span>
                  <span className="text-[#ff55ee] mr-2">•</span>
                  <span>
                    Winner, Gold/Best of Show for Video/Directing, American
                    Advertising Federation Memphis 2021
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff55ee] mr-2">•</span>
                  <span>
                    Winner, Indie Memphis Narrative Short Audience Choice Award
                    2020
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff55ee] mr-2">•</span>
                  <span>
                    Winner, Best Mississippi Short, Oxford Film Festival 2020
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#ff55ee] mr-2">•</span>
                  <span>Winner, Memphis Film Prize 2019</span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <div className="aspect-square relative z-10 rounded-lg overflow-hidden">
              <video 
                src="/BTS VIDEO FOR ABOUT.mov" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute top-8 -right-8 w-full h-full border-4 border-[#ff55ee] rounded-lg -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-[#5522ff] rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};