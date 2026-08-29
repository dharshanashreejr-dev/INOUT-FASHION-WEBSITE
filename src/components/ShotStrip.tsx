import type { ReviewShot } from '../data/reviews';

export default function ShotStrip({ items }: { items: ReviewShot[] }) {
  return (
    <div className="review-scroll flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
      {items.map((item) => (
        <figure
          key={item.id}
          className="review-card snap-start shrink-0 w-56 sm:w-64 bg-panel border border-hairline/5 rounded-2xl overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.caption}
            loading="lazy"
            className="w-full h-72 object-cover"
          />
          <figcaption className="p-4 text-sm text-boneDim">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
