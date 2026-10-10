import type { ReactNode } from 'react';
import AffiliateLink from './AffiliateLink';

interface Props {
  href: string;
  productId: string;
  placement: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function CtaButton({ href, productId, placement, children, variant = 'primary' }: Props) {
  const base =
    'flex min-h-[48px] w-full items-center justify-center rounded-md px-5 py-3 text-center font-display text-lg font-bold uppercase tracking-wide transition-colors sm:w-auto';
  const styles =
    variant === 'primary'
      ? 'bg-crimson text-white hover:bg-crimson-dark'
      : 'border-2 border-steel text-zinc-100 hover:border-crimson';
  return (
    <AffiliateLink href={href} productId={productId} placement={placement} className={`${base} ${styles}`}>
      {children}
    </AffiliateLink>
  );
}
