import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '../components/Button';
// Design projects data
const designProjects = [{
  id: 'd1',
  title: 'Skull Illustration',
  category: 'Illustration',
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
  description: 'Glitch-style skull illustration with RGB color separation effects.'
}, {
  id: 'd2',
  title: 'Brand Identity',
  category: 'Branding',
  image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  description: 'Complete identity system for startup brand.'
}, {
  id: 'd3',
  title: 'UI/UX Design',
  category: 'Digital',
  image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  description: 'User interface design for digital platform.'
}, {
  id: 'd4',
  title: 'Packaging Design',
  category: 'Packaging',
  image: 'https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2032&auto=format&fit=crop',
  description: 'Innovative packaging design for consumer products.'
}];
export const Design = () => {
  const [filter, setFilter] = useState<string | null>(null);
  // Get all unique categories
  const categories = Array.from(new Set(designProjects.map(project => project.category)));
  // Filter projects by selected category
  const filteredProjects = filter ? designProjects.filter(project => project.category === filter) : designProjects;
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black z-10"></div>
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="Design work" className="w-full h-full object-cover" />
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
                  Design Work
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Creative graphic design, illustrations, and visual identity
                  projects
                </p>
              </motion.div>
            </div>
          </section>
          {/* Gallery Section */}
          <section className="py-24 bg-[#130c24]">
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
                  Design Portfolio
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                  A collection of design projects spanning branding,
                  illustration, and digital media.
                </p>
                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <Button variant={filter === null ? 'primary' : 'outline'} onClick={() => setFilter(null)} className="px-4 py-2">
                    All
                  </Button>
                  {categories.map(category => <Button key={category} variant={filter === category ? 'primary' : 'outline'} onClick={() => setFilter(category)} className="px-4 py-2">
                      {category}
                    </Button>)}
                </div>
              </motion.div>
              {/* Design projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => <motion.div key={project.id} className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]" initial={{
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
              }}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/90 via-[#130c24]/60 to-[#130c24]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[#ff55ee] text-sm font-medium mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-pixel text-xl font-bold text-electric-cyan">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mt-2 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>)}
              </div>
              {/* More projects coming soon message */}
              <motion.div className="text-center mt-16" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                <p className="text-gray-400 italic mb-8">
                  More design projects will be added to this collection soon
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