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
  return <div className="bg-white dark:bg-corporate-slate text-gray-900 dark:text-white min-h-screen w-full">
      <div>
        <main>
          {/* Hero Section */}
          <section className="relative h-[50vh]">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-corporate-slate/90 dark:via-corporate-slate/70 dark:to-corporate-slate z-10"></div>
              <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop" alt="Creative Services Background" className="w-full h-full object-cover" />
            </div>
            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
              <Link to="/" className="absolute top-8 left-8 flex items-center text-electric-cyan hover:text-corporate-navy dark:hover:text-white transition-colors">
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
                <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-corporate-navy dark:text-white">
                  Creative Services
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
                  Elevate your brand with our comprehensive suite of creative
                  services
                </p>
              </motion.div>
            </div>
          </section>
          {/* Services Section */}
          <section className="py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {services.map((service, index) => <motion.div key={index} className="bg-white dark:bg-slate-700 p-8 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300 subtle-shadow border clean-border dark:clean-border-dark" initial={{
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
                y: -10
              }}>
                    <div className="w-14 h-14 bg-electric-cyan/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-electric-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-sans">
                      {service.description}
                    </p>
                  </motion.div>)}
              </div>
              {/* CTA Section */}
              <motion.div className="mt-20 bg-white dark:bg-slate-700 p-10 rounded-lg subtle-shadow border clean-border dark:clean-border-dark max-w-3xl mx-auto text-center" initial={{
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
                <h3 className="text-2xl font-bold text-corporate-navy dark:text-white mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
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