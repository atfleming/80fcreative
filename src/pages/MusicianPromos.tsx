import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon, PlayCircleIcon, MusicIcon, CameraIcon, FolderIcon, HelpCircleIcon } from 'lucide-react';
import { Button } from '../components/Button';
export const MusicianPromos = () => {
  const packages = [{
    id: 'island',
    title: 'THE ISLAND',
    tagline: 'For those who seek adventure in every direction.',
    features: ['1 full day of filming', '10+ mini music videos', 'Organized online cloud storage folder'],
    price: '$2,000',
    color: 'from-[#5522ff] to-[#ff55ee]'
  }, {
    id: 'cove',
    title: 'THE COVE',
    tagline: 'For those who find solace in shelters near the waves.',
    features: ['1 half day of filming (up to 4 hrs)', '5-8 mini music videos', 'Organized online cloud storage folder'],
    price: '$1,500',
    color: 'from-[#00FFF7] to-[#5522ff]'
  }, {
    id: 'sea',
    title: 'THE SEA',
    tagline: 'For those who wish to brave the elements of the ocean.',
    features: ['1 full day of filming', 'All footage delivered with color grade applied', 'Organized online cloud storage folder'],
    price: '$1,200',
    color: 'from-[#ff55ee] to-[#00FFF7]'
  }];
  const steps = [{
    number: 1,
    title: 'Plan Your Shoot',
    description: 'Setup a date, location, and time to film with us. Let us know if you have any unique needs for your day.',
    icon: <CameraIcon className="w-8 h-8" />
  }, {
    number: 2,
    title: 'Production Day',
    description: 'Spend the day filming, laughing, singing, and creating art in a ridiculously low stress environment.',
    icon: <MusicIcon className="w-8 h-8" />
  }, {
    number: 3,
    title: 'Receive Your Content',
    description: 'Receive a link to your online storage folder organized with all of the content we filmed.',
    icon: <FolderIcon className="w-8 h-8" />
  }, {
    number: 4,
    title: 'Be Amazed',
    description: 'Say to yourself "golly jeepers I can\'t believe how much awesome footage and variety we were able to capture in one day!"',
    icon: <PlayCircleIcon className="w-8 h-8" />
  }, {
    number: 5,
    title: 'Connect & Share',
    description: 'Share your new mini music videos and connect with your audience!',
    icon: <HelpCircleIcon className="w-8 h-8" />
  }];
  const faqs = [{
    question: 'Are mini music videos meant to replace traditional music videos?',
    answer: "If you want my honest opinion, I believe this format will replace traditional music videos within a few years. This has been a long time coming for the music video industry and anyone who starts this now will be at the forefront of this shift. It is the natural progression of video consumption. I still think there is a place for music videos but only under very specific circumstances. It is hyperbolic to suggest that music videos won't exist, but I believe they will be much less common and only executed by artists in a financial position to invest in a larger production."
  }, {
    question: 'What is the advantage of doing mini music videos instead of a traditional music video?',
    answer: "I'm so glad you asked, because there are a lot! It's cheaper, gives you wayyyy more quantity while maintaining quality, reaches more people over a longer period of time, and elevates your online presence in a way that communicates your unique voice."
  }, {
    question: 'What kind of stuff can we film on our day?',
    answer: "Almost anything! The only requirement is that it's manageable to film in a day. Sometimes we film interviews, sometimes it's skits, sometimes it's performance, sometimes it's narrative. If you have something unique in mind, we'd love to hear about it!"
  }, {
    question: 'Do you have any packages that include social media management as well?',
    answer: 'We currently do not offer social media management with any of our packages. We are a team of video professionals and aim to prioritize the video experience so we recommend hiring a dedicated social media management team for that.'
  }, {
    question: "What if I love this and want to work with you, but I can't afford it?",
    answer: "Reach out and be honest! We don't ever budget-shame (everyone starts somewhere), and there may be certain exceptions where we can come to a mutual agreement on a custom package that works for both of us."
  }];
  return <div className="bg-digital-black text-highlight min-h-screen w-full crt-scanlines">
      <div className="pixel-grid">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-digital-black/90 via-digital-black/70 to-digital-black/90 z-10"></div>
              <img src="/5FAFDE57-4C6D-435B-92F8-D6B55BDDAF57.jpg" alt="Musicians on the road" className="w-full h-full object-cover" />
            </div>
            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
              <Link to="/" className="absolute top-8 left-8 flex items-center text-electric-cyan hover:text-white transition-colors">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-pixel mb-6 text-electric-cyan neon-cyan">
                  Mini Music Videos
                </h1>
                <p className="text-xl md:text-3xl text-[#ff55ee] mb-8 font-ui">
                  The future of music videos is here...
                </p>
                <div className="mt-12">
                  <Button onClick={() => {
                  const packagesSection = document.getElementById('packages');
                  packagesSection?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }} className="text-lg">
                    Explore Packages
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Introduction Section */}
          <section className="py-24 bg-[#0f0a1e]">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div className="max-w-4xl mx-auto" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-12 text-electric-cyan neon-cyan text-center">
                  wtf is that?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
                  Over the past years that I've been directing music videos,
                  I've noticed a discrepancy between what the artist needs and
                  what a music video is able to accomplish.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div className="bg-[#1a1030] p-8 rounded-lg border border-[#ff55ee]/30 relative overflow-hidden">
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#ff55ee] rounded-full flex items-center justify-center font-bold text-digital-black text-2xl z-10">
                      1
                    </div>
                    <div className="pt-4">
                      <h3 className="text-2xl font-pixel text-[#ff55ee] mb-4">
                        PROBLEM #1
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        You need quantity, and music videos do not deliver a
                        cost effective, streamlined process for creating and
                        sharing content in a sustainable manner.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#1a1030] p-8 rounded-lg border border-electric-cyan/30 relative overflow-hidden">
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-electric-cyan rounded-full flex items-center justify-center font-bold text-digital-black text-2xl z-10">
                      2
                    </div>
                    <div className="pt-4">
                      <h3 className="text-2xl font-pixel text-electric-cyan mb-4">
                        PROBLEM #2
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        In order to reach your audience and keep up with content
                        demands, you are forced to sacrifice quality and settle
                        for underwhelming visuals that do not represent your
                        unique voice.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  What started as a great compromise to these problems has
                  turned into a strategy that can unleash your creative visual
                  identity, connect with your audience, keep up with today's
                  content demands, and not break the bank.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Mini Music Videos are an answer to the changing landscape of
                  sharing visual content online for artists. We work directly
                  with artists on a monthly basis to deliver content that allows
                  you to connect with and expand your audience by communicating
                  your unique voice with beautiful visuals.
                </p>
              </motion.div>
            </div>
          </section>
          {/* Packages Section */}
          <section id="packages" className="py-24 bg-digital-black">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div className="text-center mb-16" initial={{
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
                  PACKAGES
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Choose the package that best fits your creative vision and
                  budget
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, index) => <motion.div key={pkg.id} className="bg-[#1a1030] rounded-lg overflow-hidden border border-electric-cyan/20 hover:border-electric-cyan/50 transition-all" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} whileHover={{
                y: -10,
                transition: {
                  duration: 0.3
                }
              }}>
                    <div className={`h-3 bg-gradient-to-r ${pkg.color}`}></div>
                    <div className="p-8">
                      <h3 className="font-pixel text-2xl font-bold mb-2 text-electric-cyan">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-400 italic mb-6">{pkg.tagline}</p>
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, i) => <li key={i} className="flex items-start">
                            <CheckIcon className="w-5 h-5 text-[#ff55ee] mt-1 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>)}
                      </ul>
                      <div className="mt-auto">
                        <p className="text-3xl font-bold text-electric-cyan mb-6">
                          {pkg.price}
                        </p>
                        <Button variant="outline" className="w-full">
                          Select Package
                        </Button>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </section>
          {/* How It Works Section */}
          <section className="py-24 bg-[#0f0a1e]">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div className="text-center mb-16" initial={{
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
                  HOW DOES IT WORK?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  A simple, streamlined process from start to finish
                </p>
              </motion.div>
              <div className="max-w-5xl mx-auto">
                {steps.map((step, index) => <motion.div key={step.number} className="flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 relative" initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }}>
                    {/* Line connecting steps */}
                    {index < steps.length - 1 && <div className="absolute left-7 top-16 bottom-0 w-0.5 h-[calc(100%+4rem)] bg-electric-cyan/30 -z-10 hidden md:block"></div>}
                    {/* Step number */}
                    <div className="w-14 h-14 rounded-full bg-[#ff55ee] flex items-center justify-center text-digital-black text-xl font-bold mr-6 flex-shrink-0 mb-4 md:mb-0">
                      {step.number}
                    </div>
                    {/* Step content */}
                    <div className="bg-[#1a1030] p-6 rounded-lg border border-electric-cyan/20 flex-grow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-electric-cyan/10 flex items-center justify-center mr-4">
                          {step.icon}
                        </div>
                        <h3 className="font-pixel text-xl text-electric-cyan">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="py-24 bg-digital-black">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div className="text-center mb-16" initial={{
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
                  FAQ
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Answers to commonly asked questions about Mini Music Videos
                </p>
              </motion.div>
              <div className="max-w-4xl mx-auto space-y-8">
                {faqs.map((faq, index) => <motion.div key={index} className="bg-[#1a1030] rounded-lg overflow-hidden border border-electric-cyan/20" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }}>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#ff55ee] mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>)}
              </div>
              <div className="text-center mt-16">
                <Button onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })}>
                  Back to Top
                </Button>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-24 bg-[#0f0a1e]">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div className="max-w-4xl mx-auto text-center" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="font-pixel text-3xl md:text-4xl font-bold mb-6 text-electric-cyan neon-cyan">
                  Ready to elevate your music with visuals?
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  Get in touch today to discuss how we can create the perfect
                  Mini Music Videos package for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button onClick={() => {
                  const packagesSection = document.getElementById('packages');
                  packagesSection?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>
                    View Packages
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>;
};