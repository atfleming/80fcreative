import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CameraIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { PhotoModal } from '../components/PhotoModal';
// Photo gallery data
const photoData = [{
  id: 1,
  url: "/music-photography/_ATF7471.jpg",
  alt: 'Jazz Band in Atmospheric Venue',
  category: 'Performance',
  description: 'A jazz ensemble bathed in dramatic light, capturing the soul of live music.'
}, {
  id: 2,
  url: "/outdoor-photography/_DSC6480.jpg",
  alt: 'Majestic Elk in Meadow',
  category: 'Wildlife',
  description: 'A magnificent elk with impressive antlers traversing a lush green meadow.'
}, {
  id: 3,
  url: "/music-photography/_YOU0011.jpg",
  alt: 'Rock Icon Portrait',
  category: 'Portrait',
  description: 'An intimate portrait capturing the charisma and character of a music legend.'
}, {
  id: 4,
  url: "/outdoor-photography/DSC00450.jpg",
  alt: 'Hunting Dogs on ATV',
  category: 'Lifestyle',
  description: 'Three hunting dogs perched on an ATV in a winter landscape, ready for adventure.'
}, {
  id: 5,
  url: "/outdoor-photography/MO0A2954.jpg",
  alt: 'Western Horse in Desert Landscape',
  category: 'Landscape',
  description: 'A saddled horse standing in a rugged desert setting under dramatic clouds.'
}];
export const OutdoorPhotography = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  // Get all unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(photoData.map(photo => photo.category)));
  }, []);
  // Filter photos by selected category
  const filteredPhotos = useMemo(() => {
    if (!selectedCategory) return photoData;
    return photoData.filter(photo => photo.category === selectedCategory);
  }, [selectedCategory]);
  // Get current photo for modal
  const currentPhoto = useMemo(() => {
    if (selectedPhoto === null) return null;
    return photoData.find(photo => photo.id === selectedPhoto) || null;
  }, [selectedPhoto]);
  // Navigation functions for modal
  const handleNextPhoto = () => {
    if (selectedPhoto === null) return;
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1].id);
    }
  };
  const handlePreviousPhoto = () => {
    if (selectedPhoto === null) return;
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1].id);
    }
  };
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black z-10"></div>
              <img src="/outdoor-photography/_DSC6480.jpg" alt="Majestic elk in meadow" className="w-full h-full object-cover" />
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
                  Outdoor Photography
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Capturing majestic wildlife, glowing campfires, and the vast landscapes that fuel adventure.
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
                  Photography Gallery
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                  A collection of moments frozen in time, showcasing the beauty
                  of nature, people, and life.
                </p>
                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <Button variant={selectedCategory === null ? 'primary' : 'outline'} onClick={() => setSelectedCategory(null)} className="px-4 py-2">
                    All
                  </Button>
                  {categories.map(category => <Button key={category} variant={selectedCategory === category ? 'primary' : 'outline'} onClick={() => setSelectedCategory(category)} className="px-4 py-2">
                      {category}
                    </Button>)}
                </div>
              </motion.div>
              {/* Photo grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPhotos.map((photo, index) => <motion.div key={photo.id} className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]" initial={{
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
              }} onClick={() => setSelectedPhoto(photo.id)}>
                    <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/90 via-[#130c24]/60 to-[#130c24]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[#ff55ee] text-sm font-medium mb-1">
                        {photo.category}
                      </span>
                      <h3 className="font-pixel text-xl font-bold text-electric-cyan">
                        {photo.alt}
                      </h3>
                      <p className="text-gray-300 mt-2 text-sm">
                        {photo.description}
                      </p>
                    </div>
                  </motion.div>)}
              </div>
              {/* More photos coming soon message */}
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
                  More photos will be added to this collection soon
                </p>
                <Link to="/">
                  <Button>Return to Home</Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      {/* Photo Modal */}
      {currentPhoto && <PhotoModal image={currentPhoto} onClose={handleCloseModal} onNext={handleNextPhoto} onPrevious={handlePreviousPhoto} hasNext={filteredPhotos.findIndex(photo => photo.id === selectedPhoto) < filteredPhotos.length - 1} hasPrevious={filteredPhotos.findIndex(photo => photo.id === selectedPhoto) > 0} />}
    </div>;
};