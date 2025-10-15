import React, { useState } from 'react';

export type Project = {
  id: string;
  title: string;
  image: string;
  type: 'video' | 'gallery';
  videoUrl?: string;
  galleryImages?: string[];
};

interface SideScrollGalleryProps {
  projects: Project[];
  title?: string;
}

export const SideScrollGallery: React.FC<SideScrollGalleryProps> = ({ projects, title }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="w-full py-10 bg-digital-black">
  <h2 className="text-3xl font-bold text-highlight mb-6 px-6">{title ? title : 'Our Handpicked Featured Portfolio'}</h2>
      <div className="overflow-x-auto whitespace-nowrap px-6 scrollbar-thin scrollbar-thumb-highlight scrollbar-track-digital-black">
        <div className="flex gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="relative rounded-3xl bg-black/80 cursor-pointer group min-w-[320px] max-w-xs h-80 flex-shrink-0 shadow-lg"
              onClick={() => setActiveProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xl font-semibold drop-shadow-lg">{project.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for project details */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-digital-black rounded-2xl p-6 max-w-4xl w-full relative">
            <button
              className="absolute top-4 right-4 text-highlight text-2xl font-bold"
              onClick={() => setActiveProject(null)}
              aria-label="Close"
            >
              ×
            </button>
            {activeProject.type === 'video' && activeProject.videoUrl ? (
              <div className="aspect-video w-full">
                <iframe
                  src={activeProject.videoUrl}
                  title={activeProject.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl w-full h-full"
                ></iframe>
              </div>
            ) : activeProject.type === 'gallery' && activeProject.galleryImages ? (
              <div className="grid grid-cols-2 gap-4">
                {activeProject.galleryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                ))}
              </div>
            ) : null}
            <div className="mt-4 text-highlight text-xl font-semibold">{activeProject.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};
