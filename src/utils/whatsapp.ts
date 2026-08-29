import type { CartItem } from '../context/CartContext';

// Admin's WhatsApp number in international format
export const ADMIN_WHATSAPP_NUMBER = '918300721916';
export const ADMIN_FALLBACK_NUMBER = '919965461890';

export function buildOrderWhatsAppLink(params: {
  orderId: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress?: string;
  cityDistrict?: string;
  pincode?: string;
  items: CartItem[];
  subtotal: number;
  gstAmount: number;
  total: number;
}) {
  const {
    orderId,
    customerName,
    customerPhone,
    deliveryAddress = '',
    cityDistrict = '',
    pincode = '',
    items,
    subtotal,
    gstAmount,
    total
  } = params;

  const lines = [
    `🛍️ *NEW ONLINE ORDER — IN OUT FASHION*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📌 *Order ID:* ${orderId}`,
    `👤 *Customer Name:* ${customerName}`,
    `📞 *Phone Number:* ${customerPhone}`,
    `📍 *Delivery Address:* ${deliveryAddress || 'Direct Store Pickup'}`,
    `🏙️ *City / District:* ${cityDistrict || 'Karur'}`,
    `📮 *Pincode:* ${pincode || '639002'}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🛒 *ORDERED ITEMS:*`,
    ...items.map(
      (i, idx) =>
        `${idx + 1}. *${i.product.name}*\n   Size: ${i.size} | Qty: ${i.qty} | ₹${(
          i.product.price * i.qty
        ).toLocaleString('en-IN')}`
    ),
    `━━━━━━━━━━━━━━━━━━━━`,
    `💵 *Subtotal:* ₹${subtotal.toLocaleString('en-IN')}`,
    `🧾 *GST (5%):* ₹${gstAmount.toLocaleString('en-IN')}`,
    `💰 *FINAL PAYABLE:* ₹${total.toLocaleString('en-IN')}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `⚡ *Store:* Sengunthapuram 2nd Cross, Karur 639002`,
    `_Please confirm stock & courier dispatch timing._`
  ];

  const message = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${message}`;
}
