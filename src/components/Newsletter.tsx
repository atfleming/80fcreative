import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
export const Newsletter = () => {
  return <section id="newsletter" className="py-24 bg-[#130c24]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
        }}>
            <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-6 text-electric-cyan neon-cyan">
              <span>Create/Dev/Solve</span> Newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Join our newsletter where we share insights at the intersection of
              creativity, development, and problem-solving for modern brands.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff55ee] mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Creative direction tips and case studies</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff55ee] mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Development workflows and tools</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff55ee] mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>
                  Problem-solving frameworks for creative professionals
                </span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff55ee] mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Exclusive resources and tools</span>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-[#241544] border border-[#5522ff]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff55ee] text-white" required />
              </div>
              <Button className="w-full">Subscribe to Newsletter</Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
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
            <div className="border-l-4 border-[#ff55ee] pl-6 mb-8">
              <h3 className="font-pixel text-xl font-bold mb-2 text-electric-cyan">
                From the Newsletter
              </h3>
              <p className="text-gray-400">
                A sample of what subscribers receive
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-[#241544] rounded-xl">
                <span className="text-sm text-[#ff55ee] font-medium block mb-2">
                  CREATIVE DIRECTION
                </span>
                <h4 className="font-pixel text-lg font-bold mb-3 text-electric-cyan">
                  Finding Your Visual Voice: A Guide for Emerging Brands
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  In this edition, we explore how new brands can develop a
                  distinctive visual identity that resonates with their target
                  audience while remaining authentic to their values...
                </p>
                <a href="#" className="text-[#ff55ee] text-sm font-medium hover:underline">
                  Read Sample →
                </a>
              </div>
              <div className="p-6 bg-[#241544] rounded-xl">
                <span className="text-sm text-[#5522ff] font-medium block mb-2">
                  DEVELOPMENT
                </span>
                <h4 className="font-pixel text-lg font-bold mb-3 text-electric-cyan">
                  Integrating Design Systems with Modern Development Workflows
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  This technical deep dive shows how creative teams can work
                  more efficiently with developers by implementing a shared
                  design system that scales...
                </p>
                <a href="#" className="text-[#5522ff] text-sm font-medium hover:underline">
                  Read Sample →
                </a>
              </div>
              <div className="p-6 bg-[#241544] rounded-xl">
                <span className="text-sm text-[#ff55ee] font-medium block mb-2">
                  PROBLEM-SOLVING
                </span>
                <h4 className="font-pixel text-lg font-bold mb-3 text-electric-cyan">
                  The Creative's Guide to Client Feedback: Turning Critique into
                  Opportunity
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Learn our framework for processing client feedback
                  constructively and using it to elevate your work rather than
                  compromise your vision...
                </p>
                <a href="#" className="text-[#ff55ee] text-sm font-medium hover:underline">
                  Read Sample →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};