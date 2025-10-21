import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { MailIcon, PhoneIcon, MapPinIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-24 bg-gunmetal pixel-grid">
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
          <h2 className="font-pixel text-2xl md:text-3xl font-bold mb-4 text-electric-cyan neon-cyan">
            let's get your project started:
          </h2>
          {/*<p className="text-xl text-highlight/80 font-sans">
           Let's start a conversation.
           </p>*/}
        </motion.div>
        <div className="flex flex-col items-center gap-12">
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
          }} className="w-full max-w-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 font-ui text-electric-cyan">
                    Name
                  </label>
                  <input type="text" id="name" placeholder="Your name" className="w-full px-4 py-3 bg-digital-black border border-electric-cyan/30 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan text-highlight font-sans" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 font-ui text-electric-cyan">
                    Email
                  </label>
                  <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-digital-black border border-electric-cyan/30 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan text-highlight font-sans" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 font-ui text-electric-cyan">
                  Subject
                </label>
                <input type="text" id="subject" placeholder="Project Name" className="w-full px-4 py-3 bg-digital-black border border-electric-cyan/30 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan text-highlight font-sans" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 font-ui text-electric-cyan">
                  Message
                </label>
                <textarea id="message" rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-digital-black border border-electric-cyan/30 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan text-highlight resize-none font-sans" required></textarea>
              </div>
              <div>
                <label className="flex items-center font-sans">
                  <input type="checkbox" className="w-4 h-4 mr-2 accent-electric-cyan" />
                  <span className="text-sm text-highlight/70">
                    I agree to receive occasional newsletters and updates.
                  </span>
                </label>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
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
          }} className="space-y-8 w-full max-w-xl">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 font-pixel text-electric-cyan text-center">
                Contact Information
              </h3>
              <div className="space-y-4 font-sans">
                <div className="flex items-center justify-left">
                  <MailIcon className="w-5 h-5 text-electric-cyan mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-highlight">Email</p>
                    <a href="mailto:80fcreative@gmail.com" className="text-highlight/80 hover:text-electric-cyan transition-colors">
                      80fcreative@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-left">
                  <PhoneIcon className="w-5 h-5 text-electric-cyan mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-highlight">Phone</p>
                    <a href="tel:9018965870" className="text-highlight/80 hover:text-electric-cyan transition-colors">
                      901.896.5870
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-left">
                  <MapPinIcon className="w-5 h-5 text-electric-cyan mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-highlight">Location</p>
                    <p className="text-highlight/80">Memphis, TN</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};