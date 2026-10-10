const ITEMS = [
  { title: 'Free shipping', body: 'Amyet lists 4-7 working days.' },
  { title: 'Ships fast', body: 'In-stock items ship within 1-2 business days, per Amyet.' },
  { title: '30-day returns', body: 'Return window listed on product pages.' },
  { title: '1-year warranty', body: 'Limited warranty listed by Amyet.' },
];

export default function TrustStrip() {
  return (
    <section aria-label="Merchant policies" className="border-b border-steel bg-ink">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 md:grid-cols-4">
        {ITEMS.map((i) => (
          <li key={i.title} className="rounded-md border border-steel bg-graphite p-3">
            <p className="font-display text-lg font-bold uppercase">{i.title}</p>
            <p className="mt-1 text-sm text-zinc-400">{i.body}</p>
          </li>
        ))}
      </ul>
      <p className="mx-auto max-w-6xl px-4 pb-5 text-xs text-zinc-500">
        Policy details come from Amyet&apos;s own pages and may change. Confirm them at checkout.
      </p>
    </section>
  );
}
