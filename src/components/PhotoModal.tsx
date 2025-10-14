import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
interface PhotoModalProps {
  image: {
    url: string;
    alt: string;
    category: string;
    description?: string;
  };
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}
export const PhotoModal: React.FC<PhotoModalProps> = ({
  image,
  onClose,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext && hasNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrevious && hasPrevious) {
        onPrevious();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);
  return <AnimatePresence>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
        <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300
      }} className="relative max-w-6xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
          <div className="relative">
            <img src={image.url} alt={image.alt} className="object-contain max-h-[80vh] rounded-lg" />
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 bg-[#130c24]/80 hover:bg-[#1a1030] p-2 rounded-full text-white transition-colors" aria-label="Close modal">
              <XIcon className="w-6 h-6" />
            </button>
            {/* Navigation buttons */}
            {hasPrevious && <button onClick={onPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#130c24]/80 hover:bg-[#1a1030] p-2 rounded-full text-white transition-colors" aria-label="Previous image">
                <ArrowLeftIcon className="w-6 h-6" />
              </button>}
            {hasNext && <button onClick={onNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#130c24]/80 hover:bg-[#1a1030] p-2 rounded-full text-white transition-colors" aria-label="Next image">
                <ArrowRightIcon className="w-6 h-6" />
              </button>}
          </div>
          {/* Caption */}
          <div className="bg-[#1a1030] p-4 mt-2 rounded-lg">
            <span className="text-[#ff55ee] text-sm font-medium block mb-1">
              {image.category}
            </span>
            <h3 className="font-pixel text-xl text-electric-cyan mb-1">
              {image.alt}
            </h3>
            {image.description && <p className="text-gray-300 text-sm">{image.description}</p>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>;
};