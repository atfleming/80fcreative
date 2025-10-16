import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { VideoModal } from '../components/VideoModal';
import { PlayIcon, ArrowLeftIcon } from 'lucide-react';
// Combined portfolio data including both projects and videos
const portfolioItems = [
// --- BEGIN CSV APPEND ---
{
  id: 'csv1',
  title: '901 fc brand reveal video',
  category: 'Commercial',
  image: 'https://img.youtube.com/vi/gY5Qz7N7BVU/maxresdefault.jpg',
  videoId: 'gY5Qz7N7BVU'
},
{
  id: 'csv2',
  title: 'champions for lit grizzlies promo',
  category: 'Commercial',
  image: '',
  videoId: '935182826',
  isVimeo: true
},
{
  id: 'csv3',
  title: 'champions for lit player hype promo',
  category: 'Commercial',
  image: '',
  videoId: '1002964765',
  isVimeo: true
},
{
  id: 'csv4',
  title: 'aces x penny hardaway x complex promo',
  category: 'Commercial',
  image: '',
  videoId: '947118016',
  isVimeo: true
},
{
  id: 'csv5',
  title: 'u of m engineering promo',
  category: 'Commercial',
  image: '',
  videoId: '947123598',
  isVimeo: true
},
{
  id: 'csv6',
  title: "u of m 'give to the legacy'",
  category: 'Commercial',
  image: 'https://img.youtube.com/vi/oQiZGRDIct8/maxresdefault.jpg',
  videoId: 'oQiZGRDIct8'
},
{
  id: 'csv7',
  title: 'old dominick whiskey 5 year reveal',
  category: 'Commercial',
  image: 'https://img.youtube.com/vi/GprckON8yZo/maxresdefault.jpg',
  videoId: 'GprckON8yZo'
},
{
  id: 'csv8',
  title: 'grizzly outdoor corp: Offroad Jeeps in Pennsylvania',
  category: 'Commercial',
  image: 'https://img.youtube.com/vi/kUZkK1oAbmY/maxresdefault.jpg',
  videoId: 'kUZkK1oAbmY'
},
{
  id: 'csv9',
  title: 'bloodbound audio drama promo',
  category: 'Commercial',
  image: 'https://img.youtube.com/vi/NTWjUkkcbBE/maxresdefault.jpg',
  videoId: 'NTWjUkkcbBE'
},
{
  id: 'csv10',
  title: 'virbac mr squeakems',
  category: 'Commercial',
  image: 'https://img.youtube.com/vi/jfgbnFL8rSo/maxresdefault.jpg',
  videoId: 'jfgbnFL8rSo'
},
// Film
{
  id: 'csv11',
  title: 'the typewriter',
  category: 'Film',
  image: 'https://img.youtube.com/vi/TF08ScP2wi4/maxresdefault.jpg',
  videoId: 'TF08ScP2wi4'
},
{
  id: 'csv12',
  title: 'soul man',
  category: 'Film',
  image: 'https://img.youtube.com/vi/clWlvoAxct0/maxresdefault.jpg',
  videoId: 'clWlvoAxct0'
},
{
  id: 'csv13',
  title: 'the brothers brothers',
  category: 'Film',
  image: 'https://img.youtube.com/vi/U8Y5Tz4_noE/maxresdefault.jpg',
  videoId: 'U8Y5Tz4_noE'
},
{
  id: 'csv14',
  title: 'in a bad way',
  category: 'Film',
  image: 'https://img.youtube.com/vi/Xxxdd86i7Xo/maxresdefault.jpg',
  videoId: 'Xxxdd86i7Xo'
},
{
  id: 'csv15',
  title: 'muddy water',
  category: 'Film',
  image: 'https://img.youtube.com/vi/24A5qe5Z9YI/maxresdefault.jpg',
  videoId: '24A5qe5Z9YI'
},
{
  id: 'csv16',
  title: 'traveling soldier',
  category: 'Film',
  image: 'https://img.youtube.com/vi/-HquPPjfkKc/maxresdefault.jpg',
  videoId: '-HquPPjfkKc'
},
{
  id: 'csv17',
  title: 'without a roof',
  category: 'Film',
  image: 'https://img.youtube.com/vi/vy9-y7xUQbI/maxresdefault.jpg',
  videoId: 'vy9-y7xUQbI'
},
{
  id: 'csv18',
  title: 'a night out',
  category: 'Film',
  image: 'https://img.youtube.com/vi/s3HH8sTc-_8/maxresdefault.jpg',
  videoId: 's3HH8sTc-_8'
},
{
  id: 'csv19',
  title: 'life after death',
  category: 'Film',
  image: 'https://img.youtube.com/vi/s9Ek7pKVxD0/maxresdefault.jpg',
  videoId: 's9Ek7pKVxD0'
},
// Documentary/Branded
{
  id: 'csv20',
  title: 'cyrena wages: "vanity project" album release film',
  category: 'Documentary/Branded',
  image: 'https://img.youtube.com/vi/bPAHomKQijA/maxresdefault.jpg',
  videoId: 'bPAHomKQijA'
},
{
  id: 'csv21',
  title: 'the memphis masters: series',
  category: 'Documentary/Branded',
  image: 'https://img.youtube.com/vi/u4NRkMWrlnc/maxresdefault.jpg',
  videoId: 'u4NRkMWrlnc'
},
{
  id: 'csv22',
  title: 'rolling stone',
  category: 'Documentary/Branded',
  image: '',
  externalLink: 'https://www.rollingstone.com/music/music-news/big-star-memphis-masters-series-1021789/'
},
{
  id: 'csv23',
  title: 'full series',
  category: 'Documentary/Branded',
  image: 'https://img.youtube.com/vi/u4NRkMWrlnc/maxresdefault.jpg',
  videoId: 'u4NRkMWrlnc'
},
{
  id: 'csv24',
  title: 'Roberta Finocchiaro "Put the Memphis On it" album release',
  category: 'Documentary/Branded',
  image: 'https://img.youtube.com/vi/qSN-wQlqj1s/maxresdefault.jpg',
  videoId: 'qSN-wQlqj1s'
},
{
  id: 'csv25',
  title: 'MLB Fan Cave Submission (top 30 winner 2012)',
  category: 'Documentary/Branded',
  image: 'https://img.youtube.com/vi/TSwXZa6EDbI/maxresdefault.jpg',
  videoId: 'TSwXZa6EDbI'
},
{
  id: 'csv26',
  title: 'the cotton board: runner',
  category: 'Documentary/Branded',
  image: '',
  externalLink: 'https://www.cottonboard.org/forever-cotton'
},
{
  id: 'csv27',
  title: 'your own land',
  category: 'Documentary/Branded',
  image: 'https://img.youtube.com/vi/9CTUAWI2Wtc/maxresdefault.jpg',
  videoId: '9CTUAWI2Wtc'
},
// Music Videos
{
  id: 'csv28',
  title: 'daykisser: "it\'s just what we talked about"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/0efLsK07TxA/maxresdefault.jpg',
  videoId: '0efLsK07TxA'
},
{
  id: 'csv29',
  title: 'teenage stepdad: "rhetoric"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/21POSFRtjY4/maxresdefault.jpg',
  videoId: '21POSFRtjY4'
},
{
  id: 'csv30',
  title: 'susurra: "my heart should be breaking"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/RETndZHvfZs/maxresdefault.jpg',
  videoId: 'RETndZHvfZs'
},
{
  id: 'csv31',
  title: 'brennan villines: "better than we\'ve ever been"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/v-70xxtygbA/maxresdefault.jpg',
  videoId: 'v-70xxtygbA'
},
{
  id: 'csv32',
  title: 'marco pave: "dirty benz"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/sfsEnFcfGqQ/maxresdefault.jpg',
  videoId: 'sfsEnFcfGqQ'
},
{
  id: 'csv33',
  title: 'musician promo reel',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/KtlSk0LOTeY/maxresdefault.jpg',
  videoId: 'KtlSk0LOTeY'
},
{
  id: 'csv34',
  title: 'dave miller: nail can',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/3aRAiJ9Cc88/maxresdefault.jpg',
  videoId: '3aRAiJ9Cc88'
},
{
  id: 'csv35',
  title: 'marco pave: "gold grind"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/OYzT1YvPpbs/maxresdefault.jpg',
  videoId: 'OYzT1YvPpbs'
},
{
  id: 'csv36',
  title: 'the city champs: "luna 68"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/Jl8iOcCepao/maxresdefault.jpg',
  videoId: 'Jl8iOcCepao'
},
{
  id: 'csv37',
  title: 'joe restivo: "starlight motel"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/c7i_BYe45TE/maxresdefault.jpg',
  videoId: 'c7i_BYe45TE'
},
{
  id: 'csv38',
  title: 'susurra: "it\'s too late"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/sERw6H7qgUo/maxresdefault.jpg',
  videoId: 'sERw6H7qgUo'
},
{
  id: 'csv39',
  title: 'marco pave: "black tux"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/jyCqLS8CPHw/maxresdefault.jpg',
  videoId: 'jyCqLS8CPHw'
},
{
  id: 'csv40',
  title: 'myla smith: "can\'t keep me down"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/MoZooQPe_4o/maxresdefault.jpg',
  videoId: 'MoZooQPe_4o'
},
{
  id: 'csv41',
  title: 'pat24seven: "all i know"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/gTixnOwRnlA/maxresdefault.jpg',
  videoId: 'gTixnOwRnlA'
},
{
  id: 'csv42',
  title: 'bryan hayes: "i wanna run"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/zaRIySqM-9A/maxresdefault.jpg',
  videoId: 'zaRIySqM-9A'
},
{
  id: 'csv43',
  title: 'chris milam: "kids these days"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/tfgdfz35kB4/maxresdefault.jpg',
  videoId: 'tfgdfz35kB4'
},
{
  id: 'csv44',
  title: 'the barnes brothers: "i\'m trying to go home"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/bgmGQCK8bFE/maxresdefault.jpg',
  videoId: 'bgmGQCK8bFE'
},
{
  id: 'csv45',
  title: 'frenchie!: "renegades"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/ouxE5tlbYNs/maxresdefault.jpg',
  videoId: 'ouxE5tlbYNs'
},
{
  id: 'csv46',
  title: 'vending machine: "white squared potato"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/7mjj_tCcydY/maxresdefault.jpg',
  videoId: '7mjj_tCcydY'
},
{
  id: 'csv47',
  title: 'brennan villines: "free"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/rxFEL0yeJ-I/maxresdefault.jpg',
  videoId: 'rxFEL0yeJ-I'
},
{
  id: 'csv48',
  title: 'brennan villines: "self control"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/vSE7lknb8Wk/maxresdefault.jpg',
  videoId: 'vSE7lknb8Wk'
},
{
  id: 'csv49',
  title: 'jack bear: "not that i\'d ever hope"',
  category: 'Music Videos',
  image: 'https://img.youtube.com/vi/uMTPE7eSuUU/maxresdefault.jpg',
  videoId: 'uMTPE7eSuUU'
},
// --- END CSV APPEND ---
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