# IN OUT FASHION — E-commerce demo

React + TypeScript + Tailwind. Built for IN OUT FASHION, Senguthapuram, Karur.

## Run it

```
npm install
npm run dev
```

Opens at http://localhost:5173

## What's built

- **Landing page** — hero with a masked-media heading, a decrypt-in text effect, an ambient
  particle background, a draggable 3D "rotating cards" showcase, and a scroll-pinned stack
  section, all using the store's real product photos and address.
- **Products page** — search, category filter, size selection per product, add to cart, buy now.
- **Cart page** — line items with qty controls, order summary with 5% GST breakdown, and a
  WhatsApp checkout button.
- **Admin portal** — login screen (demo credentials: `admin` / `inout2026`), dashboard with
  order count / revenue stats, and an orders page with status updates (New → Confirmed →
  Dispatched → Delivered).

## About WhatsApp order notifications — please read before demoing to the client

This is a **frontend-only** build, and that has one real limitation worth flagging clearly:

- On "place order," the app opens a `wa.me` link with the order details pre-filled, addressed to
  the store's WhatsApp number (`utils/whatsapp.ts`).
- The **customer** still has to tap **Send** in WhatsApp — a browser cannot silently send a
  WhatsApp message on its own, with or without a backend framework choice. This isn't a bug to
  fix in the frontend; it's a platform limitation.
- **True automatic, guaranteed notification** (no customer action required) needs the WhatsApp
  Business Cloud API (Meta) or a wrapper like Twilio / Gupshup / AiSensy, called from a backend
  the moment an order is saved. That's a separate, backend-side piece of work.

Recommend flagging this distinction to your MD/client directly so expectations are set correctly
before the demo.

## Data persistence

Orders placed through the cart are saved to the browser's `localStorage`
(`utils/ordersStore.ts`) so they show up in the admin dashboard/orders pages for this demo.
There's no real backend or database — restarting on a different browser/device won't show
previous orders. Swap this out for real API calls once a backend exists.

## Admin login

The login is a **demo-only** hardcoded check (`admin` / `inout2026`) stored in
`AdminAuthContext.tsx`, with no real backend authentication. Do not ship this as-is —
replace with a real login endpoint (JWT/session) before production.
