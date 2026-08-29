import { useState } from 'react';
import {
  Instagram,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Sparkles,
  Heart,
  Share2,
  Eye,
  Flame,
  ArrowRight,
  X,
  ShoppingBag,
  Check,
  Tag
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import logo from '../assets/logo.png';

export const FEATURED_REEL_URL =
  'https://www.instagram.com/reel/DJRPo2ku6nl/?igsi=MXR6NW5nYjcwM245bQ==';

export interface InstagramPost {
  id: string;
  title: string;
  category: string;
  views: string;
  likes: string;
  image: string;
  reelUrl: string;
  caption: string;
  taggedProductIds?: string[];
}

export const INSTA_HIGHLIGHTS: InstagramPost[] = [
  {
    id: 'reel-main',
    title: 'New Season Trend Drop @ IN OUT FASHION',
    category: 'Featured Reel',
    views: '18.4K',
    likes: '1.2K',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900',
    reelUrl: FEATURED_REEL_URL,
    caption:
      'Fresh shirts & ethnic arrivals live at our Sengunthapuram Karur store! Wholesale & Retail orders open across Tamil Nadu.',
    taggedProductIds: ['p1', 'p3', 'p6']
  },
  {
    id: 'reel-2',
    title: 'Heavyweight Denim & Straight Fit Check',
    category: 'Fit Check',
    views: '12.8K',
    likes: '940',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=900',
    reelUrl: FEATURED_REEL_URL,
    caption: 'Pure stretch cotton denim, premium stone wash and reinforced stitching for daily wear.',
    taggedProductIds: ['p2', 'p5']
  },
  {
    id: 'reel-3',
    title: 'Daily Courier Dispatch Across Tamil Nadu',
    category: 'Behind The Scenes',
    views: '24.1K',
    likes: '2.1K',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900',
    reelUrl: FEATURED_REEL_URL,
    caption: 'Packing wholesale and retail parcels for Salem, Erode, Chennai, Theni & Madurai customers.',
    taggedProductIds: ['p1', 'p4']
  },
  {
    id: 'reel-4',
    title: 'Festive Kurta & Ethnic Wear Range',
    category: 'Festive Edit',
    views: '15.6K',
    likes: '1.4K',
    image: 'https://images.unsplash.com/photo-1610189844460-856823f77d3a?q=80&w=900',
    reelUrl: FEATURED_REEL_URL,
    caption: 'Traditional elegance crafted for weddings, festivals & special occasions in Tamil Nadu.',
    taggedProductIds: ['p3', 'p8']
  }
];

export default function InstagramReelSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1248);
  const [activeModalPost, setActiveModalPost] = useState<InstagramPost | null>(null);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleLike = () => {
    if (!liked) {
      setLikeCount((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikeCount((prev) => prev - 1);
      setLiked(false);
    }
  };

  const handleQuickAdd = (product: typeof products[0]) => {
    addToCart(product, 'L', 1);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const featuredTaggedProducts = products.filter((p) =>
    ['p1', 'p3', 'p6'].includes(p.id)
  );

  return (
    <section id="reels" className="py-24 px-6 relative bg-gradient-to-b from-ink via-charcoal to-ink overflow-hidden border-t border-hairline/5">
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-pink-600/10 via-purple-600/10 to-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-amber-500/20 border border-pink-500/30 rounded-full px-4 py-1.5 mb-3">
              <Instagram size={14} className="text-pink-400" />
              <span className="text-pink-300 text-xs uppercase tracking-[0.25em] font-semibold">
                Social Runway &amp; Viral Drops
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-bone tracking-wide">
              Trending on Instagram
            </h2>
            <p className="text-boneDim text-sm sm:text-base max-w-xl mt-2">
              Watch our freshest fit checks, store tours, and fabric showcases directly from our Karur flagship channel{' '}
              <a
                href="https://instagram.com/in_out_fashions_karur"
                target="_blank"
                rel="noreferrer"
                className="text-gold font-semibold hover:underline"
              >
                @in_out_fashions_karur
              </a>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/in_out_fashions_karur"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-500 hover:to-amber-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-lg shadow-pink-600/20"
            >
              <Instagram size={16} />
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Hero Spotlight: Requested Reel with Interactive Elements */}
        <div className="bg-panel/90 border border-hairline/10 rounded-3xl p-6 sm:p-10 mb-14 shadow-2xl backdrop-blur relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Reel Video Player Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-2 border-hairline/15 bg-black group">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900"
                  alt="IN OUT FASHION Instagram Reel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-gradient-to-r from-pink-600 to-amber-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Flame size={12} className="fill-white" /> Featured Reel
                  </span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>

                {/* Center Play / Pause Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setActiveModalPost(INSTA_HIGHLIGHTS[0])}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group-hover:shadow-pink-500/50"
                    aria-label="Play Reel"
                  >
                    <Play size={26} className="fill-white translate-x-0.5" />
                  </button>
                </div>

                {/* Sound wave visualizer animation */}
                <div className="absolute bottom-20 left-4 right-4 flex items-center gap-1">
                  {[40, 70, 95, 60, 85, 45, 90, 65, 35, 80, 50, 95, 75, 40].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gold/70 rounded-full animate-pulse"
                      style={{
                        height: `${Math.max(6, (h / 100) * 22)}px`,
                        animationDelay: `${idx * 0.1}s`
                      }}
                    />
                  ))}
                </div>

                {/* Interactive Action Sidebar (Like, Comment, Share) */}
                <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3 z-10">
                  <button
                    onClick={handleLike}
                    className="flex flex-col items-center text-white hover:text-pink-400 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center ${liked ? 'text-pink-500' : ''}`}>
                      <Heart size={18} className={liked ? 'fill-pink-500 text-pink-500' : ''} />
                    </div>
                    <span className="text-[10px] font-semibold mt-0.5">{likeCount}</span>
                  </button>
                  <a
                    href={FEATURED_REEL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center text-white hover:text-gold transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
                      <Share2 size={16} />
                    </div>
                    <span className="text-[10px] font-semibold mt-0.5">Share</span>
                  </a>
                </div>

                {/* Bottom Profile and Caption */}
                <div className="absolute bottom-4 left-4 right-14 z-10 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <img
                      src={logo}
                      alt="IN OUT FASHION"
                      className="w-6 h-6 rounded-full border border-hairline/50 object-cover"
                    />
                    <span className="font-semibold text-xs text-bone tracking-wide">
                      @in_out_fashions_karur
                    </span>
                  </div>
                  <p className="text-[11px] text-boneDim line-clamp-2 leading-snug">
                    Trending festive &amp; street drops at Karur Sengunthapuram store 🔥
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Reel Information, Tagged Outfits & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                <Sparkles size={12} />
                <span>Featured Collection Video</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-bone tracking-wide mb-3">
                Experience Our Sourcing &amp; Style Drops in Action
              </h3>

              <p className="text-boneDim text-sm sm:text-base leading-relaxed mb-6">
                Watch our latest collection video reel showcasing premium slim-fit shirts, stretch denim trousers, and ethnic pairings. Sourced directly from premier textile weavers and made available at unbeatable wholesale &amp; retail rates in Karur.
              </p>

              {/* Tagged Outfits in This Video */}
              <div className="mb-6 bg-charcoal/70 p-4 sm:p-5 rounded-2xl border border-hairline/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold font-bold mb-3">
                  <Tag size={13} />
                  <span>Featured Outfits in this Video</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {featuredTaggedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-ink/80 rounded-xl p-2.5 border border-hairline/5 flex items-center gap-3 group"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-bone truncate">{prod.name}</p>
                        <p className="text-gold font-mono text-xs">₹{prod.price}</p>
                      </div>
                      <button
                        onClick={() => handleQuickAdd(prod)}
                        title="Add to Bag"
                        className={`p-2 rounded-lg text-xs transition-colors shrink-0 ${addedItem === prod.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-panel hover:bg-gold hover:text-onGold text-bone'
                          }`}
                      >
                        {addedItem === prod.id ? <Check size={14} /> : <ShoppingBag size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Stats Bar */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 bg-charcoal/60 p-3 sm:p-4 rounded-2xl border border-hairline/5">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-boneDim text-[10px] sm:text-xs mb-1">
                    <Eye size={14} className="text-gold" /> Views
                  </div>
                  <p className="font-display text-lg sm:text-2xl text-bone">18.4K+</p>
                </div>
                <div className="text-center border-x border-hairline/5">
                  <div className="flex items-center justify-center gap-1.5 text-boneDim text-[10px] sm:text-xs mb-1">
                    <Heart size={14} className="text-pink-500" /> Likes
                  </div>
                  <p className="font-display text-lg sm:text-2xl text-bone">{likeCount}+</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-boneDim text-[10px] sm:text-xs mb-1">
                    <Share2 size={14} className="text-purple-400" /> Shares
                  </div>
                  <p className="font-display text-lg sm:text-2xl text-bone">340+</p>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={FEATURED_REEL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg shadow-pink-600/30"
                >
                  <Play size={14} className="fill-white" />
                  Watch Reel on Instagram
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => setActiveModalPost(INSTA_HIGHLIGHTS[0])}
                  className="inline-flex items-center gap-2 bg-panel hover:bg-panel/80 text-bone text-xs font-semibold px-6 py-3.5 rounded-full border border-hairline/10 transition-colors uppercase tracking-wider shadow"
                >
                  Interactive Player
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More Instagram Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTA_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="bg-panel rounded-3xl overflow-hidden border border-hairline/10 hover:border-pink-500/40 transition-all duration-300 flex flex-col group shadow-xl hover:shadow-pink-500/5"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                {/* Category Pill */}
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur text-gold text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-hairline/10">
                  {item.category}
                </span>

                {/* Play Button */}
                <button
                  onClick={() => setActiveModalPost(item)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play size={20} className="fill-white translate-x-0.5" />
                  </div>
                </button>

                {/* View Counter */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-white/90">
                  <Eye size={12} /> {item.views}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-pink-400">
                  <Heart size={12} className="fill-pink-400" /> {item.likes}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-display text-lg text-bone tracking-wide mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-boneDim text-xs line-clamp-2 leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-hairline/5 text-xs">
                  <button
                    onClick={() => setActiveModalPost(item)}
                    className="text-gold font-semibold uppercase tracking-wider hover:text-goldDeep transition-colors"
                  >
                    Quick Preview
                  </button>
                  <a
                    href={item.reelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-boneDim hover:text-bone flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reel Preview Modal */}
      {activeModalPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/85 backdrop-blur-md">
          <div className="bg-panel border border-hairline/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalPost(null)}
              className="absolute top-5 right-5 text-boneDim hover:text-bone z-20"
              aria-label="Close Preview"
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="IN OUT FASHIONS" className="w-9 h-9 rounded-full object-cover border border-gold/40" />
              <div>
                <p className="text-bone font-semibold text-sm">IN OUT FASHIONS Karur</p>
                <p className="text-pink-400 text-xs">@in_out_fashions_karur</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[9/12] bg-black mb-4 group">
              <img
                src={activeModalPost.image}
                alt={activeModalPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <a
                href={activeModalPost.reelUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-6 text-white"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <Play size={28} className="fill-white translate-x-0.5" />
                </div>
                <span className="font-display text-2xl tracking-wider">
                  Watch on Instagram Reel
                </span>
                <span className="text-xs text-boneDim max-w-xs leading-relaxed">
                  Tap here to open full video in HD with Tamil beats and creator audio
                </span>
              </a>
            </div>

            <p className="text-bone text-xs leading-relaxed mb-6">
              {activeModalPost.caption}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveModalPost(null)}
                className="flex-1 bg-charcoal text-bone rounded-full py-3 text-xs uppercase font-semibold tracking-wider hover:bg-charcoal/80 transition-colors"
              >
                Close
              </button>
              <a
                href={activeModalPost.reelUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-full py-3 text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-pink-600/30"
              >
                <Instagram size={14} /> Open Instagram Reel
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
