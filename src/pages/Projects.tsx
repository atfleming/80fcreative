import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
import { PlayIcon, ArrowLeftIcon } from 'lucide-react';
// Combined portfolio data including both projects and videos
const portfolioItems = [
// Video items
{
  id: 'v1',
  title: 'Creative Reel',
  category: 'Video',
  image: 'https://img.youtube.com/vi/TW2EuzedA0I/maxresdefault.jpg',
  description: 'Showcase of creative work across various projects',
  videoId: 'TW2EuzedA0I'
}, {
  id: 'v2',
  title: 'Music Video Production',
  category: 'Video',
  image: 'https://img.youtube.com/vi/21POSFRtjY4/maxresdefault.jpg',
  description: 'Artistic direction for music production',
  videoId: '21POSFRtjY4'
}, {
  id: 'v3',
  title: 'Visual Storytelling',
  category: 'Video',
  image: 'https://img.youtube.com/vi/RETndZHvfZs/maxresdefault.jpg',
  description: 'Visual storytelling through music',
  pageLink: '/music-videos'
}, {
  id: 'v4',
  title: 'Brand Campaign Video',
  category: 'Video',
  image: 'https://img.youtube.com/vi/oQiZGRDIct8/maxresdefault.jpg',
  description: 'Brand campaign commercial',
  videoId: 'oQiZGRDIct8'
}, {
  id: 'v5',
  title: 'Product Showcase',
  category: 'Video',
  image: 'https://img.youtube.com/vi/ewwyhhlLzjE/maxresdefault.jpg',
  description: 'Product showcase commercial',
  videoId: 'ewwyhhlLzjE'
}, {
  id: 'v6',
  title: 'Branded Documentary',
  category: 'Video',
  image: 'https://img.youtube.com/vi/KiQfXe6o8Lw/maxresdefault.jpg',
  description: 'Regional Addy Award for Directing Branded Documentary Piece',
  videoId: 'KiQfXe6o8Lw'
}, {
  id: 'v7',
  title: 'Hype/Promo',
  category: 'Video',
  image: 'https://img.youtube.com/vi/gY5Qz7N7BVU/maxresdefault.jpg',
  description: 'Official brand reveal for Memphis 901 Football Club',
  videoId: 'gY5Qz7N7BVU'
}, {
  id: 'v8',
  title: 'Memphis Record Pressing',
  category: 'Video',
  image: 'https://img.youtube.com/vi/VaT_oPNG8eM/maxresdefault.jpg',
  description: 'Documentary showcasing the vinyl record manufacturing process',
  videoId: 'VaT_oPNG8eM'
}, {
  id: 'v9',
  title: 'The Memphis Masters',
  category: 'Video',
  image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
  description: 'Featured in Rolling Stone, a series celebrating Memphis music legacy',
  externalLink: 'https://www.rollingstone.com/music/music-news/big-star-memphis-masters-series-1021789/'
},
// Adding the new music video
{
  id: 'v10',
  title: 'Artistic Music Video',
  category: 'Video',
  image: 'https://img.youtube.com/vi/c7i_BYe45TE/maxresdefault.jpg',
  description: 'Creative direction and visual storytelling through music',
  videoId: 'c7i_BYe45TE'
},
// Adding the new animation music video
{
  id: 'a1',
  title: 'Animated Music Video',
  category: 'Animation',
  image: 'https://img.youtube.com/vi/Jl8iOcCepao/maxresdefault.jpg',
  description: 'Animated visual storytelling set to music',
  videoId: 'Jl8iOcCepao'
},
// Photography items
{
  id: 'p1',
  title: 'Brand Campaign',
  category: 'Photography',
  image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop',
  description: 'Creative direction for major fashion brand campaign.'
}, {
  id: 'p2',
  title: 'Product Launch',
  category: 'Photography',
  image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
  description: 'Launch photography for innovative tech product.'
}, {
  id: 'p3',
  title: 'Editorial Series',
  category: 'Photography',
  image: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2070&auto=format&fit=crop',
  description: 'Conceptual editorial for print magazine.'
}, {
  id: 'p4',
  title: 'Portrait Collection',
  category: 'Photography',
  image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop',
  description: 'Series of artistic portrait photography.'
}, {
  id: 'p5',
  title: 'Architectural Study',
  category: 'Photography',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  description: 'Urban architecture photography series.'
},
// Design items
{
  id: 'd1',
  title: 'Brand Identity',
  category: 'Design',
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
  description: 'Complete identity system for startup brand.'
}, {
  id: 'd2',
  title: 'UI/UX Design',
  category: 'Design',
  image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  description: 'User interface design for digital platform.'
}, {
  id: 'd3',
  title: 'Packaging Design',
  category: 'Design',
  image: 'https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2032&auto=format&fit=crop',
  description: 'Innovative packaging design for consumer products.'
},
// Personal projects
{
  id: 'pp1',
  title: 'Personal Series',
  category: 'Personal',
  image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop',
  description: 'Experimental visual exploration project.'
}, {
  id: 'pp2',
  title: 'Abstract Study',
  category: 'Personal',
  image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop',
  description: 'Abstract visual arts personal project.'
}];
export const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    isVimeo?: boolean;
  } | null>(null);
  // Filter items based on selected category
  const filteredItems = filter ? portfolioItems.filter(item => item.category === filter) : portfolioItems;
  // Get all unique categories from portfolio items
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));
  // Handle clicking on a video item
  const handleVideoClick = (id: string, title: string, isVimeo?: boolean) => {
    setSelectedVideo({
      id,
      title,
      isVimeo
    });
  };
  // Handle clicking on an external link item
  const handleExternalLinkClick = (link: string) => {
    window.open(link, '_blank');
  };
  // Close the video modal
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  return <div className="bg-[#130c24] text-white min-h-screen w-full">
      <header className="bg-[#0a071a] py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          <img src="/80fco_logo.png" alt="80f Creative" className="h-10" />
        </div>
      </header>
      <main className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="font-pixel text-4xl md:text-5xl font-bold mb-4 text-electric-cyan neon-cyan">
              All Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-sans">
              Explore our complete collection of creative work across different
              mediums.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button variant={filter === null ? 'primary' : 'outline'} onClick={() => setFilter(null)} className="px-4 py-2">
                All
              </Button>
              {categories.map(category => <Button key={category} variant={filter === category ? 'primary' : 'outline'} onClick={() => setFilter(category)} className="px-4 py-2">
                  {category}
                </Button>)}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredItems.map((item, index) => <motion.div key={item.id} className="relative group cursor-pointer overflow-hidden" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} onClick={() => {
            if (item.videoId) {
              handleVideoClick(item.videoId, item.title, item.isVimeo);
            } else if (item.externalLink) {
              handleExternalLinkClick(item.externalLink);
            }
          }}>
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/90 via-[#130c24]/60 to-[#130c24]/30 opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[#ff55ee] text-sm font-medium mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-pixel text-lg font-bold text-electric-cyan">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1 font-sans">
                    {item.description}
                  </p>
                  {/* Play button for video items */}
                  {item.videoId && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                        <PlayIcon className="w-6 h-6" />
                      </div>
                    </div>}
                  {/* External link indicator */}
                  {item.externalLink && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-[#ff55ee] text-[#130c24] p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                    </div>}
                </div>
              </motion.div>)}
          </div>
        </div>
      </main>
      {/* Video Modal */}
      {selectedVideo && <VideoModal videoId={selectedVideo.id} title={selectedVideo.title} onClose={handleCloseModal} isVimeo={selectedVideo.isVimeo} />}
    </div>;
};