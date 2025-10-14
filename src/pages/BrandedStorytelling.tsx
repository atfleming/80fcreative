import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, PlayIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
// Branded storytelling video data
const brandedProjects = [{
  id: 'bs1',
  title: 'Memphis Record Pressing',
  image: 'https://img.youtube.com/vi/VaT_oPNG8eM/maxresdefault.jpg',
  description: 'Documentary showcasing the vinyl record manufacturing process',
  videoId: 'VaT_oPNG8eM'
}, {
  id: 'bs2',
  title: 'The Memphis Masters',
  image: "/Screenshot_2025-10-13_at_4.06.50_PM.png",
  description: 'Featured in Rolling Stone, a series celebrating Memphis music legacy',
  externalLink: 'https://www.rollingstone.com/music/music-news/big-star-memphis-masters-series-1021789/'
}, {
  id: 'bs3',
  title: 'U of M Give to the Legacy',
  image: 'https://img.youtube.com/vi/KiQfXe6o8Lw/maxresdefault.jpg',
  description: 'Regional Addy Award-winning branded documentary for University of Memphis',
  videoId: 'KiQfXe6o8Lw'
}, {
  id: 'bs4',
  title: 'Stax Music Academy',
  image: 'https://img.youtube.com/vi/qFQUSroCI8A/maxresdefault.jpg',
  description: 'Documentary highlighting the legacy and impact of Stax Music Academy',
  videoId: 'qFQUSroCI8A'
}];
export const BrandedStorytelling = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [externalLinkUrl, setExternalLinkUrl] = useState<string | null>(null);
  const handleVideoClick = (id: string, title: string) => {
    setSelectedVideo({
      id,
      title
    });
  };
  const handleExternalLinkClick = (link: string) => {
    window.open(link, '_blank');
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
              <img src="https://img.youtube.com/vi/VaT_oPNG8eM/maxresdefault.jpg" alt="Memphis Record Pressing documentary" className="w-full h-full object-cover" />
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
                  Branded Storytelling
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Documentary-style branded content that captures authentic
                  stories and connects audiences with brands
                </p>
              </motion.div>
            </div>
          </section>
          {/* Branded Storytelling Gallery Section */}
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
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Award-winning documentary-style content that tells authentic
                  brand stories
                </p>
              </motion.div>
              {/* Featured project - Memphis Record Pressing */}
              <motion.div className="mb-20" initial={{
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
                <div className="aspect-video relative overflow-hidden rounded-xl cursor-pointer group" onClick={() => handleVideoClick('VaT_oPNG8eM', 'Memphis Record Pressing')}>
                  <img src="https://img.youtube.com/vi/VaT_oPNG8eM/maxresdefault.jpg" alt="Memphis Record Pressing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.6]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                      <PlayIcon className="w-10 h-10" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold font-pixel text-electric-cyan">
                      Memphis Record Pressing
                    </h3>
                    <p className="text-gray-300">
                      Documentary showcasing the vinyl record manufacturing
                      process
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Other branded storytelling projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brandedProjects.slice(1).map((project, index) => <motion.div key={project.id} className="relative group overflow-hidden rounded-lg cursor-pointer" initial={{
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
              }} onClick={() => {
                if (project.videoId) {
                  handleVideoClick(project.videoId, project.title);
                } else if (project.externalLink) {
                  handleExternalLinkClick(project.externalLink);
                }
              }}>
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
                      {project.videoId ? <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                          <PlayIcon className="w-8 h-8" />
                        </div> : <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>}
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