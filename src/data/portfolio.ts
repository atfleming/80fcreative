export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Documentary/Branded' | 'Music Videos' | 'Film';
  image: string;
  description?: string;
  videoId?: string;
  isVimeo?: boolean;
  externalLink?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "csv0",
    title: "Memphis 901 FC",
    category: "Commercial",
    image: "https://img.youtube.com/vi/gY5Qz7N7BVU/hqdefault.jpg",
    description: "Cinematic hype spot capturing the pulse of the Memphis 901 FC supporters.",
    videoId: "gY5Qz7N7BVU"
  },
  {
    id: 'csv2',
    title: 'champions for lit grizzlies promo',
    category: 'Commercial',
    image: '/champions for lit grizzlies promo.webp',
    videoId: 'ex66IZtfyQI',
    isVimeo: true
  },
  {
    id: 'v8',
    title: 'FedEx x Memphis Record Pressing',
    category: 'Commercial',
    image: '/fedex mrp .webp',
    description: '',
    videoId: 'VaT_oPNG8eM'
  },
  {
    id: 'csv3',
    title: 'champions for lit player hype promo',
    category: 'Commercial',
    image: '/champions for lit player intro.webp',
    videoId: '1002964765',
    isVimeo: true
  },
  {
    id: 'csv4',
    title: 'aces x penny hardaway x complex promo',
    category: 'Commercial',
    image: '/aces penny thumbnail.webp',
    videoId: '947118016',
    isVimeo: true
  },
  {
    id: 'csv5',
    title: 'u of m engineering promo',
    category: 'Commercial',
    image: '/uofmengineering.webp',
    videoId: '947123598',
    isVimeo: true
  },
  {
    id: 'csv6',
    title: "u of m 'give to the legacy'",
    category: 'Commercial',
    image: 'https://img.youtube.com/vi/oQiZGRDIct8/maxresdefault.jpg',
    videoId: 'oQiZGRDIct8'
  },
  {
    id: 'csv7',
    title: 'old dominick whiskey 5 year reveal',
    category: 'Commercial',
    image: 'https://img.youtube.com/vi/GprckON8yZo/maxresdefault.jpg',
    videoId: 'GprckON8yZo'
  },
  {
    id: 'csv8',
    title: 'grizzly outdoor corp: Offroad Jeeps in Pennsylvania',
    category: 'Commercial',
    image: 'https://img.youtube.com/vi/kUZkK1oAbmY/maxresdefault.jpg',
    videoId: 'kUZkK1oAbmY'
  },
  {
    id: 'csv9',
    title: 'bloodbound audio drama promo',
    category: 'Commercial',
    image: 'https://img.youtube.com/vi/NTWjUkkcbBE/maxresdefault.jpg',
    videoId: 'NTWjUkkcbBE'
  },
  {
    id: 'csv10',
    title: 'virbac mr squeakems',
    category: 'Commercial',
    image: 'https://img.youtube.com/vi/jfgbnFL8rSo/maxresdefault.jpg',
    videoId: 'jfgbnFL8rSo'
  },
  {
    id: 'csv11',
    title: 'the typewriter',
    category: 'Film',
    image: 'https://img.youtube.com/vi/TF08ScP2wi4/maxresdefault.jpg',
    videoId: 'TF08ScP2wi4'
  },
  {
    id: 'csv12',
    title: 'soul man',
    category: 'Film',
    image: 'https://img.youtube.com/vi/clWlvoAxct0/maxresdefault.jpg',
    videoId: 'clWlvoAxct0'
  },
  {
    id: 'csv13',
    title: 'the brothers brothers',
    category: 'Film',
    image: 'https://img.youtube.com/vi/U8Y5Tz4_noE/maxresdefault.jpg',
    videoId: 'U8Y5Tz4_noE'
  },
  {
    id: 'csv14',
    title: 'in a bad way',
    category: 'Film',
    image: 'https://img.youtube.com/vi/Xxxdd86i7Xo/maxresdefault.jpg',
    videoId: 'Xxxdd86i7Xo'
  },
  {
    id: 'csv15',
    title: 'muddy water',
    category: 'Film',
    image: 'https://img.youtube.com/vi/24A5qe5Z9YI/maxresdefault.jpg',
    videoId: '24A5qe5Z9YI'
  },
  {
    id: 'csv16',
    title: 'traveling soldier',
    category: 'Film',
    image: 'https://img.youtube.com/vi/-HquPPjfkKc/maxresdefault.jpg',
    videoId: '-HquPPjfkKc'
  },
  {
    id: 'csv17',
    title: 'without a roof',
    category: 'Film',
    image: 'https://img.youtube.com/vi/vy9-y7xUQbI/maxresdefault.jpg',
    videoId: 'vy9-y7xUQbI'
  },
  {
    id: 'csv18',
    title: 'a night out',
    category: 'Film',
    image: 'https://img.youtube.com/vi/s3HH8sTc-_8/maxresdefault.jpg',
    videoId: 's3HH8sTc-_8'
  },
  {
    id: 'csv19',
    title: 'life after death',
    category: 'Film',
    image: 'https://img.youtube.com/vi/s9Ek7pKVxD0/maxresdefault.jpg',
    videoId: 's9Ek7pKVxD0'
  },
  {
    id: 'csv20',
    title: 'cyrena wages: "vanity project" album release film',
    category: 'Documentary/Branded',
    image: 'https://img.youtube.com/vi/bPAHomKQijA/maxresdefault.jpg',
    videoId: 'bPAHomKQijA'
  },
  {
    id: 'csv21',
    title: 'the memphis masters: the bar-kays',
    category: 'Documentary/Branded',
    image: '/memphis masters barkays.webp',
    videoId: 'INUr6UD6UR0'
  },
  {
    id: 'csv22',
    title: 'rolling stone',
    category: 'Documentary/Branded',
    image: '/memphis masters rolling stone.webp',
    externalLink: 'https://www.rollingstone.com/music/music-news/big-star-memphis-masters-series-1021789/'
  },
  {
    id: 'csv23',
    title: 'the memphis masters: full series',
    category: 'Documentary/Branded',
    image: '/memphis masters full series.webp',
    externalLink: 'https://www.youtube.com/watch?v=u4NRkMWrlnc&list=PL79xK-VVZpsntp7H7m-p9vr48f6Yxiv7E'
  },
  {
    id: 'csv24',
    title: 'Roberta Finocchiaro "Put the Memphis On it" album release',
    category: 'Documentary/Branded',
    image: '/put the memphis on it.webp',
    videoId: 'qSN-wQlqj1s'
  },
  {
    id: 'csv25',
    title: 'MLB Fan Cave Submission (top 30 winner 2012)',
    category: 'Documentary/Branded',
    image: '/mlb fan cave submission.webp',
    videoId: 'TSwXZa6EDbI'
  },
  {
    id: 'csv26',
    title: 'the cotton board: forever cotton',
    category: 'Documentary/Branded',
    image: '/cotton board forever cotton.webp',
    externalLink: 'https://www.cottonboard.org/forever-cotton'
  },
  {
    id: 'csv27',
    title: 'your own land',
    category: 'Documentary/Branded',
    image: 'https://img.youtube.com/vi/9CTUAWI2Wtc/maxresdefault.jpg',
    videoId: '9CTUAWI2Wtc'
  },
  {
    id: 'csv28',
    title: 'daykisser: "it\'s just what we talked about"',
    category: 'Music Videos',
    image: '/daykisser ijwwta.webp',
    videoId: '0efLsK07TxA'
  },
  {
    id: 'csv29',
    title: 'teenage stepdad: "rhetoric"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/21POSFRtjY4/maxresdefault.jpg',
    videoId: '21POSFRtjY4'
  },
  {
    id: 'csv30',
    title: 'susurra: "my heart should be breaking"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/RETndZHvfZs/maxresdefault.jpg',
    videoId: 'RETndZHvfZs'
  },
  {
    id: 'csv31',
    title: 'brennan villines: "better than we\'ve ever been"',
    category: 'Music Videos',
    image: '/brennan villines better than we\'ve ever been.webp',
    videoId: 'v-70xxtygbA'
  },
  {
    id: 'csv32',
    title: 'marco pave: "dirty benz"',
    category: 'Music Videos',
    image: '/marco pave dirty benz.webp',
    videoId: 'sfsEnFcfGqQ'
  },
  {
    id: 'csv33',
    title: 'musician promo reel',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/KtlSk0LOTeY/maxresdefault.jpg',
    videoId: 'KtlSk0LOTeY'
  },
  {
    id: 'csv34',
    title: 'dave miller: nail can',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/3aRAiJ9Cc88/maxresdefault.jpg',
    videoId: '3aRAiJ9Cc88'
  },
  {
    id: 'csv35',
    title: 'marco pave: "gold grind"',
    category: 'Music Videos',
    image: '/marco pave gold grind.webp',
    videoId: 'OYzT1YvPpbs'
  },
  {
    id: 'csv36',
    title: 'the city champs: "luna 68"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/Jl8iOcCepao/maxresdefault.jpg',
    videoId: 'Jl8iOcCepao'
  },
  {
    id: 'csv37',
    title: 'joe restivo: "starlight motel"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/c7i_BYe45TE/maxresdefault.jpg',
    videoId: 'c7i_BYe45TE'
  },
  {
    id: 'csv38',
    title: 'susurra: "it\'s too late"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/sERw6H7qgUo/maxresdefault.jpg',
    videoId: 'sERw6H7qgUo'
  },
  {
    id: 'csv39',
    title: 'marco pave: "black tux"',
    category: 'Music Videos',
    image: '/marco pave black tux.webp',
    videoId: 'jyCqLS8CPHw'
  },
  {
    id: 'csv40',
    title: 'myla smith: "can\'t keep me down"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/MoZooQPe_4o/maxresdefault.jpg',
    videoId: 'MoZooQPe_4o'
  },
  {
    id: 'csv41',
    title: 'pat24seven: "all i know"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/gTixnOwRnlA/maxresdefault.jpg',
    videoId: 'gTixnOwRnlA'
  },
  {
    id: 'csv42',
    title: 'bryan hayes: "i wanna run"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/zaRIySqM-9A/maxresdefault.jpg',
    videoId: 'zaRIySqM-9A'
  },
  {
    id: 'csv43',
    title: 'chris milam: "kids these days"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/tfgdfz35kB4/maxresdefault.jpg',
    videoId: 'tfgdfz35kB4'
  },
  {
    id: 'csv44',
    title: 'the barnes brothers: "i\'m trying to go home"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/bgmGQCK8bFE/maxresdefault.jpg',
    videoId: 'bgmGQCK8bFE'
  },
  {
    id: 'csv45',
    title: 'frenchie!: "renegades"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/ouxE5tlbYNs/maxresdefault.jpg',
    videoId: 'ouxE5tlbYNs'
  },
  {
    id: 'csv46',
    title: 'vending machine: "white squared potato"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/7mjj_tCcydY/maxresdefault.jpg',
    videoId: '7mjj_tCcydY'
  },
  {
    id: 'csv47',
    title: 'brennan villines: "free"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/rxFEL0yeJ-I/maxresdefault.jpg',
    videoId: 'rxFEL0yeJ-I'
  },
  {
    id: 'csv48',
    title: 'brennan villines: "self control"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/vSE7lknb8Wk/maxresdefault.jpg',
    videoId: 'vSE7lknb8Wk'
  },
  {
    id: 'csv49',
    title: 'jack bear: "not that i\'d ever hope"',
    category: 'Music Videos',
    image: 'https://img.youtube.com/vi/uMTPE7eSuUU/maxresdefault.jpg',
    videoId: 'uMTPE7eSuUU'
  }
];

export const categories = ['Commercial', 'Documentary/Branded', 'Music Videos', 'Film'] as const;
