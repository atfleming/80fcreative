import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Projects } from './pages/Projects';
import { Photography } from './pages/Photography';
import { OutdoorPhotography } from './pages/OutdoorPhotography';
import { Animation } from './pages/Animation';
import { BrandedStorytelling } from './pages/BrandedStorytelling';
import { HypePromo } from './pages/HypePromo';
import { MusicVideos } from './pages/MusicVideos';
import { MusicianPhotography } from './pages/MusicianPhotography';
import { Design } from './pages/Design';
import { MusicianPromos } from './pages/MusicianPromos';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/outdoor-photography" element={<OutdoorPhotography />} />
        <Route path="/musician-photography" element={<MusicianPhotography />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/branded-storytelling" element={<BrandedStorytelling />} />
        <Route path="/hype-promo" element={<HypePromo />} />
        <Route path="/music-videos" element={<MusicVideos />} />
        <Route path="/design" element={<Design />} />
        <Route path="/musician-promos" element={<MusicianPromos />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>;
}