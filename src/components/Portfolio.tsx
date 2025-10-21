import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { VideoModal } from "./VideoModal";
import { PlayIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioCategory {
  id: string;
  title: string;
  image: string;
  thumbnails?: string[];
  pageLink?: string;
  videoId?: string;
  isVideo?: boolean;
  isExternal?: boolean;
  hoverVideo?: string;
}

const portfolioCategories: PortfolioCategory[] = [
  {
    id: "promo",
    title: "commercial + promo",
    image: "/creative%20reel.png",
    thumbnails: [
      "/creative%20reel.png",
      "/champions%20for%20lit%20grizzlies%20promo.png",
      "/champions%20for%20lit%20player%20intro.png",
      "/aces%20penny%20thumbnail.png",
      "/u%20of%20m%20engineering.png"
    ],
    pageLink: "/projects?filter=Commercial",
    videoId: "gY5Qz7N7BVU",
    isVideo: true
  },
  {
    id: "branded-storytelling",
    title: "documentary + branded storytelling",
    image: "/memphis%20masters%20full%20series.png",
    thumbnails: [
      "/memphis%20masters%20full%20series.png",
      "/memphis%20masters%20rolling%20stone.png",
      "/memphis%20masters%20barkays.png",
      "/put%20the%20memphis%20on%20it.png",
      "/cotton%20board%20forever%20cotton.png"
    ],
    pageLink: "/projects?filter=Documentary/Branded",
    videoId: "qFQUSroCI8A",
    isVideo: true
  },
  {
    id: "music-videos",
    title: "music videos",
    image: "/marco%20pave%20dirty%20benz.png",
    thumbnails: [
      "/marco%20pave%20dirty%20benz.png",
      "/marco%20pave%20gold%20grind.png",
      "/daykisser%20ijwwta.png",
      "/brennan%20villines%20better%20than%20we%27ve%20ever%20been.png",
      "https://img.youtube.com/vi/KtlSk0LOTeY/maxresdefault.jpg"
    ],
    pageLink: "/projects?filter=music videos",
    videoId: "RETndZHvfZs",
    isVideo: true
  },
  {
    id: "narrative-film",
    title: "narrative film",
    image: "/typewriter_thumbnail.jpg",
    thumbnails: [
      "/typewriter_thumbnail.jpg",
      "https://img.youtube.com/vi/clWlvoAxct0/maxresdefault.jpg",
      "https://img.youtube.com/vi/U8Y5Tz4_noE/maxresdefault.jpg",
      "https://img.youtube.com/vi/Xxxdd86i7Xo/maxresdefault.jpg",
      "https://img.youtube.com/vi/vy9-y7xUQbI/maxresdefault.jpg"
    ],
    pageLink: "/projects?filter=Film",
    videoId: "TF08ScP2wi4",
    isVideo: true
  },
  {
    id: "outdoor-photography",
    title: "outdoor photography",
    image: "/outdoor-photography/_ATF1563.jpg",
    thumbnails: [
      "/outdoor-photography/_ATF1563.jpg",
      "/outdoor-photography/_ATF1570.jpg",
      "/outdoor-photography/_DSC0026.jpg",
      "/outdoor-photography/1Z3A0412.jpg",
      "/outdoor-photography/DSC00441.jpg"
    ],
    pageLink: "/photography?filter=Outdoor"
  },
  {
    id: "musician-photography",
    title: "music photography",
    image: "/music-photography/_ATF3388.jpg",
    thumbnails: [
      "/music-photography/_ATF3388.jpg",
      "/music-photography/_ATF3624-HDR.jpg",
      "/music-photography/_ATF4807.jpg",
      "/music-photography/_ATF5177.jpg",
      "/music-photography/_ATF5230.jpg"
    ],
    pageLink: "/photography?filter=Music"
  },
  // {
  //   id: "lifestyle-photography",
  //   title: "commercial/lifestyle photography",
  //   image: "/lifestyle-photography/_ATF3435.jpg",
  //   thumbnails: [
  //     "/lifestyle-photography/_ATF3435.jpg",
  //     "/lifestyle-photography/_ATF4389.jpg",
  //     "/lifestyle-photography/_ATF5246.jpg",
  //     "/lifestyle-photography/_ATF5915-2.jpg",
  //     "/lifestyle-photography/_ATF7724.jpg"
  //   ],
  //   pageLink: "/photography?filter=Commercial/Lifestyle"
  // },
  {
    id: "design",
    title: "design",
    image: "/design/80fcreativelogo.png",
    thumbnails: [
      "/design/80fcreativelogo.png",
      "/design/coheed_skull_fan_art.jpg",
      "/design/looper.png",
      "/design/fastandfurryous.png",
      "/design/thebarkknight.png"
    ],
    pageLink: "/design"
  },
  {
    id: "development",
    title: "development",
    image: "/development.png",
    pageLink: "https://github.com/atfleming",
    hoverVideo: "/code_animation_1.mp4",
    isExternal: true
  }
];

export const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    isVimeo?: boolean;
  } | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [hoverIndexes, setHoverIndexes] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!activeCard) {
      return;
    }

    const activeCategory = portfolioCategories.find((category) => category.id === activeCard);

    if (!activeCategory || !activeCategory.thumbnails || activeCategory.thumbnails.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setHoverIndexes((prev) => {
        const currentIndex = prev[activeCategory.id] ?? 0;
        const nextIndex = (currentIndex + 1) % activeCategory.thumbnails!.length;

        return {
          ...prev,
          [activeCategory.id]: nextIndex
        };
      });
    }, 400);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeCard]);

  const handleVideoClick = (id: string, title: string, isVimeo?: boolean) => {
    setSelectedVideo({
      id,
      title,
      isVimeo
    });
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleMouseEnter = (category: PortfolioCategory) => {
    setActiveCard(category.id);
    setHoverIndexes((prev) => ({
      ...prev,
      [category.id]: 0
    }));
  };

  const handleMouseLeave = (category: PortfolioCategory) => {
    setActiveCard((current) => (current === category.id ? null : current));
    setHoverIndexes((prev) => {
      if (!(category.id in prev)) {
        return prev;
      }

      const { [category.id]: _removed, ...rest } = prev;

      return rest;
    });
  };

  const getCurrentImage = (category: PortfolioCategory) => {
    if (!category.thumbnails || category.thumbnails.length === 0) {
      return category.image;
    }
    const index = hoverIndexes[category.id] ?? 0;
    return category.thumbnails[index] ?? category.thumbnails[0];
  };

  return (
    <section
      id="portfolio"
      className="bg-digital-black pt-5 pb-24 relative"
      style={{
        backgroundSize: "20px 20px",
        backgroundImage: [
          "linear-gradient(to right, rgba(0, 255, 247, 0.05) 1px, transparent 1px)",
          "linear-gradient(to bottom, rgba(0, 255, 247, 0.05) 1px, transparent 1px)"
        ].join(",")
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-2p-press-start text-highlight mb-8">PROJECTS</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioCategories.map((category, index) => {
            const currentImage = getCurrentImage(category);
            const showHoverVideo = Boolean(category.hoverVideo && activeCard === category.id);

            const cardMedia = (
              <div className="aspect-[4/3] overflow-hidden">
                {showHoverVideo ? (
                  <video
                    src={category.hoverVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={currentImage}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.75]"
                    loading="lazy"
                  />
                )}
                {category.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="bg-[#ff55ee] text-[#130c24] p-4 rounded-full">
                      <PlayIcon className="w-10 h-10" />
                    </div>
                  </div>
                )}
              </div>
            );

            const cardOverlay = (
              <div className="absolute inset-0 bg-gradient-to-t from-digital-black/85 via-digital-black/45 to-transparent flex flex-col justify-end p-8">
                <div className="text-left pb-2">
                  <h3 className="font-pixel text-2xl font-bold text-electric-cyan">
                    {category.title}
                  </h3>
                </div>
              </div>
            );

            const cardInner = (
              <>
                {cardMedia}
                {cardOverlay}
              </>
            );

            return (
              <motion.div
                key={category.id}
                className="relative group overflow-hidden cursor-pointer rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={() => handleMouseLeave(category)}
                onClick={() => {
                  if (category.videoId) {
                    handleVideoClick(category.videoId, category.title);
                  }
                }}
              >
                {category.pageLink ? (
                  category.isExternal ? (
                    <a href={category.pageLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {cardInner}
                    </a>
                  ) : (
                    <Link to={category.pageLink} className="block h-full">
                      {cardInner}
                    </Link>
                  )
                ) : (
                  cardInner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="px-4 py-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/projects">
            <Button>View All Projects</Button>
          </Link>
        </motion.div>
      </div>
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo.id}
          title={selectedVideo.title}
          onClose={handleCloseModal}
          isVimeo={selectedVideo.isVimeo}
        />
      )}
    </section>
  );
};