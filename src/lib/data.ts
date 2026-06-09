import { Product } from '../types';

export const CATEGORIES = [
  "Educational",
  "Action Figures",
  "Board Games",
  "Remote Control",
  "Hot Wheels",
  "Soft Toys",
  "Outdoor",
  "Baby Toys"
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Lego City Police Station',
    description: 'Awesome LEGO City Police Station playset for kids who love action and adventure. Includes a police station, police car, and multiple minifigures.',
    price: 4999,
    originalPrice: 5999,
    category: 'Educational',
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 12,
    ageRecommendation: '6+ Years',
    brand: 'LEGO',
    features: ['Develops fine motor skills', 'Encourages role play'],
    specifications: { Dimensions: '35x25x10 cm', Material: 'High quality plastic' },
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 156
  },
  {
    id: 'p2',
    title: 'Hot Wheels 20 Car Pack',
    description: 'A massive 20-car pack from Hot Wheels featuring assorted sports cars, muscle cars, and fantasy vehicles. Perfect for jump-starting a collection.',
    price: 1899,
    category: 'Hot Wheels',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 25,
    ageRecommendation: '3+ Years',
    brand: 'Hot Wheels',
    features: ['Die-cast metal cars', '1:64 scale'],
    specifications: { Scale: '1:64', Material: 'Diecast' },
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 203
  },
  {
    id: 'p3',
    title: 'Remote Control Off-Road Big Tyre Jeep',
    description: 'Powerful 4x4 remote control jeep that climbs rocks and drives through rough terrain easily. 2.4GHz frequency remote included.',
    price: 2499,
    originalPrice: 3500,
    category: 'Remote Control',
    images: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 8,
    ageRecommendation: '8+ Years',
    brand: 'ToyZ',
    features: ['Rechargeable battery', 'Shock absorbers', 'All-terrain capability'],
    specifications: { Range: '50 meters', 'Battery Time': '30 mins' },
    isNewArrival: true,
    rating: 4.5,
    reviewsCount: 45
  },
  {
    id: 'p4',
    title: 'Giant Teddy Bear - 3 Feet',
    description: 'Super soft, 3 feet tall teddy bear perfect for gifting on birthdays or special occasions.',
    price: 1299,
    category: 'Soft Toys',
    images: [
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 30,
    ageRecommendation: 'All Ages',
    brand: 'CuddleMe',
    features: ['Non-toxic material', 'Machine washable cover'],
    specifications: { Height: '3 Feet', Washable: 'Yes' },
    rating: 4.7,
    reviewsCount: 112
  },
  {
    id: 'p5',
    title: 'Monopoly Classic Board Game',
    description: 'The fast-dealing property trading game. Buy, sell, and dream your way to riches.',
    price: 1099,
    category: 'Board Games',
    images: [
      'https://loremflickr.com/cache/resized/65535_54536290387_5e782215b3_h_800_800_nofilter.jpg'
    ],
    stock: 4,
    ageRecommendation: '8+ Years',
    brand: 'Hasbro',
    features: ['Family game', 'Teaches financial logic'],
    specifications: { Players: '2-6', 'Play Time': '1-3 hours' },
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 340
  },
  {
    id: 'p6',
    title: 'Avengers Iron Man Action Figure',
    description: 'Detailed 12-inch Iron Man action figure with repulsor blast accessories.',
    price: 899,
    category: 'Action Figures',
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 20,
    ageRecommendation: '4+ Years',
    brand: 'Marvel',
    features: ['Articulated joints', 'Movie accurate details'],
    specifications: { Size: '12 inch' },
    isNewArrival: true,
    rating: 4.6,
    reviewsCount: 89
  },
  {
    id: 'p7',
    title: 'Outdoor Playhouse Tent',
    description: 'Spacious and colorful playhouse tent for outdoor fun. Easy to set up and fold.',
    price: 3499,
    category: 'Outdoor',
    images: [
      'https://loremflickr.com/cache/resized/65535_53832312193_e8696c7615_h_800_800_nofilter.jpg'
    ],
    stock: 10,
    ageRecommendation: '3+ Years',
    brand: 'PlayKids',
    features: ['Water-resistant', 'UV protection', 'Spacious interior'],
    specifications: { Dimensions: '120x120x150 cm' },
    isNewArrival: true,
    rating: 4.7,
    reviewsCount: 42
  },
  {
    id: 'p8',
    title: 'Kids Outdoor Trampoline',
    description: 'Safe and durable trampoline with enclosure net. Great for active outdoor play.',
    price: 8999,
    originalPrice: 10500,
    category: 'Outdoor',
    images: [
      'https://loremflickr.com/cache/resized/4058_4224084469_9086f30bde_h_800_800_nofilter.jpg'
    ],
    stock: 5,
    ageRecommendation: '6+ Years',
    brand: 'JumpStar',
    features: ['Safety net enclosure', 'Rust-resistant frame', 'High bounce'],
    specifications: { Diameter: '6 Feet', Capacity: '100 kg' },
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 215
  },
  {
    id: 'p9',
    title: 'Giant Outdoor Water Slide',
    description: 'Massive inflatable water slide for the backyard. Includes continuous blower and water sprayer.',
    price: 15000,
    category: 'Outdoor',
    images: [
      'https://loremflickr.com/cache/resized/65535_54194309619_5034a0147e_h_800_800_nofilter.jpg'
    ],
    stock: 2,
    ageRecommendation: '5-12 Years',
    brand: 'SplashFun',
    features: ['Heavy-duty material', 'Climbing wall', 'Splash pool'],
    specifications: { Dimensions: '400x300x250 cm' },
    rating: 4.8,
    reviewsCount: 76
  },
  {
    id: 'p10',
    title: 'Adjustable Kids Basketball Hoop',
    description: 'Grow-with-me basketball hoop, adjustable from 4 to 6 feet high.',
    price: 4999,
    category: 'Outdoor',
    images: [
      'https://loremflickr.com/cache/resized/65535_54092143214_83dcc75568_h_800_800_nofilter.jpg'
    ],
    stock: 12,
    ageRecommendation: '3-8 Years',
    brand: 'SportyTots',
    features: ['Adjustable height', 'Oversized rim', 'Weighted base'],
    specifications: { Height: '4-6 Feet' },
    rating: 4.5,
    reviewsCount: 134
  },
  {
    id: 'p11',
    title: 'Wooden Baby Stacking Rings',
    description: 'Classic wooden stacking rings toy that helps babies develop hand-eye coordination.',
    price: 699,
    category: 'Baby Toys',
    images: [
      'https://loremflickr.com/cache/resized/65535_47981005317_c57469ff02_h_800_800_nofilter.jpg'
    ],
    stock: 40,
    ageRecommendation: '12+ Months',
    brand: 'EcoPlay',
    features: ['Non-toxic paint', 'Smooth edges', 'Vibrant colors'],
    specifications: { Material: 'Wood', Pieces: '8' },
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 320
  },
  {
    id: 'p12',
    title: 'Soft Activity Baby Play Gym',
    description: 'Interactive play gym with hanging toys, mirrors, and soft padding for tummy time.',
    price: 2499,
    category: 'Baby Toys',
    images: [
      'https://loremflickr.com/cache/resized/3271_5709430499_79c81ac11e_h_800_800_nofilter.jpg'
    ],
    stock: 15,
    ageRecommendation: '0+ Months',
    brand: 'BabyCare',
    features: ['Machine washable', 'Sensory toys', 'Removable arches'],
    specifications: { Dimensions: '80x80 cm' },
    rating: 4.9,
    reviewsCount: 185
  },
  {
    id: 'p13',
    title: 'Musical Baby Rattle Set',
    description: 'Set of 4 colorful rattles with different sounds and textures to engage baby senses.',
    price: 899,
    category: 'Baby Toys',
    images: [
      'https://loremflickr.com/cache/resized/7778_28450810080_4fedad6d38_h_800_800_nofilter.jpg'
    ],
    stock: 25,
    ageRecommendation: '3+ Months',
    brand: 'TinyTots',
    features: ['BPA-free plastic', 'Easy to grasp', 'Textured surfaces'],
    specifications: { Material: 'Plastic', Pieces: '4' },
    isNewArrival: true,
    rating: 4.6,
    reviewsCount: 65
  },
  {
    id: 'p14',
    title: 'Baby Walker with Activity Center',
    description: 'Sturdy walker with a built-in activity center featuring buttons, lights, and sounds.',
    price: 3299,
    originalPrice: 3999,
    category: 'Baby Toys',
    images: [
      'https://loremflickr.com/cache/resized/5574_14278152535_2f79d53488_800_800_nofilter.jpg'
    ],
    stock: 8,
    ageRecommendation: '9+ Months',
    brand: 'StepFirst',
    features: ['Speed control wheels', 'Musical electronic tray', 'Foldable'],
    specifications: { Batteries: '2x AA needed' },
    rating: 4.7,
    reviewsCount: 110
  },
  {
    id: 'p15',
    title: 'Wooden Peg Puzzle Set',
    description: 'Set of 3 wooden peg puzzles featuring animals, vehicles, and numbers to help develop cognitive skills.',
    price: 1599,
    category: 'Educational',
    images: [
      'https://loremflickr.com/cache/resized/65535_49275930606_62d2812e9d_h_800_800_nofilter.jpg'
    ],
    stock: 25,
    ageRecommendation: '2+ Years',
    brand: 'Learn&Play',
    features: ['Non-toxic paints', 'Easy-grip pegs', 'Durable wood'],
    specifications: { Material: 'Wood', Pieces: '3 Puzzles' },
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 150
  },
  {
    id: 'p16',
    title: 'Kids Science Lab Kit',
    description: 'Complete science kit with 50+ experiments including volcano eruptions and crystal growing.',
    price: 2999,
    originalPrice: 3500,
    category: 'Educational',
    images: [
      'https://loremflickr.com/cache/resized/65535_49914571607_d539cec2ad_h_800_800_nofilter.jpg'
    ],
    stock: 18,
    ageRecommendation: '8+ Years',
    brand: 'STEM Explorers',
    features: ['Detailed manual', 'Safety goggles included', 'Reusable tools'],
    specifications: { Experiments: '50+' },
    isNewArrival: true,
    rating: 4.7,
    reviewsCount: 89
  },
  {
    id: 'p17',
    title: 'Magnetic Building Blocks Set',
    description: '100-piece magnetic tiles set for open-ended 3D building and creative play.',
    price: 4500,
    category: 'Educational',
    images: [
      'https://loremflickr.com/cache/resized/65535_48344991492_6302a7f9d3_b_800_800_nofilter.jpg'
    ],
    stock: 22,
    ageRecommendation: '3+ Years',
    brand: 'MagnaBuild',
    features: ['Strong magnets', 'Vibrant colors', 'Storage bag'],
    specifications: { Pieces: '100' },
    rating: 4.9,
    reviewsCount: 420
  },
  {
    id: 'p18',
    title: 'Classic Chess Set Portable',
    description: 'High-quality foldable wooden chess set with magnetic pieces, perfect for travel.',
    price: 1899,
    category: 'Board Games',
    images: [
      'https://loremflickr.com/cache/resized/65535_53014810596_0d6b30f8c5_h_800_800_nofilter.jpg'
    ],
    stock: 35,
    ageRecommendation: '6+ Years',
    brand: 'MindGames',
    features: ['Magnetic board', 'Handcrafted pieces', 'Foldable design'],
    specifications: { Dimensions: '30x30 cm unfolded', Material: 'Wood' },
    rating: 4.6,
    reviewsCount: 205
  },
  {
    id: 'p19',
    title: 'Tabletop Foosball Game',
    description: 'Compact foosball table for fast-paced action. Great for family game nights.',
    price: 2499,
    category: 'Board Games',
    images: [
      'https://loremflickr.com/cache/resized/65535_53134790557_be63022507_h_800_800_nofilter.jpg'
    ],
    stock: 12,
    ageRecommendation: '8+ Years',
    brand: 'SportyTots',
    features: ['Smooth spinning rods', 'Score trackers', 'Durable build'],
    specifications: { Dimensions: '50x30x10 cm' },
    isNewArrival: true,
    rating: 4.5,
    reviewsCount: 78
  },
  {
    id: 'p20',
    title: 'Premium Playing Cards Set',
    description: 'Twin pack of premium playing cards with elegant designs, suitable for all card games.',
    price: 499,
    category: 'Board Games',
    images: [
      'https://loremflickr.com/cache/resized/65535_52246472220_1f9a5dca15_h_800_800_nofilter.jpg'
    ],
    stock: 100,
    ageRecommendation: 'All Ages',
    brand: 'CardBros',
    features: ['Plastic coated', 'Durable', 'Classic design'],
    specifications: { Decks: '2' },
    rating: 4.8,
    reviewsCount: 312
  },
  {
    id: 'p21',
    title: 'Super Hero Action Figure 5-Pack',
    description: 'Set of 5 poseable superhero action figures featuring iconic characters.',
    price: 3999,
    originalPrice: 4500,
    category: 'Action Figures',
    images: [
      'https://loremflickr.com/cache/resized/65535_50125533327_b59b0958a0_h_800_800_nofilter.jpg'
    ],
    stock: 15,
    ageRecommendation: '4+ Years',
    brand: 'HeroUniverse',
    features: ['Multiple points of articulation', 'Detailed accessories', 'Collector packaging'],
    specifications: { Size: '6 inch each' },
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 198
  },
  {
    id: 'p22',
    title: 'T-Rex Dinosaur Toy Interactive Figure',
    description: 'Large T-Rex figure with realistic walking action, roaring sounds, and light-up eyes.',
    price: 2199,
    category: 'Action Figures',
    images: [
      'https://loremflickr.com/cache/resized/65535_54516544252_351149651c_h_800_800_nofilter.jpg'
    ],
    stock: 20,
    ageRecommendation: '3+ Years',
    brand: 'DinoWorld',
    features: ['Roaring sounds', 'Walking action', 'Sturdy plastic'],
    specifications: { Batteries: '3x AA included' },
    rating: 4.6,
    reviewsCount: 145
  },
  {
    id: 'p23',
    title: 'Ninja Warrior Deluxe Figure',
    description: 'Highly detailed ninja action figure with interchangeable weapons and stealth suit.',
    price: 1299,
    category: 'Action Figures',
    images: [
      'https://loremflickr.com/cache/resized/65535_53831095948_6891568b90_b_800_800_nofilter.jpg'
    ],
    stock: 30,
    ageRecommendation: '5+ Years',
    brand: 'ShadowStrike',
    features: ['Swords and stars included', 'Super posable'],
    specifications: { Size: '8 inch' },
    isNewArrival: true,
    rating: 4.7,
    reviewsCount: 67
  },
  {
    id: 'p24',
    title: 'RC Stunt Car 360 Flips',
    description: 'Double-sided remote control car capable of 360-degree flips and extreme stunts.',
    price: 1599,
    originalPrice: 1999,
    category: 'Remote Control',
    images: [
      'https://loremflickr.com/cache/resized/1475_26687742152_c79a83f811_h_800_800_nofilter.jpg'
    ],
    stock: 25,
    ageRecommendation: '6+ Years',
    brand: 'StuntMaster',
    features: ['Double-sided driving', 'Anti-crash tires', 'LED lights'],
    specifications: { MaxSpeed: '12 km/h', 'Play Time': '20 mins' },
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 230
  },
  {
    id: 'p25',
    title: 'Quadcopter Drone with Camera',
    description: 'Beginner-friendly drone with a 720p HD camera, altitude hold, and headless mode.',
    price: 4500,
    category: 'Remote Control',
    images: [
      'https://loremflickr.com/cache/resized/3933_15466426922_18c1db0934_h_800_800_nofilter.jpg'
    ],
    stock: 12,
    ageRecommendation: '14+ Years',
    brand: 'SkyRider',
    features: ['720p Camera', 'One-key takeoff/landing', 'App control'],
    specifications: { Range: '100 meters', 'Flight Time': '10 mins' },
    rating: 4.4,
    reviewsCount: 112
  },
  {
    id: 'p26',
    title: 'High Speed RC Rock Crawler Truck',
    description: '1:14 scale off-road monster truck with independent suspension system.',
    price: 2999,
    category: 'Remote Control',
    images: [
      'https://loremflickr.com/cache/resized/65535_52341232607_4e7ede420b_h_800_800_nofilter.jpg'
    ],
    stock: 18,
    ageRecommendation: '8+ Years',
    brand: 'DirtPro',
    features: ['4WD capability', 'Alloy body', 'Shock absorbers'],
    specifications: { Scale: '1:14', 'Battery Time': '25 mins' },
    isNewArrival: true,
    rating: 4.7,
    reviewsCount: 95
  },
  {
    id: 'p27',
    title: 'Hot Wheels Color Shifters',
    description: 'Watch cars change color magically when dunked in warm or cold water.',
    price: 499,
    category: 'Hot Wheels',
    images: [
      'https://loremflickr.com/cache/resized/65535_53901471282_db4aa149a5_h_800_800_nofilter.jpg'
    ],
    stock: 45,
    ageRecommendation: '3+ Years',
    brand: 'Hot Wheels',
    features: ['Color changing action', 'Compatible with HW tracks'],
    specifications: { Scale: '1:64' },
    rating: 4.8,
    reviewsCount: 310
  },
  {
    id: 'p28',
    title: 'Classic Die-cast Race Cars Set',
    description: 'A 5-pack collection of classic rally and race cars.',
    price: 999,
    originalPrice: 1200,
    category: 'Hot Wheels',
    images: [
      'https://loremflickr.com/cache/resized/4588_38543664924_719d4617a6_h_800_800_nofilter.jpg'
    ],
    stock: 30,
    ageRecommendation: '3+ Years',
    brand: 'Hot Wheels',
    features: ['Exclusive decos', 'Sturdy die-cast metal'],
    specifications: { PackSize: '5 Cars' },
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 420
  },
  {
    id: 'p29',
    title: '1:64 Scale Sports Car Collection',
    description: 'Detailed replicas of famous modern sports and super cars.',
    price: 1199,
    category: 'Hot Wheels',
    images: [
      'https://loremflickr.com/cache/resized/65535_54358202389_07f1db7af6_b_800_800_nofilter.jpg'
    ],
    stock: 20,
    ageRecommendation: '3+ Years',
    brand: 'Hot Wheels',
    features: ['Authentic designs', 'Premium finish'],
    specifications: { Scale: '1:64' },
    isNewArrival: true,
    rating: 4.7,
    reviewsCount: 88
  },
  {
    id: 'p30',
    title: 'Cute Plush Bunny Toy',
    description: 'Adorable and huggable white plush bunny with floppy ears.',
    price: 899,
    category: 'Soft Toys',
    images: [
      'https://loremflickr.com/cache/resized/65535_52179655424_2da8e8fd3b_h_800_800_nofilter.jpg'
    ],
    stock: 35,
    ageRecommendation: '0+ Months',
    brand: 'SnuggleBugs',
    features: ['Extremely soft', 'Embroidered eyes for safety'],
    specifications: { Height: '15 inches' },
    rating: 4.9,
    reviewsCount: 260
  },
  {
    id: 'p31',
    title: 'Large Brown Stuffed Bear',
    description: 'A classic 2-foot tall brown teddy bear with a ribbon bow.',
    price: 1599,
    originalPrice: 1999,
    category: 'Soft Toys',
    images: [
      'https://loremflickr.com/cache/resized/65535_54454981469_56df208e95_h_800_800_nofilter.jpg'
    ],
    stock: 15,
    ageRecommendation: 'All Ages',
    brand: 'CuddleMe',
    features: ['Fluffy filler', 'Safe materials'],
    specifications: { Height: '24 inches' },
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 175
  },
  {
    id: 'p32',
    title: 'Snuggly Animal Friends Multipack',
    description: 'Set of 3 small stuffed animals: a puppy, a kitten, and a chick.',
    price: 1299,
    category: 'Soft Toys',
    images: [
      'https://loremflickr.com/cache/resized/65535_52659336215_481c703027_h_800_800_nofilter.jpg'
    ],
    stock: 22,
    ageRecommendation: '0+ Months',
    brand: 'SnuggleBugs',
    features: ['Perfect for little hands', 'Machine washable'],
    specifications: { Pieces: '3 mini plushies' },
    isNewArrival: true,
    rating: 4.7,
    reviewsCount: 54
  }
];
