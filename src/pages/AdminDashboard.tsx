import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  LogOut,
  ShoppingBag,
  Clock,
  Truck,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  MessageCircle,
  Phone,
  ShieldCheck,
  Store,
  RefreshCw
} from 'lucide-react';
import { getOrders, Order, updateOrderStatus } from '../utils/ordersStore';
import { formatINR } from '../utils/gst';
import { useAdminAuth } from '../context/AdminAuthContext';
import ThemeToggle from '../components/ThemeToggle';
import logo from '../assets/logo.png';

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const loadData = () => {
    setOrders(getOrders());
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const newOrders = orders.filter((o) => o.status === 'New').length;
  const dispatchedOrders = orders.filter((o) => o.status === 'Dispatched').length;
  const deliveredOrders = orders.filter((o) => o.status === 'Delivered').length;

  return (
    <div className="bg-ink min-h-screen flex flex-col md:flex-row text-bone">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-charcoal/90 border-r border-hairline/10 p-6 flex flex-col justify-between shrink-0 shadow-2xl">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="IN OUT FASHION" className="w-10 h-10 rounded-full object-cover border border-gold/40 shadow" />
            <div>
              <span className="font-display text-xl tracking-widest text-bone leading-none">
                IN<span className="text-gold">OUT</span>
              </span>
              <p className="text-[10px] uppercase tracking-wider text-gold font-bold">Admin Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gold text-onGold font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold/20"
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>
            <Link
              to="/admin/orders"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-boneDim hover:text-bone hover:bg-hairline/5 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <Package size={16} className="text-gold" /> Orders Management
              {newOrders > 0 && (
                <span className="ml-auto bg-amber-500 text-onGold text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {newOrders}
                </span>
              )}
            </Link>
            <Link
              to="/products"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-boneDim hover:text-bone hover:bg-hairline/5 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <ShoppingBag size={16} className="text-gold" /> Catalog View
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-boneDim hover:text-bone hover:bg-hairline/5 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <Store size={16} className="text-emerald-400" /> View Storefront
            </Link>
          </nav>
        </div>

        {/* User Info & Logout */}
        <div className="pt-6 border-t border-hairline/10 mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-boneDim">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Store Admin (Karur)</span>
          </div>
          <button
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-charcoal border border-hairline/10 text-boneDim hover:text-red-400 hover:border-red-400/40 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 max-w-7xl overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">
              Control Center • Karur Sengunthapuram
            </span>
            <h1 className="font-display text-4xl text-bone tracking-wide mt-1">
              Admin Overview
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={loadData}
              className="inline-flex items-center gap-2 bg-panel hover:bg-panel/80 border border-hairline/10 text-bone text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <RefreshCw size={13} className="text-gold" /> Refresh
            </button>
            <Link
              to="/admin/orders"
              className="inline-flex items-center gap-2 bg-gold hover:bg-goldDeep text-onGold font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-gold/20"
            >
              <Package size={14} /> Manage All Orders
            </Link>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="bg-panel rounded-3xl p-6 border border-hairline/10 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-boneDim text-xs uppercase tracking-wider font-semibold">
                Total Orders
              </span>
              <Package size={20} className="text-gold" />
            </div>
            <p className="font-display text-4xl text-bone mb-1">{orders.length}</p>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <TrendingUp size={12} /> Active in store database
            </span>
          </div>

          <div className="bg-panel rounded-3xl p-6 border border-amber-500/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-amber-400 text-xs uppercase tracking-wider font-bold">
                New Unprocessed
              </span>
              <Clock size={20} className="text-amber-400" />
            </div>
            <p className="font-display text-4xl text-amber-400 mb-1">{newOrders}</p>
            <span className="text-[11px] text-boneDim">Awaiting WhatsApp confirmation</span>
          </div>

          <div className="bg-panel rounded-3xl p-6 border border-hairline/10 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-boneDim text-xs uppercase tracking-wider font-semibold">
                Dispatched Courier
              </span>
              <Truck size={20} className="text-blue-400" />
            </div>
            <p className="font-display text-4xl text-blue-400 mb-1">{dispatchedOrders}</p>
            <span className="text-[11px] text-boneDim">In transit across Tamil Nadu</span>
          </div>

          <div className="bg-panel rounded-3xl p-6 border border-gold/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gold text-xs uppercase tracking-wider font-semibold">
                Total Order Value
              </span>
              <TrendingUp size={20} className="text-gold" />
            </div>
            <p className="font-display text-3xl sm:text-4xl text-gold font-bold mb-1 font-mono">
              {formatINR(totalRevenue)}
            </p>
            <span className="text-[11px] text-emerald-400">5% GST included</span>
          </div>
        </div>

        {/* Live Orders Feed */}
        <div className="bg-panel rounded-3xl p-6 sm:p-8 border border-hairline/10 shadow-2xl mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl text-bone tracking-wide">
                Recent Customer Orders
              </h2>
              <p className="text-boneDim text-xs mt-0.5">
                Real-time orders placed on the storefront with customer contact details.
              </p>
            </div>
            <Link
              to="/admin/orders"
              className="text-gold hover:underline text-xs uppercase tracking-wider font-bold flex items-center gap-1"
            >
              View Full Table <ExternalLink size={13} />
            </Link>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-12 bg-charcoal/60 rounded-2xl border border-hairline/5">
              <Package size={36} className="text-boneDim mx-auto mb-3" />
              <p className="text-boneDim text-sm">No orders placed yet.</p>
              <p className="text-boneDim text-xs mt-1">
                New orders placed from the Cart will immediately show here and trigger WhatsApp to Admin.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.slice(0, 5).map((o) => (
                <div
                  key={o.id}
                  className="bg-charcoal/80 rounded-2xl p-5 border border-hairline/5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:border-gold/30 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className="font-mono font-bold text-gold text-sm">{o.id}</span>
                      <span
                        className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${
                          o.status === 'New'
                            ? 'bg-amber-950/60 text-amber-300 border-amber-800/40'
                            : o.status === 'Dispatched'
                            ? 'bg-blue-950/60 text-blue-300 border-blue-800/40'
                            : o.status === 'Delivered'
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                            : 'bg-panel text-boneDim border-hairline/10'
                        }`}
                      >
                        {o.status}
                      </span>
                      <span className="text-boneDim text-xs font-mono">
                        {new Date(o.placedAt).toLocaleString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-boneDim flex-wrap mt-1">
                      <span className="text-bone font-semibold">{o.customerName}</span>
                      <span>•</span>
                      <a
                        href={`tel:${o.customerPhone}`}
                        className="hover:text-gold flex items-center gap-1 font-mono"
                      >
                        <Phone size={11} /> {o.customerPhone}
                      </a>
                      <span>•</span>
                      <span>{o.cityDistrict || 'Karur'}</span>
                    </div>

                    {/* Ordered Items Summary */}
                    <div className="text-xs text-boneDim/90 mt-2 flex flex-wrap gap-2">
                      {o.items.map((i, idx) => (
                        <span key={idx} className="bg-ink/80 px-2 py-0.5 rounded-lg border border-hairline/5">
                          {i.name} ({i.size}) × {i.qty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 justify-between lg:justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-hairline/5">
                    <div className="text-left lg:text-right">
                      <p className="text-gold font-mono font-bold text-base">
                        {formatINR(o.total)}
                      </p>
                      <p className="text-[10px] text-boneDim">
                        {o.items.reduce((s, i) => s + i.qty, 0)} items
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/91${o.customerPhone.replace(/\D/g, '')}?text=Vanakkam%20${encodeURIComponent(
                          o.customerName
                        )},%20regarding%20your%20order%20${o.id}%20from%20IN%20OUT%20FASHION%20Karur...`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white p-2 rounded-xl transition-colors text-xs"
                        title="Chat with Customer on WhatsApp"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
