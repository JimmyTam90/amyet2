'use client';

import type { ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface Props {
  href: string;
  productId: string;
  placement: string;
  className?: string;
  children: ReactNode;
}

/** Native anchor. Analytics fire without blocking navigation. */
export default function AffiliateLink({ href, productId, placement, className, children }: Props) {
  const onClick = () => {
    try {
      const payload = { product_id: productId, placement, destination: href };
      window.gtag?.('event', 'affiliate_click', { ...payload, transport_type: 'beacon' });
      window.fbq?.('trackCustom', 'AffiliateClick', payload);
    } catch {
      /* analytics must never block navigation */
    }
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" onClick={onClick} className={className}>
      {children}
    </a>
  );
}
