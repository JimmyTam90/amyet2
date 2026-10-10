'use client';

import { HERO, usd } from '@/lib/products';
import AffiliateLink from './AffiliateLink';

/** Separate mobile bar. Never part of a product image. */
export default function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-steel bg-ink/95 px-4 pt-2 backdrop-blur md:hidden pointer-events-auto"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.5rem)' }}
    >
      <AffiliateLink
        href={HERO.affiliateUrl}
        productId={HERO.id}
        placement="sticky-mobile"
        className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-crimson px-4 font-display text-lg font-bold uppercase tracking-wide text-white"
      >
        Shop S8 from {usd(HERO.price)}
      </AffiliateLink>
    </div>
  );
}
