import React from 'react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { AnimatedVideoSection } from './components/AnimatedVideoSection';
import { Services } from './components/Services';
import { About } from './components/About';
//import { SideScrollGallery, Project } from './components/SideScrollGallery';
// import { VideoPortfolio } from './components/VideoPortfolio'
// import { Development } from './components/Development'
// import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          <Hero />
          <AnimatedVideoSection />
            <Portfolio />
            {/* Side Scrolling Gallery Below Portfolio */}
            {/*
            <SideScrollGallery
              title="Promo/Commercial Video"
              projects={Array.from({ length: 5 }, (_, i) => ({
                id: `promo-${i+1}`,
                title: `Promo Project ${i+1}`,
                image: `/images/promo-placeholder.jpg`,
                type: 'video',
                videoUrl: '',
              }))}
            />
            <SideScrollGallery
              title="Doc/Storytelling"
              projects={Array.from({ length: 5 }, (_, i) => ({
                id: `doc-${i+1}`,
                title: `Doc Project ${i+1}`,
                image: `/images/doc-placeholder.jpg`,
                type: 'video',
                videoUrl: '',
              }))}
            />
            <SideScrollGallery
              title="Music Videos"
              projects={Array.from({ length: 5 }, (_, i) => ({
                id: `music-${i+1}`,
                title: `Music Video ${i+1}`,
                image: `/images/music-placeholder.jpg`,
                type: 'video',
                videoUrl: '',
              }))}
            />
            <SideScrollGallery
              title="Photography"
              projects={Array.from({ length: 5 }, (_, i) => ({
                id: `photo-${i+1}`,
                title: `Photo Project ${i+1}`,
                image: `/images/photo-placeholder.jpg`,
                type: 'gallery',
                galleryImages: [],
              }))}
            />
            <SideScrollGallery
              title="Design"
              projects={Array.from({ length: 5 }, (_, i) => ({
                id: `design-${i+1}`,
                title: `Design Project ${i+1}`,
                image: `/images/design-placeholder.jpg`,
                type: 'gallery',
                galleryImages: [],
              }))}
            />
            */}
          <Services />
          <About />
          {/* Development section temporarily hidden */}
          {/* <Development /> */}
          {/* Newsletter section temporarily hidden */}
          {/* <Newsletter /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>;
}