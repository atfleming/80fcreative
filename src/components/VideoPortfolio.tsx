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
  // ...existing code...
  // Helper: build link to Projects page with filter
  const getProjectsLink = (category: string) => `/projects?filter=${encodeURIComponent(category)}`;

  return (
    <section id="video-portfolio" className="py-24 bg-[#0f0a1e]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-4 text-electric-cyan neon-cyan">Video Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">A collection of video projects including creative reels, music videos, and commercial work.</p>
        </motion.div>
        {/* Portfolio Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Music Videos Card */}
          <a href={getProjectsLink('Music Videos')} className="block">
            <motion.div className="relative group overflow-hidden rounded-xl cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={videoData.musicVideos[0].thumbnail} alt="Music Videos" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#ff55ee] text-[#130c24] px-6 py-3 rounded-full font-bold text-lg">View Music Videos</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="font-pixel text-2xl font-bold text-electric-cyan">Music Videos</h4>
                <p className="text-gray-300 font-sans">Explore all music video projects</p>
              </div>
            </motion.div>
          </a>
          {/* Documentary/Branded Card */}
          <a href={getProjectsLink('Documentary/Branded')} className="block">
            <motion.div className="relative group overflow-hidden rounded-xl cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <img src="/memphis masters barkays.png" alt="Documentary/Branded" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#ff55ee] text-[#130c24] px-6 py-3 rounded-full font-bold text-lg">View Documentary/Branded</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="font-pixel text-2xl font-bold text-electric-cyan">Documentary/Branded</h4>
                <p className="text-gray-300 font-sans">Explore all documentary and branded storytelling projects</p>
              </div>
            </motion.div>
          </a>
          {/* Commercial/Promo Card */}
          <a href={getProjectsLink('Commercial')} className="block">
            <motion.div className="relative group overflow-hidden rounded-xl cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <img src={videoData.commercialWork[0].thumbnail} alt="Commercial/Promo" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#ff55ee] text-[#130c24] px-6 py-3 rounded-full font-bold text-lg">View Commercial/Promo</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="font-pixel text-2xl font-bold text-electric-cyan">Commercial/Promo</h4>
                <p className="text-gray-300 font-sans">Explore all commercial and promo projects</p>
              </div>
            </motion.div>
          </a>
        </div>
        {/* ...existing video grid/modal code can follow here if desired... */}
      </div>
    </section>
  );
};