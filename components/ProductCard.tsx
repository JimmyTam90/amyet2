import Image from 'next/image';
import type { Product } from '@/lib/types';
import { savings, usd } from '@/lib/products';
import CtaButton from './CtaButton';

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="flex flex-col rounded-lg border border-steel bg-graphite p-4">
      {/* 1. Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-ink">
        <Image
          src={p.image.src}
          alt={p.image.alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
          className="object-contain"
        />
      </div>
      {/* 2. Key specs */}
      <h3 className="mt-4 font-display text-2xl font-bold uppercase">{p.shortName}</h3>
      <p className="mt-1 text-sm text-zinc-300">{p.tagline}</p>
      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
        <div><dt className="text-zinc-500">Motor</dt><dd className="font-medium">{p.specs.motor}</dd></div>
        <div><dt className="text-zinc-500">Top speed</dt><dd className="font-medium">{p.specs.speed}</dd></div>
        <div><dt className="text-zinc-500">Range</dt><dd className="font-medium">{p.specs.range}</dd></div>
        <div><dt className="text-zinc-500">Battery</dt><dd className="font-medium">{p.specs.battery}</dd></div>
      </dl>
      <p className="mt-4 text-xl font-bold">
        From {usd(p.price)}{' '}
        <span className="text-sm font-normal text-zinc-400 line-through">{usd(p.regularPrice)}</span>{' '}
        <span className="text-sm font-semibold text-crimson">Save {usd(savings(p))}</span>
      </p>
      {/* 3. CTA: separate block below the image, normal flow, never overlaid */}
      <div className="mt-4">
        <CtaButton href={p.affiliateUrl} productId={p.id} placement={`card-${p.id}`}>
          View {p.shortName}
        </CtaButton>
      </div>
    </article>
  );
}
