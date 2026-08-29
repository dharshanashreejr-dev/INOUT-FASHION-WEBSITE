import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, MessageCircle, Star, Sparkles, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import MaskedHeading from '../components/MaskedHeading';
import { useTheme } from '../context/ThemeContext';
import DecryptedText from '../components/DecryptedText';
import SilkCurtain from '../components/SilkCurtain';
import DepthCarousel from '../components/DepthCarousel';
import ScrollStack from '../components/ScrollStack';
import GlassFlow from '../components/GlassFlow';
import StaggeredText from '../components/StaggeredText';
import ShotStrip from '../components/ShotStrip';
import ReviewForm from '../components/ReviewForm';
import GoogleReviewsHub from '../components/GoogleReviewsHub';
import InstagramReelSection from '../components/InstagramReelSection';
import StyleStudioBundler from '../components/StyleStudioBundler';
import DeliveryEstimator from '../components/DeliveryEstimator';
import StoreLocator from '../components/StoreLocator';
import FloatingReelStory from '../components/FloatingReelStory';
import { products } from '../data/products';
import { customerReviews, recentOrders } from '../data/reviews';
import logo from '../assets/logo.png';

const carouselProducts = products.slice(0, 6);
const carouselItems = carouselProducts.map((p) => ({
  image: p.image,
  alt: p.name
}));

const stackCards = [
  {
    id: 's1',
    title: 'Wholesale, done right',
    description:
      'IN OUT FASHION has been supplying trendy men’s wear across Tamil Nadu at wholesale and retail rates — trusted for consistent quality, verified fit measurements, and fast courier turnaround.',
    image: products[0].image
  },
  {
    id: 's2',
    title: 'Trend-first sourcing',
    description:
      'Fresh shirt, stretch denim, and ethnic drops every season, priced for retailers who need to move stock fast without compromising on fabric grade or finish.',
    image: products[5].image
  },
  {
    id: 's3',
    title: 'Karur, to your doorstep',
    description:
      'Based in Sengunthapuram, Karur — serving retail partners, courier consignments, and walk-in customers alike, seven days a week.',
    image: products[7].image
  }
];

export default function Landing() {
  const { theme } = useTheme();
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const activeCarouselProduct = carouselProducts[activeCarouselIndex];

  return (
    <div className="bg-ink text-bone selection:bg-gold selection:text-onGold relative">
      {/* Hero Section */}
      <section className="hero-fixed-dark relative h-[92vh] flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0">
          <SilkCurtain />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="hero-pill inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={13} className="text-amber-400" />
            <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold">
              Karur, Tamil Nadu • Direct Sourcing Hub
            </span>
          </div>

          {theme === 'light' ? (
            <h1 className="font-display mb-6 hero-heading-light">
              Trendy Men&apos;s Fashion, Wholesale Prices
            </h1>
          ) : (
            <div className="masked-heading-wrap">
              <MaskedHeading
                text="Trendy Men's Fashion, Wholesale Prices"
                src={products[2].image}
                tag="h1"
                fillScale={1.3}
                reveal="wipe"
                trigger="mount"
                textScale={0.078}
                weight={800}
                className="font-display mb-6"
              />
            </div>
          )}

          <p className="hero-copy text-white text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed font-semibold">
            <DecryptedText
              text="Shirts. Stretch Denim. Ethnic wear. Delivered across Tamil Nadu with guaranteed quality."
              animateOn="view"
              sequential
              speed={18}
              className="hero-copy-decrypted"
              encryptedClassName="hero-copy-decrypted-pending"
            />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-gold hover:bg-goldDeep text-onGold font-bold px-8 py-3.5 rounded-full transition-all uppercase text-xs tracking-wider shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
            >
              Shop Collection <ArrowRight size={14} />
            </Link>
            <Link
              to="/track-order"
              className="w-full sm:w-auto bg-white/95 hover:bg-white border border-white/10 text-onGold font-bold px-8 py-3.5 rounded-full transition-colors uppercase text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Truck size={14} className="text-goldDeep" /> Track Order
            </Link>
            <a
              href="tel:+918300721916"
              className="hero-copy w-full sm:w-auto border border-amber-400/40 text-white font-bold hover:border-amber-400 hover:bg-amber-400/10 px-8 py-3.5 rounded-full transition-colors uppercase text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone size={14} className="text-amber-400" /> Call Store
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="hero-copy mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white font-semibold">
            <div className="flex items-center gap-1.5">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span><strong>3.8★</strong> on Google (18 Reviews)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Truck size={14} className="text-amber-400" />
              <span>Fast Tamil Nadu Courier Dispatch</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Wholesale &amp; Retail Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* SWIPE (Trending Items) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Trending this week</p>
          <h2 className="font-display text-5xl text-bone tracking-wide">SWIPE!</h2>
          <p className="text-boneDim text-sm max-w-md mx-auto mt-2">
            Curated menswear staples engineered for Indian weather and everyday luxury.
          </p>
        </div>
        <div style={{ height: 420, position: 'relative' }}>
          <DepthCarousel
            items={carouselItems}
            cardWidth={220}
            cardHeight={300}
            depth={180}
            spread={70}
            tilt={20}
            perspective={1200}
            visibleCards={3}
            autoplay
            loop
            onChange={(index) => setActiveCarouselIndex(index)}
          />
        </div>
        {activeCarouselProduct && (
          <div className="text-center mt-6">
            <p className="font-display text-2xl text-bone tracking-wide">{activeCarouselProduct.name}</p>
            <p className="text-gold text-sm">{'\u20B9'}{activeCarouselProduct.price}</p>
          </div>
        )}
        <p className="text-center text-boneDim text-xs mt-4 uppercase tracking-widest">
          ↔ Drag or swipe to spin the rack
        </p>
      </section>

      {/* Featured Instagram Reel Spotlight Section */}
      <InstagramReelSection />

      {/* Style Studio & Outfit Bundler */}
      <StyleStudioBundler />

      {/* Why IN OUT FASHION (ScrollStack) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Why IN OUT FASHION</p>
          <h2 className="font-display text-5xl text-bone tracking-wide">Built on trust</h2>
        </div>
        <ScrollStack cards={stackCards} />
      </section>

      {/* Real Customers & Recent Orders Proof (GlassFlow) */}
      <section className="relative py-28 px-6 overflow-hidden">
        <GlassFlow />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Real customers, real orders</p>
            <StaggeredText
              as="h2"
              text="Happy Customers"
              className="font-display text-5xl text-bone tracking-wide"
            />
          </div>
          <ShotStrip items={customerReviews} />

          <div className="text-center mt-20 mb-10">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Packed &amp; dispatched</p>
            <StaggeredText
              as="h2"
              text="Orders Placed Every Day"
              className="font-display text-4xl text-bone tracking-wide"
            />
          </div>
          <ShotStrip items={recentOrders} />
        </div>
      </section>

      {/* Authentic Google Reviews & Interactive Hub */}
      <GoogleReviewsHub />

      {/* Express Delivery & District Checker */}
      <DeliveryEstimator />

      {/* Store Location & Karur Flagship Details */}
      <StoreLocator />

      {/* Write a Store Review Section */}
      <section className="py-24 px-6 bg-ink border-t border-hairline/5">
        <div className="max-w-xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={22} className="fill-gold text-gold" />
            ))}
          </div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Loved the fit?</p>
          <h2 className="font-display text-4xl text-bone tracking-wide">Leave Your Feedback</h2>
          <p className="text-boneDim text-xs mt-2">
            Your reviews help us constantly refine our fabric selection and tailoring in Karur.
          </p>
        </div>
        <ReviewForm />
      </section>

      {/* Floating Story Widget */}
      <FloatingReelStory />
    </div>
  );
}
