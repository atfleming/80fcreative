import { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
const ShowreelTitle = lazy(() => import('./components/ShowreelTitle').then(module => ({ default: module.ShowreelTitle })));
const AnimatedVideoSection = lazy(() => import('./components/AnimatedVideoSection').then(module => ({ default: module.AnimatedVideoSection })));
const Portfolio = lazy(() => import('./components/Portfolio').then(module => ({ default: module.Portfolio })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
//import { SideScrollGallery, Project } from './components/SideScrollGallery';
// import { VideoPortfolio } from './components/VideoPortfolio'
// import { Development } from './components/Development'
// import { Newsletter } from './components/Newsletter'
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
export function App() {
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          <Hero />
          <Suspense fallback={null}>
            <ShowreelTitle />
          </Suspense>
          <Suspense fallback={null}>
            <AnimatedVideoSection />
          </Suspense>
          <Suspense fallback={null}>
            <Portfolio />
          </Suspense>
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
          <Suspense fallback={null}>
            <Services />
          </Suspense>
          <Suspense fallback={null}>
            <About />
          </Suspense>
          {/* Development section temporarily hidden */}
          {/* <Development /> */}
          {/* Newsletter section temporarily hidden */}
          {/* <Newsletter /> */}
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>;
}