import review1 from '../assets/reviews/review-1.png';
import review2 from '../assets/reviews/review-2.png';
import review3 from '../assets/reviews/review-3.png';
import review4 from '../assets/reviews/review-4.png';
import review5 from '../assets/reviews/review-5.png';
import review6 from '../assets/reviews/review-6.png';
import order1 from '../assets/reviews/order-1.png';
import order2 from '../assets/reviews/order-2.png';
import order3 from '../assets/reviews/order-3.png';
import order4 from '../assets/reviews/order-4.png';

export type ReviewShot = {
  id: string;
  image: string;
  caption: string;
};

export const customerReviews: ReviewShot[] = [
  { id: 'r1', image: review1, caption: '"Nice quality \uD83D\uDC4D" \u2014 WhatsApp customer feedback' },
  { id: 'r2', image: review3, caption: '"Bro track good quality \uD83D\uDC4C" \u2014 Happy customer' },
  { id: 'r3', image: review4, caption: '"Received bro. Super quality \uD83D\uDC4D\uD83D\uDC4D"' },
  { id: 'r4', image: review5, caption: '"Super fit bro...." \u2014 fit check from a customer' },
  { id: 'r5', image: review6, caption: '"Bro courier received \u2764\uFE0F" \u2014 Customer happy' },
  { id: 'r6', image: review2, caption: 'Daily courier bookings out to customers across Tamil Nadu' }
];

export const recentOrders: ReviewShot[] = [
  { id: 'o1', image: order1, caption: 'Monday dispatch \u2014 packed and ready to ship' },
  { id: 'o2', image: order2, caption: "Today's order \u2014 M. Rajendran, Theni" },
  { id: 'o3', image: order3, caption: "Today's order \u2014 Tirupathur" },
  { id: 'o4', image: order4, caption: "Today's order \u2014 Karur" }
];
