import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CameraIcon, PenToolIcon, VideoIcon, LayoutIcon, ScissorsIcon } from 'lucide-react';
import { Button } from '../components/Button';
const services = [{
  title: 'Video Production',
  description: 'Full-service video production from concept to final delivery. Specializing in narrative-driven content that connects with audiences.',
  icon: VideoIcon
}, {
  title: 'Photography',
  description: 'Professional photography services for commercial, editorial, and artistic projects. Capturing moments with a unique visual style.',
  icon: CameraIcon
}, {
  title: 'Creative Direction',
  description: "Strategic creative direction to guide your brand's visual identity and storytelling approach. Ensuring cohesive and impactful messaging.",
  icon: PenToolIcon
}, {
  title: 'Design',
  description: 'Visual design services including brand identity, digital assets, and print materials. Creating compelling visuals that elevate your brand.',
  icon: LayoutIcon
}, {
  title: 'Editing',
  description: 'Professional video and photo editing with an artistic eye. Transforming raw footage into polished, engaging final products.',
  icon: ScissorsIcon
}];
export const ServicesPage = () => {
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          {/* Hero Section */}
          <section className="relative h-[50vh]">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black z-10"></div>
              <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop" alt="Creative Services Background" className="w-full h-full object-cover" />
            </div>
            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
              <Link to="/" className="absolute top-8 left-8 flex items-center text-electric-cyan hover:text-white transition-colors">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>
                <h1 className="text-5xl md:text-7xl font-pixel mb-6 text-electric-cyan neon-cyan">
                  Creative Services
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Elevate your brand with our comprehensive suite of creative
                  services
                </p>
              </motion.div>
            </div>
          </section>
          {/* Services Section */}
          <section className="py-24 bg-[#130c24]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {services.map((service, index) => <motion.div key={index} className="bg-[#1a1030] p-8 rounded-lg hover:bg-[#241544] transition-colors duration-300 border border-electric-cyan/20" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} whileHover={{
                y: -10,
                boxShadow: '0 10px 30px -15px rgba(0, 255, 247, 0.3)'
              }}>
                    <div className="w-14 h-14 bg-[#ff55ee]/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-[#ff55ee]" />
                    </div>
                    <h3 className="font-pixel text-xl font-bold text-electric-cyan mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 font-sans">
                      {service.description}
                    </p>
                  </motion.div>)}
              </div>
              {/* CTA Section */}
              <motion.div className="mt-20 bg-[#1a1030] p-10 rounded-lg border border-electric-cyan/30 max-w-3xl mx-auto text-center" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h3 className="font-pixel text-2xl font-bold text-electric-cyan mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can bring your creative vision to life.
                  Contact us to get started.
                </p>
                <Link to="/">
                  <Button>Return to Home</Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>;
};