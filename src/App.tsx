import React from 'react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
// import { About } from './components/About'
// import { Services } from './components/Services'
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
          <Portfolio />
          {/* About and Services sections moved to separate pages */}
          {/* <About /> */}
          {/* <Services /> */}
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