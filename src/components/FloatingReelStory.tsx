import { useState } from 'react';
import { Play, Instagram, X, Flame, Sparkles } from 'lucide-react';
import { FEATURED_REEL_URL } from './InstagramReelSection';
import logo from '../assets/logo.png';

export default function FloatingReelStory() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating Story Button at bottom-left */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setModalOpen(true)}
          className="group relative flex items-center gap-3 bg-ink/90 hover:bg-charcoal border border-pink-500/40 rounded-full pl-1.5 pr-4 py-1.5 shadow-2xl backdrop-blur-md transition-all hover:scale-105"
          aria-label="Watch Featured Instagram Reel"
        >
          {/* Animated Instagram Gradient Ring */}
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-ink p-[1px] overflow-hidden">
              <img src={logo} alt="IN OUT FASHION Story" className="w-full h-full object-cover rounded-full" />
            </div>
            {/* Play badge */}
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-pink-600 text-white flex items-center justify-center shadow">
              <Play size={8} className="fill-white translate-x-[0.5px]" />
            </span>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider">
                Reel Drop
              </span>
              <Flame size={11} className="text-amber-400 fill-amber-400" />
            </div>
            <span className="text-xs text-bone font-semibold leading-tight group-hover:text-gold transition-colors">
              Watch Karur Reel
            </span>
          </div>
        </button>
      </div>

      {/* Story Video Popout Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-panel border border-hairline/15 rounded-3xl p-6 max-w-sm w-full relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-boneDim hover:text-bone z-20"
              aria-label="Close Story"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600">
                <img src={logo} alt="IN OUT FASHION" className="w-full h-full object-cover rounded-full bg-ink" />
              </div>
              <div>
                <p className="text-bone font-bold text-xs">IN OUT FASHION Karur</p>
                <p className="text-pink-400 text-[10px]">@in_out_fashions_karur</p>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[9/14] bg-black mb-4 group shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900"
                alt="IN OUT FASHION Instagram Reel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <a
                href={FEATURED_REEL_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-6 text-white group-hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 flex items-center justify-center shadow-2xl">
                  <Play size={24} className="fill-white translate-x-0.5" />
                </div>
                <span className="font-display text-xl tracking-wide mt-2">
                  Watch on Instagram
                </span>
                <span className="text-[11px] text-boneDim max-w-xs">
                  Tap to watch full high-definition video with original audio on Instagram
                </span>
              </a>
            </div>

            <a
              href={FEATURED_REEL_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-pink-600/30 hover:opacity-95 transition-opacity"
            >
              <Instagram size={14} /> Open Reel in App
            </a>
          </div>
        </div>
      )}
    </>
  );
}
