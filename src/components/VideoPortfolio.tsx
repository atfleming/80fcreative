import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { VideoModal } from './VideoModal';
import { PlayIcon } from 'lucide-react';
// Video data organized by category
const videoData = {
  reel: [{
    id: 'TW2EuzedA0I',
    title: 'Creative Reel',
    thumbnail: `https://img.youtube.com/vi/TW2EuzedA0I/maxresdefault.jpg`,
    description: 'Showcase of creative work across various projects'
  }],
  musicVideos: [{
    id: '21POSFRtjY4',
    title: 'Music Video 1',
    thumbnail: `https://img.youtube.com/vi/21POSFRtjY4/maxresdefault.jpg`,
    description: 'Artistic direction for music production'
  }, {
    id: 'RETndZHvfZs',
    title: 'Music Video 2',
    thumbnail: `https://img.youtube.com/vi/RETndZHvfZs/maxresdefault.jpg`,
    description: 'Visual storytelling through music'
  }, {
    id: '0efLsK07TxA',
    title: 'Music Video 3',
    thumbnail: `https://img.youtube.com/vi/0efLsK07TxA/maxresdefault.jpg`,
    description: 'Conceptual music video production'
  }, {
    id: 'v-70xxtygbA',
    title: 'Music Video 4',
    thumbnail: `https://img.youtube.com/vi/v-70xxtygbA/maxresdefault.jpg`,
    description: 'Experimental visual techniques in music'
  }, {
    id: '033jbJrfOfc',
    title: 'Music Video 5',
    thumbnail: `https://img.youtube.com/vi/033jbJrfOfc/maxresdefault.jpg`,
    description: 'Short-form music content'
  }],
  commercialWork: [{
    id: 'oQiZGRDIct8',
    title: 'Commercial 1',
    thumbnail: `https://img.youtube.com/vi/oQiZGRDIct8/maxresdefault.jpg`,
    description: 'Brand campaign commercial'
  }, {
    id: 'ewwyhhlLzjE',
    title: 'Commercial 2',
    thumbnail: `https://img.youtube.com/vi/ewwyhhlLzjE/maxresdefault.jpg`,
    description: 'Product showcase commercial'
  }, {
    id: 'AC45MfTpx0M',
    title: 'Commercial Reel',
    thumbnail: `https://img.youtube.com/vi/AC45MfTpx0M/maxresdefault.jpg`,
    description: 'Compilation of commercial work'
  }, {
    id: 'GprckON8yZo',
    title: 'Commercial 3',
    thumbnail: `https://img.youtube.com/vi/GprckON8yZo/maxresdefault.jpg`,
    description: 'Brand storytelling commercial'
  }, {
    id: 'kUZkK1oAbmY',
    title: 'Commercial 4',
    thumbnail: `https://img.youtube.com/vi/kUZkK1oAbmY/maxresdefault.jpg`,
    description: 'Creative commercial concept'
  }]
};
export const VideoPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const handleVideoClick = (id: string, title: string) => {
    setSelectedVideo({
      id,
      title
    });
  };
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  const filteredVideos = activeCategory ? activeCategory === 'reel' ? videoData.reel : activeCategory === 'musicVideos' ? videoData.musicVideos : videoData.commercialWork : [...videoData.reel, ...videoData.musicVideos, ...videoData.commercialWork];
  return <section id="video-portfolio" className="py-24 bg-[#0f0a1e]">
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
            Video Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
            A collection of video projects including creative reels, music
            videos, and commercial work.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button variant={activeCategory === null ? 'primary' : 'outline'} onClick={() => setActiveCategory(null)} className="px-4 py-2">
              All
            </Button>
            <Button variant={activeCategory === 'reel' ? 'primary' : 'outline'} onClick={() => setActiveCategory('reel')} className="px-4 py-2">
              Reel
            </Button>
            <Button variant={activeCategory === 'musicVideos' ? 'primary' : 'outline'} onClick={() => setActiveCategory('musicVideos')} className="px-4 py-2">
              Music Videos
            </Button>
            <Button variant={activeCategory === 'commercialWork' ? 'primary' : 'outline'} onClick={() => setActiveCategory('commercialWork')} className="px-4 py-2">
              Commercial
            </Button>
          </div>
        </motion.div>
        {/* Featured Reel Section (always visible if no filter or if reel filter) */}
        {(activeCategory === null || activeCategory === 'reel') && <motion.div className="mb-16" initial={{
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
            <h3 className="font-pixel text-2xl font-bold mb-6 text-center text-electric-cyan neon-cyan">
              Featured Reel
            </h3>
            <div className="aspect-video relative overflow-hidden rounded-xl cursor-pointer group">
              <img src={videoData.reel[0].thumbnail} alt={videoData.reel[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => handleVideoClick(videoData.reel[0].id, videoData.reel[0].title)} className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                  <PlayIcon className="w-10 h-10" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="font-pixel text-2xl font-bold text-electric-cyan">
                  {videoData.reel[0].title}
                </h4>
                <p className="text-gray-300 font-sans">
                  {videoData.reel[0].description}
                </p>
              </div>
            </div>
          </motion.div>}
        {/* Video Grid for Music Videos and Commercial Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.filter(video => activeCategory === 'reel' ? false : true) // Filter out the reel when showing the grid if reel is selected
        .map((video, index) => <motion.div key={video.id} className="relative group overflow-hidden rounded-lg cursor-pointer" initial={{
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
        }} onClick={() => handleVideoClick(video.id, video.title)}>
                <div className="aspect-video overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                    <PlayIcon className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#130c24] to-transparent p-4">
                  <h3 className="font-pixel text-lg font-bold text-electric-cyan">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-sans">
                    {video.description}
                  </p>
                </div>
              </motion.div>)}
        </div>
      </div>
      {/* Video Modal */}
      {selectedVideo && <VideoModal videoId={selectedVideo.id} title={selectedVideo.title} onClose={handleCloseModal} />}
    </section>;
};