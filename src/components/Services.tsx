import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { CameraIcon, PenToolIcon, VideoIcon, LayoutIcon, ScissorsIcon } from 'lucide-react';
const services = [{
  title: 'Video Production',
  icon: VideoIcon
}, {
  title: 'Photography',
  icon: CameraIcon
}, {
  title: 'Creative Direction',
  icon: PenToolIcon
}, {
  title: 'Design',
  icon: LayoutIcon
}, {
  title: 'Editing',
  icon: ScissorsIcon
}];
export const Services = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="services" className="py-24 bg-[#130c24]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-4 text-electric-cyan neon-cyan">
            Creative Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
            Elevate your brand with our comprehensive suite of creative
            services.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }}>
          {services.map((service, index) => <motion.div key={index} className="bg-[#1a1030] p-8 rounded-lg hover:bg-[#241544] transition-colors duration-300 group flex flex-col items-center text-center" variants={item} whileHover={{
          y: -10
        }} transition={{
          duration: 0.3
        }}>
              <div className="w-14 h-14 bg-[#ff55ee]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ff55ee]/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#ff55ee]" />
              </div>
              <h3 className="font-pixel text-xl font-bold text-electric-cyan">
                {service.title}
              </h3>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};