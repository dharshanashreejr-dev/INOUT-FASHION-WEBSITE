export const GST_RATE = 0.05; // 5% GST applicable to apparel under Rs.1000/unit slab (adjust as per client's actual rate)

export function calculateGST(subtotal: number, rate: number = GST_RATE) {
  const gstAmount = Math.round(subtotal * rate * 100) / 100;
  const total = Math.round((subtotal + gstAmount) * 100) / 100;
  return { gstAmount, total };
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(amount);
}
