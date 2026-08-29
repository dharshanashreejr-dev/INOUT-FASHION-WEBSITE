import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart, Truck, MessageCircle, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAdminAuth } from '../context/AdminAuthContext';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated } = useAdminAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Shop' },
    { to: '/#reviews', label: 'Reviews' },
    { to: '/track-order', label: 'Track Order', highlight: true }
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-hairline/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="IN OUT FASHIONS logo"
              className="w-11 h-11 rounded-full object-cover border border-gold/40 group-hover:scale-105 transition-transform"
            />
            <span className="w-2.5 h-2.5 rounded-full bg-gold absolute bottom-0 right-0" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl tracking-widest text-bone leading-none">
              IN<span className="text-gold">OUT</span> FASHION
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-boneDim font-medium">
              Karur • Menswear Flagship
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const isInternalAnchor = l.to.includes('#');
            if (isInternalAnchor) {
              return (
                <a
                  key={l.to}
                  href={l.to}
                  className="text-xs uppercase tracking-widest text-boneDim hover:text-gold transition-colors font-medium"
                >
                  {l.label}
                </a>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs uppercase tracking-widest transition-colors font-medium ${location.pathname === l.to
                    ? 'text-gold font-bold'
                    : l.highlight
                      ? 'text-amber-300 hover:text-gold'
                      : 'text-boneDim hover:text-bone'
                  }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Admin Portal, Wishlist, Cart & Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Admin Portal Button */}
          <Link
            to={isAuthenticated ? '/admin/dashboard' : '/admin/login'}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${location.pathname.startsWith('/admin')
                ? 'bg-gold text-onGold border-gold font-bold shadow-lg shadow-gold/20'
                : 'bg-panel/80 hover:bg-gold/10 border-hairline/10 hover:border-gold/40 text-boneDim hover:text-gold'
              }`}
            title="Access IN OUT Admin Portal"
          >
            <ShieldCheck size={14} className={location.pathname.startsWith('/admin') ? 'text-onGold' : 'text-gold'} />
            <span>Admin</span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative text-bone hover:text-pink-400 transition-colors p-1"
            aria-label="Wishlist"
          >
            <Heart size={21} className={wishlistCount > 0 ? 'fill-pink-500 text-pink-500' : ''} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-pink-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Bag */}
          <Link
            to="/cart"
            className="relative text-bone hover:text-gold transition-colors p-1"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-onGold text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle className="hidden sm:inline-flex" />

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/918300721916"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 bg-gold/10 hover:bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider transition-colors"
          >
            <MessageCircle size={14} /> Karur Store
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-bone p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-charcoal border-t border-hairline/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {links.map((l) => {
            const isInternalAnchor = l.to.includes('#');
            if (isInternalAnchor) {
              return (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="text-boneDim text-sm uppercase tracking-wider hover:text-gold"
                >
                  {l.label}
                </a>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase tracking-wider ${location.pathname === l.to ? 'text-gold font-bold' : 'text-boneDim hover:text-bone'
                  }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-hairline/10 flex items-center justify-between gap-3 text-xs uppercase tracking-wider sm:hidden">
            <span className="text-boneDim">Theme</span>
            <ThemeToggle />
          </div>
          <div className="pt-3 border-t border-hairline/10 flex flex-col gap-3 text-xs uppercase tracking-wider">
            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="text-pink-400 flex items-center gap-2"
            >
              <Heart size={16} /> Saved Outfits ({wishlistCount})
            </Link>
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="text-gold flex items-center gap-2"
            >
              <ShoppingBag size={16} /> Bag ({itemCount})
            </Link>
            <Link
              to={isAuthenticated ? '/admin/dashboard' : '/admin/login'}
              onClick={() => setOpen(false)}
              className="text-amber-300 hover:text-gold flex items-center gap-2 font-bold"
            >
              <ShieldCheck size={16} className="text-gold" /> Admin Portal &amp; Orders
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
