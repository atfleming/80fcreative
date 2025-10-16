import React, { useState } from 'react';

const videoData = [
  // Commercial
  {
    category: 'Commercial',
    title: '901 fc brand reveal video',
    url: 'https://www.youtube.com/watch?v=gY5Qz7N7BVU',
  },
  {
    category: 'Commercial',
    title: 'champions for lit grizzlies promo',
    url: 'https://vimeo.com/935182826?fl=ip&fe=ec',
  },
  {
    category: 'Commercial',
    title: 'champions for lit player hype promo',
    url: 'https://vimeo.com/1002964765?fl=ip&fe=ec',
  },
  {
    category: 'Commercial',
    title: 'aces x penny hardaway x complex promo',
    url: 'https://vimeo.com/947118016?fl=ip&fe=ec',
  },
  {
    category: 'Commercial',
    title: 'u of m engineering promo',
    url: 'https://vimeo.com/947123598?fl=ip&fe=ec',
  },
  {
    category: 'Commercial',
    title: "u of m 'give to the legacy'",
    url: 'https://youtu.be/oQiZGRDIct8',
  },
  {
    category: 'Commercial',
    title: 'old dominick whiskey 5 year reveal',
    url: 'https://youtu.be/GprckON8yZo',
  },
  {
    category: 'Commercial',
    title: 'grizzly outdoor corp: Offroad Jeeps in Pennsylvania',
    url: 'https://youtu.be/kUZkK1oAbmY',
  },
  {
    category: 'Commercial',
    title: 'bloodbound audio drama promo',
    url: 'https://www.youtube.com/watch?v=NTWjUkkcbBE',
  },
  {
    category: 'Commercial',
    title: 'virbac mr squeakems',
    url: 'https://www.youtube.com/watch?v=jfgbnFL8rSo',
  },
  // Film
  {
    category: 'Film',
    title: 'the typewriter',
    url: 'https://youtu.be/TF08ScP2wi4',
  },
  {
    category: 'Film',
    title: 'soul man',
    url: 'https://youtu.be/clWlvoAxct0?si=LssTg4F198HvxhIb',
  },
  {
    category: 'Film',
    title: 'the brothers brothers',
    url: 'https://youtu.be/U8Y5Tz4_noE?si=iojQkZxERVUoE2UP',
  },
  {
    category: 'Film',
    title: 'in a bad way',
    url: 'https://youtu.be/Xxxdd86i7Xo?si=tyhPtP2_jpccZENG',
  },
  {
    category: 'Film',
    title: 'muddy water',
    url: 'https://www.youtube.com/watch?v=24A5qe5Z9YI',
  },
  {
    category: 'Film',
    title: 'traveling soldier',
    url: 'https://www.youtube.com/watch?v=-HquPPjfkKc',
  },
  {
    category: 'Film',
    title: 'without a roof',
    url: 'https://www.youtube.com/watch?v=vy9-y7xUQbI',
  },
  {
    category: 'Film',
    title: 'a night out',
    url: 'https://youtu.be/s3HH8sTc-_8',
  },
  {
    category: 'Film',
    title: 'life after death',
    url: 'https://youtu.be/s9Ek7pKVxD0',
  },
  // Documentary/Branded
  {
    category: 'Documentary/Branded',
    title: 'cyrena wages: "vanity project" album release film',
    url: 'https://youtu.be/bPAHomKQijA?si=Ymw8SFr2H2uWSQya',
  },
  {
    category: 'Documentary/Branded',
    title: 'the memphis masters: series',
    url: 'https://www.youtube.com/watch?v=u4NRkMWrlnc&list=PL7V0YFqzawWwxbWmyB5c0mImdw5A9X3z7&index=19',
  },
  {
    category: 'Documentary/Branded',
    title: 'rolling stone',
    url: 'https://www.rollingstone.com/music/music-news/big-star-memphis-masters-series-1021789/',
  },
  {
    category: 'Documentary/Branded',
    title: 'full series',
    url: 'https://www.youtube.com/watch?v=u4NRkMWrlnc&list=PL79xK-VVZpsntp7H7m-p9vr48f6Yxiv7E',
  },
  {
    category: 'Documentary/Branded',
    title: 'Roberta Finocchiaro "Put the Memphis On it" album release',
    url: 'https://www.youtube.com/watch?v=qSN-wQlqj1s',
  },
  {
    category: 'Documentary/Branded',
    title: 'MLB Fan Cave Submission (top 30 winner 2012)',
    url: 'https://youtu.be/TSwXZa6EDbI',
  },
  {
    category: 'Documentary/Branded',
    title: 'the cotton board: runner',
    url: 'https://www.cottonboard.org/forever-cotton',
  },
  {
    category: 'Documentary/Branded',
    title: 'your own land',
    url: 'https://youtu.be/9CTUAWI2Wtc',
  },
  // Music Videos
  {
    category: 'Music Videos',
    title: 'daykisser: "it\'s just what we talked about"',
    url: 'https://youtu.be/0efLsK07TxA',
  },
  {
    category: 'Music Videos',
    title: 'teenage stepdad: "rhetoric"',
    url: 'https://youtu.be/21POSFRtjY4',
  },
  {
    category: 'Music Videos',
    title: 'susurra: "my heart should be breaking"',
    url: 'https://youtu.be/RETndZHvfZs',
  },
  {
    category: 'Music Videos',
    title: 'brennan villines: "better than we\'ve ever been"',
    url: 'https://youtu.be/v-70xxtygbA',
  },
  {
    category: 'Music Videos',
    title: 'marco pave: "dirty benz"',
    url: 'https://www.youtube.com/watch?v=sfsEnFcfGqQ&list=RDsfsEnFcfGqQ&start_radio=1',
  },
  {
    category: 'Music Videos',
    title: 'musician promo reel',
    url: 'https://youtu.be/KtlSk0LOTeY',
  },
  {
    category: 'Music Videos',
    title: 'dave miller: nail can',
    url: 'https://youtu.be/3aRAiJ9Cc88',
  },
  {
    category: 'Music Videos',
    title: 'marco pave: "gold grind"',
    url: 'https://www.youtube.com/watch?v=OYzT1YvPpbs&list=RDOYzT1YvPpbs&start_radio=1',
  },
  {
    category: 'Music Videos',
    title: 'the city champs: "luna 68"',
    url: 'https://www.youtube.com/watch?v=Jl8iOcCepao&list=RDJl8iOcCepao&start_radio=1',
  },
  {
    category: 'Music Videos',
    title: 'joe restivo: "starlight motel"',
    url: 'https://www.youtube.com/watch?v=c7i_BYe45TE&list=RDc7i_BYe45TE&start_radio=1',
  },
  {
    category: 'Music Videos',
    title: 'susurra: "it\'s too late"',
    url: 'https://youtu.be/sERw6H7qgUo?si=LN-PKPlbd69Q70v1',
  },
  {
    category: 'Music Videos',
    title: 'marco pave: "black tux"',
    url: 'https://youtu.be/jyCqLS8CPHw?si=RYTHlgoX20IMXq8B',
  },
  {
    category: 'Music Videos',
    title: 'myla smith: "can\'t keep me down"',
    url: 'https://www.youtube.com/watch?v=MoZooQPe_4o&list=PL7V0YFqzawWwxbWmyB5c0mImdw5A9X3z7&index=25',
  },
  {
    category: 'Music Videos',
    title: 'pat24seven: "all i know"',
    url: 'https://www.youtube.com/watch?v=gTixnOwRnlA&list=PL7V0YFqzawWwxbWmyB5c0mImdw5A9X3z7&index=23',
  },
  {
    category: 'Music Videos',
    title: 'bryan hayes: "i wanna run"',
    url: 'https://www.youtube.com/watch?v=zaRIySqM-9A&list=PL7V0YFqzawWwxbWmyB5c0mImdw5A9X3z7&index=22',
  },
  {
    category: 'Music Videos',
    title: 'chris milam: "kids these days"',
    url: 'https://www.youtube.com/watch?v=tfgdfz35kB4&list=PL7V0YFqzawWwxbWmyB5c0mImdw5A9X3z7&index=20',
  },
  {
    category: 'Music Videos',
    title: 'the barnes brothers: "i\'m trying to go home"',
    url: 'https://youtu.be/bgmGQCK8bFE?si=qbmUYoul0hQYWfOR',
  },
  {
    category: 'Music Videos',
    title: 'frenchie!: "renegades"',
    url: 'https://www.youtube.com/watch?v=ouxE5tlbYNs&list=RDouxE5tlbYNs&start_radio=1',
  },
  {
    category: 'Music Videos',
    title: 'vending machine: "white squared potato"',
    url: 'https://youtu.be/7mjj_tCcydY?si=mq0HCjAT1kM2A_6p',
  },
  {
    category: 'Music Videos',
    title: 'brennan villines: "free"',
    url: 'https://youtu.be/rxFEL0yeJ-I?si=zcv_B3YwxfPvG6k2',
  },
  {
    category: 'Music Videos',
    title: 'brennan villines: "self control"',
    url: 'https://www.youtube.com/watch?v=vSE7lknb8Wk&list=RDvSE7lknb8Wk&start_radio=1',
  },
  {
    category: 'Music Videos',
    title: 'jack bear: "not that i\'d ever hope"',
    url: 'https://www.youtube.com/watch?v=uMTPE7eSuUU&list=RDuMTPE7eSuUU&start_radio=1',
  },
];

const categories = Array.from(new Set(videoData.map(v => v.category)));

export const AllProjects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<null | { title: string; url: string }>(null);

  return (
    <div className="bg-digital-black min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-highlight mb-10 text-center">All Projects</h1>
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-electric-cyan mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videoData.filter(v => v.category === category).map(video => (
              <div
                key={video.title}
                className="bg-black/80 rounded-2xl shadow-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveVideo(video)}
              >
                <div className="w-full h-48 bg-gradient-to-br from-electric-cyan to-highlight rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-xl text-white font-bold text-center px-2">{video.title}</span>
                </div>
                <span className="text-highlight/80 text-sm">Open Video</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Modal for video playback */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-digital-black rounded-2xl p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-4 right-4 text-electric-cyan text-2xl font-bold"
              onClick={() => setActiveVideo(null)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-highlight mb-4">{activeVideo.title}</h2>
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo.url.replace('watch?v=', 'embed/')}
                title={activeVideo.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
