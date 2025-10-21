import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PhotoModal } from '../components/PhotoModal';
import { ArrowLeftIcon } from 'lucide-react';

// Photography data organized by category
const photographyItems = [
  // Outdoor Photography - All 71 photos
  {
    id: 'outdoor-1',
    category: 'Outdoor',
    url: '/outdoor-photography/_ATF1563.jpg',
    alt: 'Natural Portrait'
  },
  {
    id: 'outdoor-2',
    category: 'Outdoor',
    url: '/outdoor-photography/_ATF1570.jpg',
    alt: 'Outdoor Portrait'
  },
  {
    id: 'outdoor-3',
    category: 'Outdoor',
    url: '/outdoor-photography/_ATF1577.jpg',
    alt: 'Nature Portrait'
  },
  {
    id: 'outdoor-4',
    category: 'Outdoor',
    url: '/outdoor-photography/_ATF1580.jpg',
    alt: 'Environmental Portrait'
  },
  {
    id: 'outdoor-5',
    category: 'Outdoor',
    url: '/outdoor-photography/_ATF4048.jpg',
    alt: 'Outdoor Adventure'
  },
  {
    id: 'outdoor-6',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0007.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-7',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0012.jpg',
    alt: 'Landscape Photography'
  },
  {
    id: 'outdoor-8',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0018.jpg',
    alt: 'Outdoor Photography'
  },
  {
    id: 'outdoor-9',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0026.jpg',
    alt: 'Natural Environment'
  },
  {
    id: 'outdoor-10',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0061-2.jpg',
    alt: 'Wildlife Photography'
  },
  {
    id: 'outdoor-11',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0101.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-12',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0118-2.jpg',
    alt: 'Outdoor Adventure'
  },
  {
    id: 'outdoor-13',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0145.jpg',
    alt: 'Landscape Vista'
  },
  {
    id: 'outdoor-14',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0160.jpg',
    alt: 'Natural Beauty'
  },
  {
    id: 'outdoor-15',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0232.jpg',
    alt: 'Outdoor Portrait'
  },
  {
    id: 'outdoor-16',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0445-2.jpg',
    alt: 'Wildlife Photography'
  },
  {
    id: 'outdoor-17',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0449.jpg',
    alt: 'Nature Photography'
  },
  {
    id: 'outdoor-18',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0526.jpg',
    alt: 'Outdoor Scene'
  },
  {
    id: 'outdoor-19',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0572.jpg',
    alt: 'Natural Landscape'
  },
  {
    id: 'outdoor-20',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC0761.jpg',
    alt: 'Outdoor Adventure'
  },
  {
    id: 'outdoor-21',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC1473.jpg',
    alt: 'Nature Photography'
  },
  {
    id: 'outdoor-22',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC5367.jpg',
    alt: 'Landscape Photography'
  },
  {
    id: 'outdoor-23',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC5389.jpg',
    alt: 'Natural Scene'
  },
  {
    id: 'outdoor-24',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC5421.jpg',
    alt: 'Outdoor Photography'
  },
  {
    id: 'outdoor-25',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC5442.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-26',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC6303.jpg',
    alt: 'Wildlife Photography'
  },
  {
    id: 'outdoor-27',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC6373.jpg',
    alt: 'Natural Environment'
  },
  {
    id: 'outdoor-28',
    category: 'Outdoor',
    url: '/outdoor-photography/_DSC6480.jpg',
    alt: 'Majestic Elk in Meadow'
  },
  {
    id: 'outdoor-29',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0047.jpg',
    alt: 'Mountain Landscape'
  },
  {
    id: 'outdoor-30',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0061.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-31',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0064.jpg',
    alt: 'Outdoor Wildlife'
  },
  {
    id: 'outdoor-32',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0201.jpg',
    alt: 'Landscape Vista'
  },
  {
    id: 'outdoor-33',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0360.jpg',
    alt: 'Natural Environment'
  },
  {
    id: 'outdoor-34',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0370.jpg',
    alt: 'Outdoor Photography'
  },
  {
    id: 'outdoor-35',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0373.jpg',
    alt: 'Nature Photography'
  },
  {
    id: 'outdoor-36',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0412.jpg',
    alt: 'Landscape Photography'
  },
  {
    id: 'outdoor-37',
    category: 'Outdoor',
    url: '/outdoor-photography/1Z3A0473.jpg',
    alt: 'Outdoor Adventure'
  },
  {
    id: 'outdoor-38',
    category: 'Outdoor',
    url: '/outdoor-photography/cotton board forever cotton 2.png',
    alt: 'Cotton Field Photography'
  },
  {
    id: 'outdoor-39',
    category: 'Outdoor',
    url: '/outdoor-photography/DJI_0146.jpg',
    alt: 'Aerial Landscape'
  },
  {
    id: 'outdoor-40',
    category: 'Outdoor',
    url: '/outdoor-photography/DJI_0187-HDR.jpg',
    alt: 'Drone Photography HDR'
  },
  {
    id: 'outdoor-41',
    category: 'Outdoor',
    url: '/outdoor-photography/DJI_0196-HDR.jpg',
    alt: 'Aerial HDR Photography'
  },
  {
    id: 'outdoor-42',
    category: 'Outdoor',
    url: '/outdoor-photography/DJI_0346.jpg',
    alt: 'Drone Landscape'
  },
  {
    id: 'outdoor-43',
    category: 'Outdoor',
    url: '/outdoor-photography/DJI_0376.jpg',
    alt: 'Aerial Photography'
  },
  {
    id: 'outdoor-44',
    category: 'Outdoor',
    url: '/outdoor-photography/DJI_0425.jpg',
    alt: 'Drone Nature Photography'
  },
  {
    id: 'outdoor-45',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00374.jpg',
    alt: 'Nature Photography'
  },
  {
    id: 'outdoor-46',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00404.jpg',
    alt: 'Outdoor Scene'
  },
  {
    id: 'outdoor-47',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00413.jpg',
    alt: 'Natural Environment'
  },
  {
    id: 'outdoor-48',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00426.jpg',
    alt: 'Landscape Photography'
  },
  {
    id: 'outdoor-49',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00441.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-50',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00450.jpg',
    alt: 'Hunting Dogs on ATV'
  },
  {
    id: 'outdoor-51',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00496.jpg',
    alt: 'Outdoor Photography'
  },
  {
    id: 'outdoor-52',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00559.jpg',
    alt: 'Natural Scene'
  },
  {
    id: 'outdoor-53',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00594.jpg',
    alt: 'Nature Photography'
  },
  {
    id: 'outdoor-54',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00614.jpg',
    alt: 'Outdoor Adventure'
  },
  {
    id: 'outdoor-55',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00701.jpg',
    alt: 'Landscape Vista'
  },
  {
    id: 'outdoor-56',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00709.jpg',
    alt: 'Natural Beauty'
  },
  {
    id: 'outdoor-57',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00741.jpg',
    alt: 'Outdoor Photography'
  },
  {
    id: 'outdoor-58',
    category: 'Outdoor',
    url: '/outdoor-photography/DSC00756.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-59',
    category: 'Outdoor',
    url: '/outdoor-photography/Illinois Farms (1).jpg',
    alt: 'Farm Landscape'
  },
  {
    id: 'outdoor-60',
    category: 'Outdoor',
    url: '/outdoor-photography/Illinois Farms-2.jpg',
    alt: 'Agricultural Photography'
  },
  {
    id: 'outdoor-61',
    category: 'Outdoor',
    url: '/outdoor-photography/IMG_0080.jpg',
    alt: 'Nature Scene'
  },
  {
    id: 'outdoor-62',
    category: 'Outdoor',
    url: '/outdoor-photography/IMG_0700.jpg',
    alt: 'Outdoor Photography'
  },
  {
    id: 'outdoor-63',
    category: 'Outdoor',
    url: '/outdoor-photography/IMG_0856.jpg',
    alt: 'Natural Environment'
  },
  {
    id: 'outdoor-64',
    category: 'Outdoor',
    url: '/outdoor-photography/IMG_0966.jpg',
    alt: 'Landscape Photography'
  },
  {
    id: 'outdoor-65',
    category: 'Outdoor',
    url: '/outdoor-photography/IMG_1139.jpg',
    alt: 'Nature Photography'
  },
  {
    id: 'outdoor-66',
    category: 'Outdoor',
    url: '/outdoor-photography/IMG_1346.jpg',
    alt: 'Outdoor Scene'
  },
  {
    id: 'outdoor-67',
    category: 'Outdoor',
    url: '/outdoor-photography/MO0A2954.jpg',
    alt: 'Western Horse in Desert'
  },
  {
    id: 'outdoor-68',
    category: 'Outdoor',
    url: '/outdoor-photography/MO0A3579.jpg',
    alt: 'Desert Landscape'
  },
  {
    id: 'outdoor-69',
    category: 'Outdoor',
    url: '/outdoor-photography/MOON-2.jpg',
    alt: 'Moon Photography'
  },
  {
    id: 'outdoor-70',
    category: 'Outdoor',
    url: '/outdoor-photography/RNG01357.jpg',
    alt: 'Landscape Photography'
  },
  {
    id: 'outdoor-71',
    category: 'Outdoor',
    url: '/outdoor-photography/RNG01387-HDR.jpg',
    alt: 'HDR Landscape'
  },

  // Music Photography - All 39 photos (excluding screenshot)
  {
    id: 'music-1',
    category: 'Music',
    url: '/music-photography/_ATF3388.jpg',
    alt: 'Studio Session'
  },
  {
    id: 'music-2',
    category: 'Music',
    url: '/music-photography/_ATF3624-HDR.jpg',
    alt: 'HDR Performance'
  },
  {
    id: 'music-3',
    category: 'Music',
    url: '/music-photography/_ATF3973-HDR.jpg',
    alt: 'Concert HDR'
  },
  {
    id: 'music-4',
    category: 'Music',
    url: '/music-photography/_ATF4807.jpg',
    alt: 'Musical Performance'
  },
  {
    id: 'music-5',
    category: 'Music',
    url: '/music-photography/_ATF5177.jpg',
    alt: 'Guitarist in Concert'
  },
  {
    id: 'music-6',
    category: 'Music',
    url: '/music-photography/_ATF5200.jpg',
    alt: 'Live Performance'
  },
  {
    id: 'music-7',
    category: 'Music',
    url: '/music-photography/_ATF5230.jpg',
    alt: 'Concert Photography'
  },
  {
    id: 'music-8',
    category: 'Music',
    url: '/music-photography/_ATF5239.jpg',
    alt: 'Musician Portrait'
  },
  {
    id: 'music-9',
    category: 'Music',
    url: '/music-photography/_ATF7265.jpg',
    alt: 'Recording Session'
  },
  {
    id: 'music-10',
    category: 'Music',
    url: '/music-photography/_ATF7278.jpg',
    alt: 'Studio Photography'
  },
  {
    id: 'music-11',
    category: 'Music',
    url: '/music-photography/_ATF7444.jpg',
    alt: 'Musical Performance'
  },
  {
    id: 'music-12',
    category: 'Music',
    url: '/music-photography/_ATF7471.jpg',
    alt: 'Jazz Band Performance'
  },
  {
    id: 'music-13',
    category: 'Music',
    url: '/music-photography/_ATF7581.jpg',
    alt: 'Live Music'
  },
  {
    id: 'music-14',
    category: 'Music',
    url: '/music-photography/_ATF7619-HDR.jpg',
    alt: 'Band Leader Portrait'
  },
  {
    id: 'music-15',
    category: 'Music',
    url: '/music-photography/_ATF8067.jpg',
    alt: 'Soul Vocalist Performance'
  },
  {
    id: 'music-16',
    category: 'Music',
    url: '/music-photography/_ATF8214.jpg',
    alt: 'Concert Performance'
  },
  {
    id: 'music-17',
    category: 'Music',
    url: '/music-photography/_ATF9557.jpg',
    alt: 'Live Performance'
  },
  {
    id: 'music-18',
    category: 'Music',
    url: '/music-photography/_ATF9567.jpg',
    alt: 'Musical Performance'
  },
  {
    id: 'music-19',
    category: 'Music',
    url: '/music-photography/_ATF9711.jpg',
    alt: 'Concert Photography'
  },
  {
    id: 'music-20',
    category: 'Music',
    url: '/music-photography/_DSC2748.jpg',
    alt: 'Concert Photography'
  },
  {
    id: 'music-21',
    category: 'Music',
    url: '/music-photography/_DSC2956.jpg',
    alt: 'Live Music Performance'
  },
  {
    id: 'music-22',
    category: 'Music',
    url: '/music-photography/_DSC2958.jpg',
    alt: 'Musical Performance'
  },
  {
    id: 'music-23',
    category: 'Music',
    url: '/music-photography/_DSC3006.jpg',
    alt: 'Concert Performance'
  },
  {
    id: 'music-24',
    category: 'Music',
    url: '/music-photography/_DSC3066.jpg',
    alt: 'Live Performance'
  },
  {
    id: 'music-25',
    category: 'Music',
    url: '/music-photography/_YOU0011.jpg',
    alt: 'Rock Icon Portrait'
  },
  {
    id: 'music-26',
    category: 'Music',
    url: '/music-photography/4AC84E0F-261D-4576-BC86-CF67AB687F94.jpg',
    alt: 'Music Portrait'
  },
  {
    id: 'music-27',
    category: 'Music',
    url: '/music-photography/5FAFDE57-4C6D-435B-92F8-D6B55BDDAF57.jpg',
    alt: 'Musicians on the Road'
  },
  {
    id: 'music-28',
    category: 'Music',
    url: '/music-photography/8AC4EE09-3573-43ED-B723-4DA93874DED8.jpg',
    alt: 'Musical Portrait'
  },
  {
    id: 'music-29',
    category: 'Music',
    url: '/music-photography/998E4CAC-7FD6-41C4-8461-514716DC2688.jpg',
    alt: 'Music Photography'
  },
  {
    id: 'music-30',
    category: 'Music',
    url: '/music-photography/C641CA27-671E-4FBC-931E-9E754B56570D.jpg',
    alt: 'Musical Performance'
  },
  {
    id: 'music-31',
    category: 'Music',
    url: '/music-photography/DetectiveBureau--11.jpg',
    alt: 'Band Portrait'
  },
  {
    id: 'music-32',
    category: 'Music',
    url: '/music-photography/DetectiveBureau--12.jpg',
    alt: 'Band Photography'
  },
  {
    id: 'music-33',
    category: 'Music',
    url: '/music-photography/DetectiveBureau--5.jpg',
    alt: 'Group Portrait'
  },
  {
    id: 'music-34',
    category: 'Music',
    url: '/music-photography/IMG_20190712_110415_214.jpg',
    alt: 'Music Portrait'
  },
  {
    id: 'music-35',
    category: 'Music',
    url: '/music-photography/IMG_20190712_110415_215.jpg',
    alt: 'Musical Portrait'
  },
  {
    id: 'music-36',
    category: 'Music',
    url: '/music-photography/IMG_20190712_110415_216.jpg',
    alt: 'Artist Portrait'
  },
  {
    id: 'music-37',
    category: 'Music',
    url: '/music-photography/LLOJuly31-1449.jpg',
    alt: 'Recording Session'
  },
  {
    id: 'music-38',
    category: 'Music',
    url: '/music-photography/LLOJuly31-1453.jpg',
    alt: 'Sound Engineer at Console'
  },
  {
    id: 'music-39',
    category: 'Music',
    url: '/music-photography/wheresjoe-1494.jpg',
    alt: 'Saxophone Player in Performance'
  },

  // Lifestyle/Creative Photography - All 19 photos
  {
    id: 'lifestyle-1',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_ATF3435.jpg',
    alt: 'Creative Portrait'
  },
  {
    id: 'lifestyle-2',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_ATF4389.jpg',
    alt: 'Lifestyle Moment'
  },
  {
    id: 'lifestyle-3',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_ATF5246.jpg',
    alt: 'Creative Photography'
  },
  {
    id: 'lifestyle-4',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_ATF5915-2.jpg',
    alt: 'Creative Portrait'
  },
  {
    id: 'lifestyle-5',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_ATF7724.jpg',
    alt: 'Artistic Portrait'
  },
  {
    id: 'lifestyle-6',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC1101.jpg',
    alt: 'Lifestyle Photography'
  },
  {
    id: 'lifestyle-7',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC2408.jpg',
    alt: 'Creative Composition'
  },
  {
    id: 'lifestyle-8',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC2637.jpg',
    alt: 'Artistic Photography'
  },
  {
    id: 'lifestyle-9',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC4727 copy.jpg',
    alt: 'Artistic Study'
  },
  {
    id: 'lifestyle-10',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC5085.jpg',
    alt: 'Creative Vision'
  },
  {
    id: 'lifestyle-11',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC5702.jpg',
    alt: 'Lifestyle Scene'
  },
  {
    id: 'lifestyle-12',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/_DSC5775.jpg',
    alt: 'Creative Photography'
  },
  {
    id: 'lifestyle-13',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/captain morning eye.jpg',
    alt: 'Portrait Detail'
  },
  {
    id: 'lifestyle-14',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/IMG_20181005_214844_214.jpg',
    alt: 'Creative Moment'
  },
  {
    id: 'lifestyle-15',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/IMG_20190113_125108_203.jpg',
    alt: 'Lifestyle Portrait'
  },
  {
    id: 'lifestyle-16',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/Macro Shot Tests-3.jpg',
    alt: 'Macro Photography'
  },
  {
    id: 'lifestyle-17',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/Macro Shot Tests-4.jpg',
    alt: 'Detail Photography'
  },
  {
    id: 'lifestyle-18',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/Macro Shot Tests-5.jpg',
    alt: 'Macro Detail'
  },
  {
    id: 'lifestyle-19',
    category: 'Commercial/Lifestyle',
    url: '/lifestyle-photography/Macro Shot Tests-8.jpg',
    alt: 'Close-up Photography'
  }
];

export const Photography = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Get all unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(photographyItems.map(item => item.category)));
  }, []);

  // Filter photos by selected category
  const filteredPhotos = useMemo(() => {
    if (!selectedCategory) return photographyItems;
    return photographyItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Get filter from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const filter = urlParams.get('filter');
    if (filter && categories.includes(filter)) {
      setSelectedCategory(filter);
    }
  }, [location.search, categories]);

  const handlePhotoClick = (photoId: string) => {
    setSelectedPhoto(photoId);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1].id);
    }
  };

  const handlePreviousPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto);
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1].id);
    }
  };

  const currentPhoto = selectedPhoto ? filteredPhotos.find(photo => photo.id === selectedPhoto) : null;

  return (
    <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black z-10"></div>
              <img
                src="/music-photography/_YOU0011.jpg"
                alt="Photography Portfolio Hero"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
              <Link
                to="/"
                className="absolute top-8 left-8 flex items-center text-electric-cyan hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-pixel mb-6 text-electric-cyan neon-cyan">
                  Photography
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
                  Capturing moments across outdoor adventures, musical performances, and commercial lifestyle.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-24 bg-[#130c24]">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-4 text-electric-cyan neon-cyan">
                  Photography Gallery
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                  From outdoor landscapes to intimate musical moments and commercial lifestyle captures
                </p>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <Button
                    variant={selectedCategory === null ? 'primary' : 'outline'}
                    onClick={() => setSelectedCategory(null)}
                    className="px-4 py-2"
                  >
                    All
                  </Button>
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'primary' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      className="px-4 py-2"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>

              {/* Photo grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handlePhotoClick(photo.id)}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-digital-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* More photos coming soon message */}
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
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
      {currentPhoto && (
        <PhotoModal
          image={currentPhoto}
          onClose={handleCloseModal}
          onNext={handleNextPhoto}
          onPrevious={handlePreviousPhoto}
          hasNext={filteredPhotos.findIndex(photo => photo.id === selectedPhoto) < filteredPhotos.length - 1}
          hasPrevious={filteredPhotos.findIndex(photo => photo.id === selectedPhoto) > 0}
        />
      )}
    </div>
  );
};