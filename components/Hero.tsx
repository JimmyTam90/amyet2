import Image from 'next/image';
import { HERO, savings, usd } from '@/lib/products';
import CtaButton from './CtaButton';

export default function Hero() {
  const p = HERO;
  return (
    <section aria-labelledby="hero-title" className="border-b border-steel bg-gradient-to-b from-graphite to-ink">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-8 md:grid-cols-2 md:gap-x-10 md:py-14">
        {/* Mobile flow: copy -> image -> CTA. Desktop: copy+CTA left, image right. */}
        <div className="md:col-start-1 md:row-start-1">
          <p className="inline-block rounded bg-crimson px-2.5 py-1 text-sm font-semibold text-white">
            Save up to {usd(savings(p))} on the S8
          </p>
          <h1 id="hero-title" className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Dual-motor power for the trail and the commute
          </h1>
          <p className="mt-4 max-w-prose text-base text-zinc-300 sm:text-lg">
            The Amyet S8 pairs two 1000W motors with a removable 48V 25Ah battery and 20&quot; x 4.0&quot; fat tires.
            Compare it with the V9-G60 and EB26 below, then check current pricing on Amyet.
          </p>
          <p className="mt-4 text-2xl font-bold">
            From {usd(p.price)}{' '}
            <span className="text-base font-normal text-zinc-400 line-through">{usd(p.regularPrice)}</span>
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Price and stock observed on amyet.com on Oct 10, 2026. Final price is set at checkout.
          </p>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-steel bg-graphite">
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:col-start-1 md:row-start-2 md:self-start">
          <CtaButton href={p.affiliateUrl} productId={p.id} placement="hero-primary">
            Shop the S8 on Amyet
          </CtaButton>
          <a
            href="#compare"
            className="flex min-h-[48px] w-full items-center justify-center rounded-md border-2 border-steel px-5 py-3 text-center font-display text-lg font-bold uppercase tracking-wide hover:border-crimson sm:w-auto"
          >
            Compare models
          </a>
        </div>
      </div>
    </section>
  );
}
