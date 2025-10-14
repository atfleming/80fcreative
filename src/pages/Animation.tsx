import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, PlayIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
// Animation portfolio data
const animationProjects = [{
  id: 'a1',
  title: 'Animated Music Video',
  image: 'https://img.youtube.com/vi/Jl8iOcCepao/maxresdefault.jpg',
  description: 'Animated visual storytelling set to music',
  videoId: 'Jl8iOcCepao'
}, {
  id: 'a2',
  title: 'Motion Graphics Reel',
  image: 'https://img.youtube.com/vi/Kl5_Yd4vfcI/maxresdefault.jpg',
  description: 'Collection of motion graphics and animation work',
  videoId: 'Kl5_Yd4vfcI'
}, {
  id: 'a3',
  title: 'Animated Short Film',
  image: 'https://img.youtube.com/vi/WhWc3b3KhnY/maxresdefault.jpg',
  description: 'Experimental animated short exploring abstract concepts',
  videoId: 'WhWc3b3KhnY'
}, {
  id: 'a4',
  title: 'Brand Animation',
  image: 'https://img.youtube.com/vi/eoXlXM_qCGA/maxresdefault.jpg',
  description: 'Custom animated logo and brand elements for clients',
  videoId: 'eoXlXM_qCGA'
}, {
  id: 'a5',
  title: '3D Animation Showcase',
  image: 'https://img.youtube.com/vi/N_m56irWKeI/maxresdefault.jpg',
  description: '3D character and environment animations',
  videoId: 'N_m56irWKeI'
}, {
  id: 'a6',
  title: 'Lyric Video Animation',
  image: 'https://img.youtube.com/vi/YykjpeuMNEk/maxresdefault.jpg',
  description: 'Creative animated typography for music lyrics',
  videoId: 'YykjpeuMNEk'
}];
export const Animation = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const handleVideoClick = (id: string, title: string) => {
    setSelectedVideo({
      id,
      title
    });
  };
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black z-10"></div>
              <img src="/Screenshot_2025-10-13_at_4.06.21_PM.png" alt="Animated astronaut floating in space" className="w-full h-full object-cover" />
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
                  Animation
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Bringing stories to life through motion, imagination, and
                  visual artistry
                </p>
              </motion.div>
            </div>
          </section>
          {/* Animation Gallery Section */}
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
                  Animation Projects
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  A collection of animated music videos, motion graphics, and
                  experimental projects
                </p>
              </motion.div>
              {/* Animation projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {animationProjects.map((project, index) => <motion.div key={project.id} className="relative group overflow-hidden rounded-lg cursor-pointer" initial={{
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
              }} onClick={() => handleVideoClick(project.videoId, project.title)}>
                    <div className="aspect-video overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6]" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/90 via-[#130c24]/60 to-[#130c24]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="font-pixel text-xl font-bold text-electric-cyan">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mt-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                        <PlayIcon className="w-8 h-8" />
                      </div>
                    </div>
                  </motion.div>)}
              </div>
              <div className="text-center mt-16">
                <Link to="/">
                  <Button>Return to Home</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* Video Modal */}
      {selectedVideo && <VideoModal videoId={selectedVideo.id} title={selectedVideo.title} onClose={handleCloseModal} />}
    </div>;
};