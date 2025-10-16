import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return <footer className="bg-gunmetal py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-12">
          <div className="max-w-md text-center">
            <div className="mb-6">
              <img src="/80fco_logo.png" alt="80F Creative" className="h-10 mx-auto filter drop-shadow-[0_0_4px_rgba(0,255,247,0.6)]" />
            </div>
          </div>
        </div>
        <div className="border-t border-electric-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-highlight/50 text-sm mb-4 md:mb-0 font-ui">
              © 2025 80f creative. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-highlight/50 hover:text-electric-cyan text-sm transition-colors font-ui">
                Privacy Policy
              </a>
              <a href="#" className="text-highlight/50 hover:text-electric-cyan text-sm transition-colors font-ui">
                Terms of Service
              </a>
              <a href="#" className="text-highlight/50 hover:text-electric-cyan text-sm transition-colors font-ui">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};