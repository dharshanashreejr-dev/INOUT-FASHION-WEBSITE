export type GoogleReview = {
  id: string;
  authorName: string;
  authorUrl: string;
  authorAvatar?: string;
  isLocalGuide: boolean;
  reviewCount: number;
  photoCount?: number;
  rating: number; // 1 to 5
  relativeTime: string;
  timestampDaysAgo: number; // for chronological sorting
  text: string;
  reactions?: { icon: string; count: number; label: string }[];
  tags: string[];
  helpfulCount: number;
  isNew?: boolean;
};

export const STORE_GOOGLE_METADATA = {
  name: 'IN OUT FASHION',
  address: 'Senguthapuram, 2nd cross, Karur, Tamil Nadu 639002, India',
  fullAddress: 'Sengunthapuram, 2nd Cross, Opp. Best Mobiles Upstairs, Karur, Tamil Nadu 639002',
  rating: 4.6,
  totalReviews: 18,
  googleMapsUrl: 'https://maps.google.com/?q=IN+OUT+FASHION+Senguthapuram+Karur',
  ratingDistribution: {
    5: 14,
    4: 4,
    3: 0,
    2: 0,
    1: 0
  }
};

export const googleReviews: GoogleReview[] = [
  {
    id: 'gr-1',
    authorName: 'Sanjay Sanjay',
    authorUrl: 'https://www.google.com/maps/contrib/116417692828439836148/reviews?hl=en-GB',
    isLocalGuide: false,
    reviewCount: 3,
    rating: 5,
    relativeTime: 'a week ago',
    timestampDaysAgo: 7,
    text: 'Good collection of trending clothes. Great fit and very reasonable price point in Karur.',
    tags: ['Recent', 'Quality'],
    helpfulCount: 4,
    isNew: true
  },
  {
    id: 'gr-2',
    authorName: 'R.Sakthi vel',
    authorUrl: 'https://www.google.com/maps/contrib/112088659827792726721/reviews?hl=en-GB',
    isLocalGuide: true,
    reviewCount: 1,
    photoCount: 23,
    rating: 5,
    relativeTime: 'a month ago',
    timestampDaysAgo: 30,
    text: 'Super collections and trending menswear available in Sengunthapuram. Good atmosphere and wide range of daily wear shirts and pants at genuine prices.',
    tags: ['Local Guide', 'With Photos'],
    helpfulCount: 5
  },
  {
    id: 'gr-3',
    authorName: 'Rahul Prasad',
    authorUrl: 'https://www.google.com/maps/contrib/101779808841207266714/reviews?hl=en-GB',
    isLocalGuide: false,
    reviewCount: 5,
    rating: 5,
    relativeTime: '4 months ago',
    timestampDaysAgo: 120,
    text: 'Great customer service and budget-friendly clothes. Worth visiting if you are looking for stylish casuals in Karur.',
    tags: ['Quality', 'Friendly Service'],
    helpfulCount: 3
  },
  {
    id: 'gr-4',
    authorName: 'R.Gunasundhari',
    authorUrl: 'https://www.google.com/maps/contrib/104483732137445866140/reviews?hl=en-IN',
    isLocalGuide: true,
    reviewCount: 12,
    rating: 5,
    relativeTime: '5 months ago',
    timestampDaysAgo: 150,
    text: 'Good collection of men clothing. Affordable prices and friendly customer support. Must try store in Karur.',
    tags: ['Local Guide', 'Friendly Service'],
    helpfulCount: 4
  },
  {
    id: 'gr-5',
    authorName: 'Naveenkrishnaa Sivakumar',
    authorUrl: 'https://www.google.com/maps/contrib/112158213759482680276/reviews?hl=en-IN',
    isLocalGuide: true,
    reviewCount: 22,
    photoCount: 3,
    rating: 5,
    relativeTime: '10 months ago',
    timestampDaysAgo: 300,
    text: 'Nice collections of shirts and t-shirts. Fitting is good and reasonable pricing. Prompt courier dispatch too.',
    tags: ['Local Guide', 'With Photos'],
    helpfulCount: 7
  },
  {
    id: 'gr-6',
    authorName: 'Balaji M',
    authorUrl: 'https://www.google.com/maps/contrib/112950483122822391880/reviews?hl=en-IN',
    isLocalGuide: false,
    reviewCount: 3,
    photoCount: 4,
    rating: 5,
    relativeTime: '10 months ago',
    timestampDaysAgo: 300,
    text: 'Very good designs and new stock every week. Value for money purchase in Karur.',
    tags: ['With Photos', 'Quality'],
    helpfulCount: 4
  },
  {
    id: 'gr-7',
    authorName: 'Sagadevan Ak',
    authorUrl: 'https://www.google.com/maps/contrib/101102673346406787675/reviews?hl=en-IN',
    isLocalGuide: false,
    reviewCount: 6,
    rating: 4,
    relativeTime: 'a year ago',
    timestampDaysAgo: 365,
    text: 'Trendy men wear available. Good variety of jeans and shirts at moderate price point.',
    tags: ['Value'],
    helpfulCount: 3
  },
  {
    id: 'gr-8',
    authorName: 'AJITH KUMAR',
    authorUrl: 'https://www.google.com/maps/contrib/111765473779206189064/reviews?hl=en-IN',
    isLocalGuide: false,
    reviewCount: 2,
    rating: 5,
    relativeTime: 'a year ago',
    timestampDaysAgo: 370,
    text: 'Best shop for men cloths in Karur Senguthapuram. Quality is very nice and durable.',
    tags: ['Quality'],
    helpfulCount: 5
  },
  {
    id: 'gr-10',
    authorName: 'Karthik dszzKumar',
    authorUrl: 'https://www.google.com/maps/contrib/105130237263985503531/reviews?hl=en-GB',
    isLocalGuide: false,
    reviewCount: 15,
    rating: 4,
    relativeTime: 'a year ago',
    timestampDaysAgo: 400,
    text: 'Decent collection of clothes for everyday use. Competitive rates and good fabric.',
    tags: ['Value'],
    helpfulCount: 3
  },
  {
    id: 'gr-11',
    authorName: 'Santhi Ganesan112',
    authorUrl: 'https://www.google.com/maps/contrib/105264766429859941170/reviews?hl=en-GB',
    isLocalGuide: false,
    reviewCount: 4,
    rating: 4,
    relativeTime: '2 years ago',
    timestampDaysAgo: 730,
    text: 'The clothes are good for the price they give to us. Wide range of designs and comfortable stitching.',
    tags: ['Price', 'Value'],
    helpfulCount: 9
  },
  {
    id: 'gr-12',
    authorName: 'MR BROTHERS',
    authorUrl: 'https://www.google.com/maps/contrib/115405114760506141174/reviews?hl=en-GB',
    isLocalGuide: false,
    reviewCount: 1,
    rating: 5,
    relativeTime: '2 years ago',
    timestampDaysAgo: 730,
    text: 'Good quality and owner was very friendly with all coustomers',
    tags: ['friendly owner', 'Quality'],
    helpfulCount: 8
  },
  {
    id: 'gr-13',
    authorName: 'Ram Kumar',
    authorUrl: 'https://www.google.com/maps/contrib/114118526974548988180/reviews?hl=en-GB',
    isLocalGuide: false,
    reviewCount: 1,
    rating: 5,
    relativeTime: '2 years ago',
    timestampDaysAgo: 730,
    text: 'Very low price with good quality.....worth it...💥',
    reactions: [{ icon: '❤️', count: 1, label: 'Love' }],
    tags: ['Quality', 'Low Price'],
    helpfulCount: 7
  },
  {
    id: 'gr-14',
    authorName: 'Govindharaj Malaiyan',
    authorUrl: 'https://www.google.com/maps/contrib/107460908997114045637/reviews?hl=en-GB',
    isLocalGuide: true,
    reviewCount: 6,
    photoCount: 97,
    rating: 5,
    relativeTime: '2 years ago',
    timestampDaysAgo: 730,
    text: 'best quality',
    reactions: [{ icon: '❤️', count: 1, label: 'Love' }],
    tags: ['Local Guide', 'With Photos', 'Quality'],
    helpfulCount: 11
  },
  {
    id: 'gr-15',
    authorName: 'Vignesh Vicky',
    authorUrl: 'https://www.google.com/maps/contrib/106525070615024688836/reviews?hl=en-IN',
    isLocalGuide: false,
    reviewCount: 4,
    photoCount: 3,
    rating: 5,
    relativeTime: '2 years ago',
    timestampDaysAgo: 740,
    text: 'Good customer handling and fast delivery. Good range of denim jeans and casual shirts.',
    tags: ['With Photos', 'Friendly Service'],
    helpfulCount: 4
  },
  {
    id: 'gr-16',
    authorName: 'Aravinthsamy Ece',
    authorUrl: 'https://www.google.com/maps/contrib/118189836045641373010/reviews?hl=en-IN',
    isLocalGuide: true,
    reviewCount: 21,
    photoCount: 83,
    rating: 5,
    relativeTime: '4 years ago',
    timestampDaysAgo: 1460,
    text: 'Great shop located upstairs in Sengunthapuram Karur. Lots of variety in trendy shirts, T-shirts and daily wear.',
    tags: ['Local Guide', 'With Photos'],
    helpfulCount: 14
  },
  {
    id: 'gr-17',
    authorName: 'Srinivasan',
    authorUrl: 'https://www.google.com/maps/contrib/103674764735443038475/reviews?hl=en-GB',
    isLocalGuide: true,
    reviewCount: 10,
    photoCount: 10,
    rating: 5,
    relativeTime: '5 years ago',
    timestampDaysAgo: 1825,
    text: 'Dresses are trendy and very low cost. Worth for the money. Unique designs are available. Very friendly owner.',
    reactions: [{ icon: '🙏', count: 2, label: 'Namaste' }],
    tags: ['friendly owner', 'Local Guide', 'With Photos', 'Value'],
    helpfulCount: 18
  },
  {
    id: 'gr-18',
    authorName: 'Pradeesh Palani',
    authorUrl: 'https://www.google.com/maps/contrib/112755493791281588561/reviews?hl=en-IN',
    isLocalGuide: false,
    reviewCount: 4,
    photoCount: 1,
    rating: 5,
    relativeTime: '5 years ago',
    timestampDaysAgo: 1830,
    text: 'Good atmosphere and very polite service. Nice designs at reasonable pricing.',
    tags: ['With Photos', 'Friendly Service'],
    helpfulCount: 6
  }
];
