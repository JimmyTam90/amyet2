import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl font-extrabold uppercase">{title}</h1>
        <div className="mt-6 space-y-4 text-zinc-300 [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-zinc-100">
          {children}
        </div>
        <p className="mt-8"><Link className="underline" href="/">Back to home</Link></p>
      </main>
      <Footer />
    </>
  );
}
