import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
interface VideoModalProps {
  videoId: string | null;
  onClose: () => void;
  title?: string;
  isVimeo?: boolean;
}
export const VideoModal: React.FC<VideoModalProps> = ({
  videoId,
  onClose,
  title,
  isVimeo
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current === e.target) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  if (!videoId) return null;
  return <div ref={overlayRef} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={e => {
    if (e.target === overlayRef.current) onClose();
  }}>
      <div className="relative bg-[#1a1030] rounded-lg overflow-hidden max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <div className="p-4 flex justify-between items-center border-b border-[#5522ff]/30">
          <h3 className="font-pixel text-xl font-bold text-electric-cyan">
            {title || 'Video'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="aspect-video w-full">
          {isVimeo ? <iframe src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`} className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> : <YouTube videoId={videoId} opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0
          }
        }} className="w-full h-full" />}
        </div>
      </div>
    </div>;
};