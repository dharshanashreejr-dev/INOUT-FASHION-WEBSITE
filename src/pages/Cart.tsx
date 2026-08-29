import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trash2,
  Minus,
  Plus,
  MessageCircle,
  Truck,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { calculateGST, formatINR } from '../utils/gst';
import { buildOrderWhatsAppLink, ADMIN_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { saveOrder, buildOrderFromCart } from '../utils/ordersStore';

const TN_CITIES = [
  'Karur',
  'Coimbatore',
  'Tirupur',
  'Erode',
  'Salem',
  'Trichy (Tiruchirappalli)',
  'Madurai',
  'Chennai',
  'Dindigul',
  'Thanjavur',
  'Namakkal',
  'Tirunelveli',
  'Vellore',
  'Other / All-India'
];

export default function Cart() {
  const { items, updateQty, removeFromCart, subtotal, clearCart } = useCart();
  const { gstAmount, total } = calculateGST(subtotal);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [cityDistrict, setCityDistrict] = useState('Karur');
  const [pincode, setPincode] = useState('');
  const [orderPlaced, setOrderPlaced] = useState<{ id: string; link: string } | null>(null);
  const [error, setError] = useState('');

  function handlePlaceOrder() {
    if (items.length === 0) return;
    if (!customerName.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      setError('Please enter a valid 10-digit WhatsApp phone number');
      return;
    }
    if (!deliveryAddress.trim()) {
      setError('Please enter your delivery street address');
      return;
    }
    setError('');

    const orderId = `IOF-${Date.now().toString().slice(-6)}`;
    const link = buildOrderWhatsAppLink({
      orderId,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: deliveryAddress.trim(),
      cityDistrict,
      pincode: pincode.trim(),
      items,
      subtotal,
      gstAmount,
      total
    });

    const newOrder = buildOrderFromCart(
      orderId,
      customerName.trim(),
      customerPhone.trim(),
      deliveryAddress.trim(),
      cityDistrict,
      pincode.trim(),
      items,
      subtotal,
      gstAmount,
      total
    );

    // Save order in store for Admin Portal & Order Tracking
    saveOrder(newOrder);
    setOrderPlaced({ id: orderId, link });

    // Open WhatsApp to notify Admin
    window.open(link, '_blank');
    clearCart();
  }

  if (orderPlaced) {
    return (
      <div className="bg-ink min-h-screen flex items-center justify-center px-6 py-16">
        <div className="bg-panel border border-hairline/10 rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center shadow-2xl relative">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>

          <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Order Placed Successfully
          </span>

          <h1 className="font-display text-4xl text-bone tracking-wide mt-4 mb-2">
            Admin Notified!
          </h1>
          <p className="text-boneDim text-sm mb-6">
            Your order details have been formatted and dispatched to the IN OUT FASHION store manager on WhatsApp.
          </p>

          {/* Order Info Card */}
          <div className="bg-charcoal/80 rounded-2xl p-5 border border-hairline/10 text-left mb-6 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-boneDim">Order Reference:</span>
              <span className="text-gold font-mono font-bold text-sm">{orderPlaced.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-boneDim">Customer:</span>
              <span className="text-bone font-medium">{customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-boneDim">Destination:</span>
              <span className="text-bone font-medium">{cityDistrict} ({pincode || 'Karur'})</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-hairline/5 font-semibold text-sm">
              <span className="text-bone">Total Amount:</span>
              <span className="text-gold font-mono">{formatINR(total)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={orderPlaced.link}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/30"
            >
              <MessageCircle size={16} /> Open Admin WhatsApp
            </a>
            <Link
              to="/track-order"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-panel hover:bg-panel/80 border border-hairline/10 text-bone font-semibold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              <Truck size={16} className="text-gold" /> Track Order
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="/products"
              className="text-boneDim hover:text-gold text-xs underline uppercase tracking-wider"
            >
              ← Back to Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ink min-h-screen px-6 py-14 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold mb-2">
        <Sparkles size={14} />
        <span>Karur Flagship Checkout</span>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl text-bone tracking-wide mb-10">
        Your Shopping Bag
      </h1>

      {items.length === 0 ? (
        <div className="bg-panel border border-hairline/10 rounded-3xl p-16 text-center shadow-xl">
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center mx-auto mb-4">
            <ShoppingBag size={28} />
          </div>
          <h3 className="font-display text-2xl text-bone mb-2">Your Bag is Empty</h3>
          <p className="text-boneDim text-sm max-w-md mx-auto mb-8">
            Explore our curated shirts, stretch denim trousers, and ethnic drops sourced directly in Karur.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gold hover:bg-goldDeep text-onGold font-bold px-8 py-3.5 rounded-full uppercase text-xs tracking-wider transition-colors shadow-lg shadow-gold/20"
          >
            Explore Collection <ArrowRight size={14} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="bg-panel rounded-2xl p-4 sm:p-5 flex gap-4 items-center border border-hairline/10 shadow-lg hover:border-gold/30 transition-all"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-xl bg-black shrink-0 border border-hairline/5"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg text-bone tracking-wide truncate">
                    {item.product.name}
                  </p>
                  <p className="text-boneDim text-xs mb-2">
                    Size: <span className="text-bone font-semibold">{item.size}</span>
                  </p>
                  <p className="text-gold text-sm font-mono font-bold">
                    {formatINR(item.product.price)}
                  </p>
                </div>

                {/* Qty Stepper */}
                <div className="flex items-center gap-2 bg-charcoal px-2 py-1 rounded-full border border-hairline/10">
                  <button
                    onClick={() => updateQty(item.product.id, item.size, item.qty - 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-boneDim hover:text-bone hover:bg-hairline/10 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-6 text-center text-bone text-xs font-mono font-bold">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.product.id, item.size, item.qty + 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-boneDim hover:text-bone hover:bg-hairline/10 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.product.id, item.size)}
                  className="text-boneDim hover:text-red-400 p-2 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <div className="flex items-center justify-between text-xs text-boneDim pt-2">
              <Link to="/products" className="text-gold hover:underline flex items-center gap-1">
                ← Add more outfits
              </Link>
              <span>{items.reduce((s, i) => s + i.qty, 0)} items in bag</span>
            </div>
          </div>

          {/* Right Column: Delivery Details & WhatsApp Checkout Summary */}
          <div className="lg:col-span-5 bg-panel rounded-3xl p-6 sm:p-8 border border-hairline/10 shadow-2xl sticky top-28">
            <h2 className="font-display text-2xl text-bone tracking-wide mb-4">
              Delivery &amp; Checkout
            </h2>

            {/* Price Calculations */}
            <div className="space-y-2 text-xs border-b border-hairline/10 pb-4 mb-5">
              <div className="flex justify-between text-boneDim">
                <span>Subtotal</span>
                <span className="font-mono text-bone">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-boneDim">
                <span>GST (5% Apparel)</span>
                <span className="font-mono text-bone">{formatINR(gstAmount)}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Tamil Nadu Express Dispatch</span>
                <span>FREE</span>
              </div>
              <div className="border-t border-hairline/10 pt-3 flex justify-between text-bone font-bold text-base">
                <span>Final Payable</span>
                <span className="text-gold font-mono text-xl">{formatINR(total)}</span>
              </div>
            </div>

            {/* Customer Delivery Form */}
            <div className="space-y-3 mb-6">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-boneDim mb-1">
                  Full Name *
                </label>
                <input
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Karthik Raman"
                  className="w-full bg-charcoal border border-hairline/10 rounded-xl px-4 py-2.5 text-xs text-bone placeholder:text-boneDim focus:outline-none focus:border-gold/50"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-boneDim mb-1">
                  WhatsApp Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  maxLength={10}
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g. 98421 XXXXX"
                  className="w-full bg-charcoal border border-hairline/10 rounded-xl px-4 py-2.5 text-xs text-bone font-mono placeholder:text-boneDim focus:outline-none focus:border-gold/50"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-boneDim mb-1">
                  Street Address &amp; Door No *
                </label>
                <input
                  required
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="e.g. No. 14, Gandhi Road, Opp. Best Mobiles"
                  className="w-full bg-charcoal border border-hairline/10 rounded-xl px-4 py-2.5 text-xs text-bone placeholder:text-boneDim focus:outline-none focus:border-gold/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-boneDim mb-1">
                    City / District
                  </label>
                  <select
                    value={cityDistrict}
                    onChange={(e) => setCityDistrict(e.target.value)}
                    className="w-full bg-charcoal border border-hairline/10 rounded-xl px-3 py-2.5 text-xs text-bone focus:outline-none focus:border-gold/50"
                  >
                    {TN_CITIES.map((c) => (
                      <option key={c} value={c} className="bg-charcoal text-bone">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-boneDim mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="e.g. 639002"
                    className="w-full bg-charcoal border border-hairline/10 rounded-xl px-3 py-2.5 text-xs text-bone font-mono placeholder:text-boneDim focus:outline-none focus:border-gold/50"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs mb-4 bg-red-950/40 border border-red-800/40 p-2.5 rounded-xl">
                ⚠️ {error}
              </p>
            )}

            {/* Place Order & Notify WhatsApp Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold py-4 rounded-full uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-600/30"
            >
              <MessageCircle size={18} />
              <span>Place Order &amp; Notify Admin</span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-boneDim">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Direct confirmation with Karur store manager on WhatsApp</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
