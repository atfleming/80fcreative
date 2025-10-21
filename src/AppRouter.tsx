import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Projects } from "./pages/Projects";
import { Photography } from "./pages/Photography";
import { OutdoorPhotography } from "./pages/OutdoorPhotography";
import { Animation } from "./pages/Animation";
import { BrandedStorytelling } from "./pages/BrandedStorytelling";
import { HypePromo } from "./pages/HypePromo";
import { MusicVideos } from "./pages/MusicVideos";
import { MusicianPhotography } from "./pages/MusicianPhotography";
import { Design } from "./pages/Design";
import { MusicianPromos } from "./pages/MusicianPromos";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Photography />} path="/photography" />
        <Route element={<OutdoorPhotography />} path="/outdoor-photography" />
        <Route element={<MusicianPhotography />} path="/musician-photography" />
        <Route element={<Animation />} path="/animation" />
        <Route element={<BrandedStorytelling />} path="/branded-storytelling" />
        <Route element={<HypePromo />} path="/hype-promo" />
        <Route element={<MusicVideos />} path="/music-videos" />
        <Route element={<Design />} path="/design" />
        <Route element={<MusicianPromos />} path="/musician-promos" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ServicesPage />} path="/services" />
        <Route element={<CaseStudyPage />} path="/case-studies/:slug" />
      </Routes>
    </BrowserRouter>
  );
}