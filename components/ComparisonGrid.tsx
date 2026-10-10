'use client';

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { usd } from '@/lib/products';

const ROWS: { label: string; get: (p: Product) => string }[] = [
  { label: 'Motor', get: (p) => p.specs.motor },
  { label: 'Top speed', get: (p) => p.specs.speed },
  { label: 'Max range', get: (p) => p.specs.range },
  { label: 'Battery', get: (p) => p.specs.battery },
  { label: 'Tires', get: (p) => p.specs.tires },
  { label: 'Suspension', get: (p) => p.specs.suspension },
  { label: 'Brakes', get: (p) => p.specs.brakes },
  { label: 'Price from', get: (p) => usd(p.price) },
];

export default function ComparisonGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState(products[0].id);
  return (
    <div>
      <div role="group" aria-label="Highlight a model" className="mb-3 flex flex-wrap gap-2">
        {products.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={active === p.id}
            onClick={() => setActive(p.id)}
            className={`min-h-[44px] rounded-md border-2 px-4 font-display text-base font-bold uppercase ${
              active === p.id ? 'border-crimson bg-crimson text-white' : 'border-steel text-zinc-200'
            }`}
          >
            {p.shortName}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border border-steel">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">Amyet e-bike specification comparison</caption>
          <thead>
            <tr className="bg-graphite">
              <th scope="col" className="p-3 text-zinc-400">Spec</th>
              {products.map((p) => (
                <th key={p.id} scope="col" className={`p-3 font-display text-lg uppercase ${active === p.id ? 'text-crimson' : ''}`}>
                  {p.shortName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.label} className="border-t border-steel">
                <th scope="row" className="p-3 font-normal text-zinc-400">{r.label}</th>
                {products.map((p) => (
                  <td key={p.id} className={`p-3 ${active === p.id ? 'bg-crimson/10 font-semibold' : ''}`}>{r.get(p)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-zinc-500">
        Specs are manufacturer-stated on amyet.com (Oct 10, 2026). Range depends on rider weight, terrain and assist level.
      </p>
    </div>
  );
}
