import Link from 'next/link';

export const CONTACT_EMAIL = 'daniaengracia26377@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t border-steel bg-graphite">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400">
        <p className="font-display text-xl font-bold uppercase text-zinc-100">PrimeGearLab</p>
        <p className="mt-3 max-w-prose">
          We may receive a commission if you make a purchase through links on this page at no extra cost to you.
        </p>
        <nav aria-label="Legal" className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
          <Link className="inline-flex min-h-[44px] items-center underline" href="/privacy">Privacy</Link>
          <Link className="inline-flex min-h-[44px] items-center underline" href="/terms">Terms</Link>
          <Link className="inline-flex min-h-[44px] items-center underline" href="/affiliate-disclosure">Affiliate disclosure</Link>
          <Link className="inline-flex min-h-[44px] items-center underline" href="/contact">Contact</Link>
        </nav>
        <p className="mt-2">
          Contact Email:{' '}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p className="mt-4">
          &copy; 2026 PrimeGearLab. All rights reserved. Managed &amp; Operated in partnership with authorized media agency partners.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          PrimeGearLab is an independent publisher and is not affiliated with, owned by, or operated by Amyet. Amyet
          names and product images belong to their owners.
        </p>
      </div>
    </footer>
  );
}
