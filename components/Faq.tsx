'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Are these bikes legal on public roads and trails?',
    a: 'Not necessarily. Several models list top speeds above 28 MPH and the S8 uses dual 1000W motors, which can exceed common e-bike class limits. Rules vary by state, city and trail. Check your local laws before you ride in public.',
  },
  {
    q: 'What is the difference between the S8 and the V9-G60?',
    a: 'The S8 has two 1000W motors with switchable all-wheel drive and a 48V 25Ah battery. The V9-G60 has one 1000W motor and a 48V 20Ah battery, and costs less.',
  },
  {
    q: 'Does PrimeGearLab sell these bikes?',
    a: 'No. PrimeGearLab is an independent publisher. Buttons send you to Amyet, which handles checkout, shipping, returns and warranty.',
  },
  {
    q: 'Are the prices and stock levels guaranteed?',
    a: 'No. They were observed on amyet.com on Oct 10, 2026 and can change. The price at Amyet checkout is the one that applies.',
  },
  {
    q: 'What warranty and returns does Amyet list?',
    a: 'Amyet lists a 1-year limited warranty and a 30-day return window on these product pages. Read Amyet\u2019s warranty and return policies before you buy.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-steel rounded-lg border border-steel">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[48px] w-full items-center justify-between gap-4 p-4 text-left font-semibold"
              >
                <span>{f.q}</span>
                <span aria-hidden="true" className="text-xl text-crimson">{isOpen ? '\u2212' : '+'}</span>
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-4 pb-4 text-zinc-300">
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
