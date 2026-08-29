export type Product = {
  id: string;
  name: string;
  category: 'Shirts' | 'T-Shirts' | 'Trousers' | 'Jeans' | 'Ethnic';
  price: number;
  sizes: string[];
  color: string;
  image: string;
  description: string;
  trending?: boolean;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Charcoal Slim Fit Shirt',
    category: 'Shirts',
    price: 799,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    color: 'Charcoal',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800',
    description: 'Premium cotton-blend slim fit shirt, wholesale-grade stitching, everyday formal wear.',
    trending: true
  },
  {
    id: 'p2',
    name: 'Mustard Textured Casual Shirt',
    category: 'Shirts',
    price: 699,
    sizes: ['M', 'L', 'XL'],
    color: 'Mustard',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800',
    description: 'Textured weave casual shirt with a rich mustard tone, half-sleeve and full-sleeve available.',
    trending: true
  },
  {
    id: 'p3',
    name: 'Classic Round Neck Tee',
    category: 'T-Shirts',
    price: 349,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    description: '220 GSM cotton round neck tee, bulk-order favourite, fade-resistant print base.'
  },
  {
    id: 'p4',
    name: 'Rust Polo Tee',
    category: 'T-Shirts',
    price: 449,
    sizes: ['M', 'L', 'XL'],
    color: 'Rust',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800',
    description: 'Pique cotton polo, ribbed collar, smart-casual pick for everyday retail racks.'
  },
  {
    id: 'p5',
    name: 'Formal Straight Fit Trouser',
    category: 'Trousers',
    price: 899,
    sizes: ['30', '32', '34', '36', '38'],
    color: 'Grey',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800',
    description: 'Straight fit formal trouser, wrinkle-resistant fabric, office and festive wear.'
  },
  {
    id: 'p6',
    name: 'Slim Taper Denim Jeans',
    category: 'Jeans',
    price: 1099,
    sizes: ['30', '32', '34', '36'],
    color: 'Indigo Blue',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800',
    description: 'Stretch denim, slim taper cut, stone-wash finish, all-day comfort.',
    trending: true
  },
  {
    id: 'p7',
    name: 'Distressed Straight Jeans',
    category: 'Jeans',
    price: 1199,
    sizes: ['30', '32', '34', '36', '38'],
    color: 'Light Blue',
    image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800',
    description: 'Straight fit with light distress detailing, heavyweight denim built for retail turnover.'
  },
  {
    id: 'p8',
    name: 'Ivory Kurta Set',
    category: 'Ethnic',
    price: 1299,
    sizes: ['M', 'L', 'XL', 'XXL'],
    color: 'Ivory',
    image: 'https://images.unsplash.com/photo-1610189844460-856823f77d3a?q=80&w=800',
    description: 'Festive kurta-pyjama set, breathable cotton, in demand during wedding season.',
    trending: true
  }
];

export const categories = ['All', 'Shirts', 'T-Shirts', 'Trousers', 'Jeans', 'Ethnic'] as const;
