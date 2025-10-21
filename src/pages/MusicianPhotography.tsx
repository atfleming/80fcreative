import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { PhotoModal } from '../components/PhotoModal';
// Photo gallery data
const photoData = [{
  id: 1,
  url: "/music-photography/_ATF7471.jpg",
  alt: 'Jazz Band Performance',
  category: 'Performance',
  description: 'A jazz ensemble bathed in dramatic light, capturing the soul of live music.'
}, {
  id: 2,
  url: "/music-photography/_YOU0011.jpg",
  alt: 'Rock Icon Portrait',
  category: 'Portrait',
  description: 'An intimate portrait capturing the charisma and character of a music legend.'
}, {
  id: 3,
  url: "/music-photography/_ATF3388.jpg",
  alt: 'Studio Session Guitarist',
  category: 'Studio',
  description: 'A contemplative moment captured during a studio recording session, with the musician immersed in the creative process.'
}, {
  id: 4,
  url: "/music-photography/_ATF4807.jpg",
  alt: 'Soul Singer Performance',
  category: 'Performance',
  description: 'A passionate vocalist captured mid-performance, with colorful stage lighting creating a vibrant atmosphere.'
}, {
  id: 5,
  url: "/music-photography/_DSC2748.jpg",
  alt: 'Folk Guitarist Portrait',
  category: 'Portrait',
  description: 'A seasoned musician playing acoustic guitar, with expressions that tell stories of years dedicated to their craft.'
}, {
  id: 6,
  url: "/music-photography/_DSC2956.jpg",
  alt: 'Musician Close-up',
  category: 'Portrait',
  description: 'An intimate close-up portrait revealing the depth and character etched into the face of a veteran musician.'
}, {
  id: 7,
  url: "/music-photography/_DSC3006.jpg",
  alt: 'Blues Artist Portrait',
  category: 'Portrait',
  description: 'A dramatic portrait of a blues musician wearing a patterned hat, with lighting that emphasizes the intensity in their gaze.'
}, {
  id: 8,
  url: "/music-photography/_ATF5177.jpg",
  alt: 'Guitarist in Concert',
  category: 'Performance',
  description: 'A guitarist performing under dramatic blue stage lighting, capturing the intensity and focus of a live musical performance.'
}, {
  id: 9,
  url: "/music-photography/_ATF5239.jpg",
  alt: 'Musician Portrait',
  category: 'Portrait',
  description: 'A profile portrait of a musician illuminated by blue stage lighting, revealing a moment of joy and connection with the audience.'
}, {
  id: 10,
  url: "/music-photography/_ATF7471.jpg",
  alt: 'Jazz Ensemble',
  category: 'Ensemble',
  description: 'A vintage-inspired portrait of a jazz ensemble in a historic venue, with sunlight streaming through windows creating a cinematic atmosphere.'
}, {
  id: 11,
  url: "/music-photography/_ATF7619-HDR.jpg",
  alt: 'Band Leader Portrait',
  category: 'Portrait',
  description: 'A charismatic bandleader in a fedora and suit, with warm lighting highlighting his confident smile and distinctive style.'
}, {
  id: 12,
  url: "/music-photography/_ATF8067.jpg",
  alt: 'Soul Vocalist Performance',
  category: 'Performance',
  description: 'A soulful vocalist in a white hat and burgundy jacket performing on stage, captured in a moment of passionate expression under dramatic stage lighting.'
}, {
  id: 13,
  url: "/music-photography/5FAFDE57-4C6D-435B-92F8-D6B55BDDAF57.jpg",
  alt: 'Musicians on the Road',
  category: 'Lifestyle',
  description: 'A nostalgic film-style photograph of musicians in sunglasses inside a vintage blue vehicle, capturing the traveling lifestyle of touring artists.'
}, {
  id: 14,
  url: "/music-photography/8AC4EE09-3573-43ED-B723-4DA93874DED8.jpg",
  alt: 'Band in Transit',
  category: 'Lifestyle',
  description: 'An intimate moment between band members in a car, with vintage film aesthetics that evoke the camaraderie and quiet moments between performances.'
}, {
  id: 15,
  url: "/music-photography/DetectiveBureau--5.jpg",
  alt: 'Band Portrait',
  category: 'Ensemble',
  description: 'A six-piece band posed in a raw warehouse space, instruments in hand, capturing the collective personality and aesthetic of the group.'
}, {
  id: 16,
  url: "/music-photography/DetectiveBureau--12.jpg",
  alt: 'Band Silhouettes',
  category: 'Artistic',
  description: 'Atmospheric silhouettes of musicians seen through frosted glass, creating a moody visual that captures the mysterious essence of the band.'
}, {
  id: 17,
  url: "/music-photography/Screenshot_2025-10-13_at_4.50.39_PM.png",
  alt: 'Electronic Musician Portrait',
  category: 'Studio',
  description: 'A contemplative electronic musician sitting on a gold couch with a keyboard synthesizer, illuminated by candlelight creating a mysterious, intimate atmosphere.'
}, {
  id: 18,
  url: "/music-photography/_ATF3624-HDR.jpg",
  alt: 'Electronic Music Production',
  category: 'Studio',
  description: 'Close-up of hands adorned with rings manipulating a synthesizer with colorful lights and cables, capturing the intricate relationship between musician and electronic instrument.'
}, {
  id: 19,
  url: "/music-photography/_ATF3973-HDR.jpg",
  alt: 'Vocalist Close-up',
  category: 'Portrait',
  description: 'An intense close-up portrait of a vocalist near a studio microphone, dramatically lit with blue lighting that accentuates the concentration and emotion in their expression.'
}, {
  id: 20,
  url: "/music-photography/IMG_20190712_110415_214.jpg",
  alt: 'Drummer in Performance',
  category: 'Performance',
  description: 'An energetic drummer captured mid-performance, drumsticks in hand and face lit with joy, showcasing the passion and exhilaration of live music-making.'
}, {
  id: 21,
  url: "/music-photography/IMG_20190712_110415_215.jpg",
  alt: 'Soul Singer on Stage',
  category: 'Performance',
  description: 'A charismatic vocalist in a white hat and stylish jacket performing under dramatic backlighting, creating a silhouette effect that highlights their presence and stage command.'
}, {
  id: 22,
  url: "/music-photography/IMG_20190712_110415_216.jpg",
  alt: 'Guitarist Vocalist',
  category: 'Performance',
  description: 'A guitarist-vocalist performing with eyes closed in deep concentration, bathed in warm amber stage lighting that creates an intimate and emotive atmosphere.'
}, {
  id: 23,
  url: "/music-photography/LLOJuly31-1449.jpg",
  alt: 'Vocalist in Recording Booth',
  category: 'Studio',
  description: 'A passionate vocalist seen through the glass of a recording booth, wearing headphones and captured in a moment of raw emotional expression during a recording session.'
}, {
  id: 24,
  url: "/music-photography/LLOJuly31-1453.jpg",
  alt: 'Sound Engineer at Console',
  category: 'Studio',
  description: 'The back view of a sound engineer working at a professional mixing console, representing the technical artistry behind music production in a professional studio environment.'
}, {
  id: 25,
  url: "/music-photography/wheresjoe-1494.jpg",
  alt: 'Saxophone Player in Performance',
  category: 'Performance',
  description: "A saxophonist performing with intense emotion, illuminated by vibrant green stage lighting that highlights the gleaming instrument and the musician's patterned blue shirt as they lose themselves in the music."
}];
export const MusicianPhotography = () => {
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
              <img src="/music-photography/_YOU0011.jpg" alt="Rock icon portrait" className="w-full h-full object-cover" />
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
                  Musician Photography
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Capturing the energy, emotion, and essence of musicians and
                  performances
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
                  Music Photography Gallery
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                  From intimate portraits to dynamic live performances, these
                  images capture the soul of music.
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