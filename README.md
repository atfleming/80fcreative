# 🎬 80F Creative Portfolio

> **Andrew Trent Fleming's Digital Portfolio** - Showcasing award-winning videography, photography, and creative storytelling since 2005.

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/Built%20with-React-61dafb?style=flat&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org)

---

## 🎨 About the Project

80F Creative is a modern, interactive portfolio showcasing the work of filmmaker and photographer Andrew Trent Fleming. The site features a cyberpunk-inspired design with neon aesthetics, smooth animations, and an immersive video showreel experience.

### 🏆 Featured Work
- **📹 Video Production**: Music videos, commercials, documentaries
- **📸 Photography**: Outdoor, music, lifestyle/commercial
- **🎬 Storytelling**: Award-winning narrative and branded content
- **💻 Development**: Technical projects and coding portfolio

---

## 🚀 Live Demo

**🌐 Production Site**: [80F Creative Portfolio](https://your-vercel-url.vercel.app)

---

## 🛠️ Technology Stack

### Frontend Framework
- **⚛️ React 18** - Modern component-based UI
- **📘 TypeScript** - Type-safe development
- **⚡ Vite** - Lightning-fast build tool and dev server

### Styling & Animation
- **🎨 Tailwind CSS** - Utility-first styling
- **✨ Framer Motion** - Smooth page transitions and animations
- **🎭 Custom Design System** - Cyberpunk neon theme

### Routing & Navigation
- **🧭 React Router** - Client-side routing with category filtering
- **🔗 Dynamic Navigation** - Smooth scroll and page transitions

### Media Management
- **📁 Git LFS** - Large file storage for videos and photos (1.2GB+)
- **🎥 Video Optimization** - Autoplay, lazy loading, and fallbacks
- **🖼️ Image Gallery** - 129 curated photos across multiple categories

### Deployment & Analytics
- **🚀 Vercel** - Automatic deployments from GitHub
- **📊 Vercel Analytics** - Performance and engagement tracking

---

## 🏗️ Project Structure

```
📁 80Fco/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   ├── 🎬 AnimatedVideoSection.tsx    # Showreel video player
│   │   ├── 🏠 Hero.tsx                    # Landing page header
│   │   ├── 🖼️ Portfolio.tsx              # Project grid showcase
│   │   ├── 📸 Photography.tsx             # Photo gallery modal
│   │   ├── 👤 About.tsx                   # Bio and recognition
│   │   └── 📞 Contact.tsx                 # Contact information
│   ├── 📁 pages/              # Route-specific pages
│   │   ├── 📸 Photography.tsx             # Photography gallery page
│   │   └── 🎯 Projects.tsx                # Video projects showcase
│   └── 📁 public/             # Static assets
│       ├── 🎥 80fco-reel.mov             # Main showreel video
│       ├── 🎬 bts-video-about.mov        # About section video
│       ├── 📁 outdoor-photography/        # Nature & landscape photos
│       ├── 📁 music-photography/          # Concert & artist photos
│       └── 📁 lifestyle-photography/      # Commercial & lifestyle photos
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git** with **Git LFS** enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atfleming/80Fco.git
   cd 80Fco
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### 📝 Available Scripts

```bash
# 🔧 Development
npm run dev          # Start dev server with hot reload

# 🏗️ Building
npm run build        # Create production build
npm run preview      # Preview production build locally

# 🧹 Code Quality
npm run lint         # Run ESLint checks
npm run type-check   # Run TypeScript checks
```

---

## 🎨 Design System

### 🌈 Color Palette
```css
--electric-cyan: #00fff7;     /* Primary highlight */
--digital-black: #0f0a1e;     /* Background */
--neon-pink: #ff55ee;         /* Accent */
--purple: #5522ff;            /* Secondary accent */
--highlight: #ffffff;         /* Text highlight */
```

### 🔤 Typography
- **Headings**: `font-pixel` (Retro gaming aesthetic)
- **Body Text**: `font-sans` (Clean readability)
- **Special Titles**: `font-2p-press-start` (8-bit style)

### ✨ Animation Philosophy
- **Smooth Transitions**: 0.8s duration for page elements
- **Staggered Loading**: Progressive reveal of content
- **Scroll-Triggered**: Animations activate on viewport entry
- **Performance First**: Optimized for 60fps across devices

---

## 📱 Features

### 🎬 Video Portfolio
- **Interactive Showreel** - Scroll-triggered video player
- **Project Categories** - Music videos, commercials, documentaries
- **Video Modals** - Full-screen viewing with close controls

### 📸 Photography Gallery
- **129 Curated Photos** - Across 3 main categories
- **Category Filtering** - Outdoor, Music, Lifestyle/Commercial
- **Lightbox Modal** - Full-screen image viewing
- **Hover Effects** - Smooth zoom and overlay transitions

### 📱 Responsive Design
- **Mobile-First** - Optimized for all screen sizes
- **Touch Interactions** - Swipe gestures and tap controls
- **Progressive Enhancement** - Works without JavaScript

### 🚀 Performance
- **Lazy Loading** - Images load as needed
- **Video Optimization** - Autoplay with proper fallbacks
- **Git LFS** - Efficient large file management
- **Vercel CDN** - Global content delivery

---

## 🔧 Development Workflow

Following [Copilot Instructions](/.github/copilot-instructions.md) principles:

### 🌿 Feature Branch Workflow
1. **Create feature branch** - `feature/feature-name`
2. **Develop in isolation** - Complete feature work
3. **Update TASK_LIST.md** - Mark progress in branch
4. **Create pull request** - Include task updates
5. **Merge to main** - Deploy automatically via Vercel

### 📋 Task Management
- **TASK_LIST.md** - Central progress tracking [CDiP]
- **Atomic Commits** - Small, focused changes [AC]
- **Clean Architecture** - Consistent code patterns [CA]
- **Documentation** - Comment complex logic only [SD]

---

## 🚀 Deployment

### Automatic Deployment
- **Platform**: Vercel
- **Trigger**: Push to `main` branch
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Environment Configuration
- **Node.js Version**: 18.x
- **Git LFS**: Enabled for media files
- **Analytics**: Vercel Analytics integrated

---

## 📊 Performance & Analytics

### Metrics Tracking
- **Page Views** - Portfolio engagement
- **Video Play Rates** - Showreel effectiveness
- **Contact Form Submissions** - Lead generation
- **Loading Performance** - Core Web Vitals

### Optimization Strategies
- **Image Compression** - WebP format where supported
- **Video Preloading** - Smooth playback experience
- **Code Splitting** - Reduced initial bundle size
- **CDN Distribution** - Global performance

---

## 🤝 Contributing

### Development Guidelines
1. **Follow [Copilot Instructions](/.github/copilot-instructions.md)**
2. **Update TASK_LIST.md** with progress
3. **Test across devices** before submitting
4. **Maintain code quality** standards

### Issue Reporting
- **🐛 Bugs**: Use issue template with reproduction steps
- **💡 Features**: Discuss implementation approach first
- **📱 Mobile**: Test on actual devices when possible

---

## 📄 License

This project is privately owned by Andrew Trent Fleming / 80F Creative.

---

## 📞 Contact

**Andrew Trent Fleming**  
🎬 Director | 📸 Photographer | 💻 Developer

- **🌐 Portfolio**: [80F Creative](https://your-domain.com)
- **📧 Email**: [your-email@domain.com]
- **📱 Instagram**: [@thefilmjerk](https://instagram.com/thefilmjerk)
- **💼 GitHub**: [@atfleming](https://github.com/atfleming)

---

## 🎯 Recognition & Awards

- 🏆 **Winner** - Best Short Film "The Typewriter", FEEDBACK Under 5 Minute Film Festival, Los Angeles, 2021
- 🥇 **Gold/Best of Show** - Video/Directing, American Advertising Federation Memphis 2021  
- 🎭 **Winner** - Indie Memphis Narrative Short Audience Choice Award 2020
- 🏅 **Winner** - Best Mississippi Short, Oxford Film Festival 2020
- 🎬 **Winner** - Memphis Film Prize 2019

---

*Built with ❤️ and ☕ by Drew Fleming*  
*Last Updated: October 2025*
