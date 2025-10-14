import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, PlayIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
// Hype/Promo videos data
const hypePromoVideos = [{
  id: 'hp1',
  title: 'Memphis 901 FC Brand Reveal',
  image: 'https://img.youtube.com/vi/gY5Qz7N7BVU/maxresdefault.jpg',
  description: 'Official brand reveal for Memphis 901 Football Club',
  videoId: 'gY5Qz7N7BVU'
}
// More videos can be added here later
];
export const HypePromo = () => {
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
              <img src="https://img.youtube.com/vi/gY5Qz7N7BVU/maxresdefault.jpg" alt="Hype and promotional videos" className="w-full h-full object-cover" />
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
                  Hype/Promo
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  High-energy promotional videos and brand reveal content that
                  captures attention
                </p>
              </motion.div>
            </div>
          </section>
          {/* Hype/Promo Videos Gallery Section */}
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
                  Promotional Videos
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Brand reveals, hype videos, and promotional content that
                  builds excitement
                </p>
              </motion.div>
              {/* Featured Video */}
              {hypePromoVideos.length > 0 && <motion.div className="mb-16" initial={{
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
                  <div className="aspect-video relative overflow-hidden rounded-xl cursor-pointer group" onClick={() => handleVideoClick(hypePromoVideos[0].videoId, hypePromoVideos[0].title)}>
                    <img src={hypePromoVideos[0].image} alt={hypePromoVideos[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.6]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                        <PlayIcon className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h4 className="font-pixel text-2xl font-bold text-electric-cyan">
                        {hypePromoVideos[0].title}
                      </h4>
                      <p className="text-gray-300 font-sans">
                        {hypePromoVideos[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>}
              {/* Video Grid */}
              {hypePromoVideos.length > 1 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {hypePromoVideos.slice(1).map((video, index) => <motion.div key={video.id} className="relative group overflow-hidden rounded-lg cursor-pointer" initial={{
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
              }} onClick={() => handleVideoClick(video.videoId, video.title)}>
                      <div className="aspect-video overflow-hidden">
                        <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/90 via-[#130c24]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="font-pixel text-xl font-bold text-electric-cyan">
                          {video.title}
                        </h3>
                        <p className="text-gray-300 mt-2">
                          {video.description}
                        </p>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                          <PlayIcon className="w-8 h-8" />
                        </div>
                      </div>
                    </motion.div>)}
                </div>}
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