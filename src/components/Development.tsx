import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, GlobeIcon, ZapIcon, ServerIcon } from 'lucide-react';
import { Button } from './Button';
export const Development = () => {
  return <section id="development" className="py-24 bg-[#0f0a1e]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-4 text-electric-cyan neon-cyan">
            Development & Strategy
          </h2>
          <p className="text-xl text-gray-400 font-sans">
            Blending creative direction with cutting-edge digital experiences
            for brands that want to stand out.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="bg-[#1a1030] p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#5522ff]/20 rounded-lg flex items-center justify-center mr-4">
                <GlobeIcon className="w-6 h-6 text-[#5522ff]" />
              </div>
              <h3 className="font-pixel text-2xl font-bold text-electric-cyan">
                Rapid Website Development
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Get a professional, custom-designed website in weeks, not months.
              Our streamlined process combines creative direction with efficient
              development.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>Custom design that aligns with your brand identity</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>Responsive layouts that work on all devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>Content management systems for easy updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>SEO optimization to improve visibility</span>
              </li>
            </ul>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="bg-[#1a1030] p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#5522ff]/20 rounded-lg flex items-center justify-center mr-4">
                <CodeIcon className="w-6 h-6 text-[#5522ff]" />
              </div>
              <h3 className="font-pixel text-2xl font-bold text-electric-cyan">
                Digital Product Development
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              From concept to launch, we help you build digital products that
              solve problems and create value for your users.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>User experience research and design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>Interactive prototyping and testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>Custom web application development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5522ff] mr-2">•</span>
                <span>API integration and third-party services</span>
              </li>
            </ul>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <div className="bg-[#241544] p-6 rounded-xl">
            <ZapIcon className="w-10 h-10 text-[#ff55ee] mb-4" />
            <h4 className="font-pixel text-xl font-bold mb-2 text-electric-cyan">
              Newsletter Integration
            </h4>
            <p className="text-gray-400">
              Grow your audience with custom newsletter setups and automation.
            </p>
          </div>
          <div className="bg-[#241544] p-6 rounded-xl">
            <ServerIcon className="w-10 h-10 text-[#ff55ee] mb-4" />
            <h4 className="font-pixel text-xl font-bold mb-2 text-electric-cyan">
              API Development
            </h4>
            <p className="text-gray-400">
              Connect your systems and services with custom API solutions.
            </p>
          </div>
          <div className="bg-[#241544] p-6 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff55ee] mb-4">
              <path d="M12 2v8"></path>
              <path d="m4.93 10.93 1.41 1.41"></path>
              <path d="M2 18h2"></path>
              <path d="M20 18h2"></path>
              <path d="m19.07 10.93-1.41 1.41"></path>
              <path d="M22 22H2"></path>
              <path d="m16 8-4 4-4-4"></path>
              <path d="M16 16v-4h-4v4h4Z"></path>
            </svg>
            <h4 className="font-pixel text-xl font-bold mb-2 text-electric-cyan">
              Automation Tools
            </h4>
            <p className="text-gray-400">
              Streamline your workflow with custom automation solutions.
            </p>
          </div>
          <div className="bg-[#241544] p-6 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff55ee] mb-4">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            <h4 className="font-pixel text-xl font-bold mb-2 text-electric-cyan">
              Content Strategy
            </h4>
            <p className="text-gray-400">
              Develop a content plan that aligns with your business goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};