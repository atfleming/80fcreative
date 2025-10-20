import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { VideoModal } from './VideoModal';
import { PlayIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// Portfolio categories data
const portfolioCategories = [{
  id: 'promo',
  title: 'commercial + promo',
  image: 'https://img.youtube.com/vi/gY5Qz7N7BVU/maxresdefault.jpg',
  pageLink: '/projects?filter=Commercial',
  videoId: 'gY5Qz7N7BVU',
  isVideo: true
}, {
  id: 'branded-storytelling',
  title: 'documentary + branded storytelling',
  image: 'https://img.youtube.com/vi/qFQUSroCI8A/maxresdefault.jpg',
  pageLink: '/projects?filter=Documentary/Branded',
  videoId: 'qFQUSroCI8A',
  isVideo: true
}, {
  id: 'music-videos',
  title: 'music videos',
  image: 'https://img.youtube.com/vi/RETndZHvfZs/maxresdefault.jpg',
  pageLink: '/projects?filter=music videos',
  videoId: 'RETndZHvfZs',
  isVideo: true
}, {
  id: 'outdoor-photography',
  title: 'outdoor photography',
  image: "/outdoor%20photography/_DSC0526.jpg",
  pageLink: '/photography?filter=Outdoor',
  isVideo: false
}, {
  id: 'musician-photography',
  title: 'music photography',
  image: "/music%20photography/_YOU0011.jpg",
  pageLink: '/photography?filter=Music',
  isVideo: false
}, {
  id: 'lifestyle-photography',
  title: 'commercial/lifestyle photography',
  image: "/lifestyle%20photography/_ATF5915-2.jpg",
  pageLink: '/photography?filter=Commercial/Lifestyle',
  isVideo: false
}, {
  id: 'design',
  title: 'design',
  image: "/LoFi-Magnify.jpg",
  pageLink: '/design',
  isVideo: false
}, {
  id: 'development',
  title: 'development',
  image: "/development.png",
  pageLink: 'https://github.com/atfleming',
  isVideo: false,
  isExternal: true
}];
export const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    isVimeo?: boolean;
  } | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  // Handle clicking on a video item
  const handleVideoClick = (id: string, title: string, isVimeo?: boolean) => {
    setSelectedVideo({
      id,
      title,
      isVimeo
    });
  };
  // Close the video modal
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  return <section id="portfolio" className="bg-digital-black pt-5 pb-24 relative" style={{
    backgroundSize: '20px 20px',
    backgroundImage: `
          linear-gradient(to right, rgba(0, 255, 247, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 255, 247, 0.05) 1px, transparent 1px)
        `
  }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-2p-press-start text-highlight mb-8">
            PROJECTS
          </h2>
        </motion.div>
        {/* Portfolio Categories Grid - Larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => <motion.div key={category.id} className="relative group overflow-hidden cursor-pointer rounded-lg shadow-lg" initial={{
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
          scale: 1.03,
          transition: {
            duration: 0.3
          }
        }} onMouseEnter={() => category.isVideo && setHoveredVideo(category.id)} onMouseLeave={() => setHoveredVideo(null)} onClick={() => {
          if (category.videoId) {
            handleVideoClick(category.videoId, category.title);
          }
        }}>
              {category.pageLink ? (
                category.isExternal ? (
                  <a href={category.pageLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={category.image} alt={category.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7] ${category.isVideo && hoveredVideo === category.id ? 'animate-pulse' : ''}`} />
                      {/* Video indicator overlay */}
                      {category.isVideo && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                            <PlayIcon className="w-10 h-10" />
                          </div>
                        </div>}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-digital-black/80 via-digital-black/40 to-digital-black/30 flex flex-col justify-end p-8">
                      <div className="text-left pb-4">
                        <h3 className="font-pixel text-2xl font-bold text-electric-cyan mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link to={category.pageLink} className="block h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={category.image} alt={category.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7] ${category.isVideo && hoveredVideo === category.id ? 'animate-pulse' : ''}`} />
                      {/* Video indicator overlay */}
                      {category.isVideo && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                            <PlayIcon className="w-10 h-10" />
                          </div>
                        </div>}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-digital-black/80 via-digital-black/40 to-digital-black/30 flex flex-col justify-end p-8">
                      <div className="text-left pb-4">
                        <h3 className="font-pixel text-2xl font-bold text-electric-cyan mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              ) : (
                <>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={category.image} alt={category.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7] ${category.isVideo && hoveredVideo === category.id ? 'animate-pulse' : ''}`} />
                    {/* Video indicator overlay */}
                    {category.isVideo && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                          <PlayIcon className="w-10 h-10" />
                        </div>
                      </div>}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-digital-black/80 via-digital-black/40 to-digital-black/30 flex flex-col justify-end p-8">
                    <div className="text-left pb-4">
                      <h3 className="font-pixel text-2xl font-bold text-electric-cyan mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                       
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>)}
        </div>
      </div>
      <div className="px-4 py-8">
        <motion.div className="text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }}>
          <Link to="/projects">
            <Button>View All Projects</Button>
          </Link>
        </motion.div>
      </div>
      {/* Video Modal */}
      {selectedVideo && <VideoModal videoId={selectedVideo.id} title={selectedVideo.title} onClose={handleCloseModal} isVimeo={selectedVideo.isVimeo} />}
    </section>;
};