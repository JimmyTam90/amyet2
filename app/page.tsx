import ComparisonGrid from '@/components/ComparisonGrid';
import CtaButton from '@/components/CtaButton';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import StickyCta from '@/components/StickyCta';
import TrustStrip from '@/components/TrustStrip';
import { HERO, PRODUCTS } from '@/lib/products';

const FEATURES = [
  { t: 'Switchable dual motors', d: 'The S8 uses two 1000W motors and lets you choose single or dual motor mode.' },
  { t: 'Climbing power', d: 'Amyet states a max slope of up to 35 degrees for the S8. Real results depend on rider weight and terrain.' },
  { t: 'Removable battery', d: 'S8, V9-G60 and EB26 all use removable 48V packs, so you can charge indoors.' },
  { t: 'Fat tires and suspension', d: 'Fat tires with a suspension fork or dual shocks for sand, gravel, dirt and rough pavement.' },
  { t: 'Strong brakes', d: 'The S8 lists hydraulic disc brakes. The V9-G60 and EB26 list dual disc brakes.' },
  { t: 'Built for load', d: 'All three list a 330 lb maximum load.' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <TrustStrip />

        <section id="models" aria-labelledby="models-title" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="models-title" className="font-display text-3xl font-bold uppercase sm:text-4xl">
            Three in-stock Amyet e-bikes
          </h2>
          <p className="mt-2 max-w-prose text-zinc-300">
            Pick by motor setup, battery size and tire size. Each button opens that exact model on Amyet.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section id="compare" aria-labelledby="compare-title" className="border-y border-steel bg-graphite/50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="compare-title" className="font-display text-3xl font-bold uppercase sm:text-4xl">
              Compare the specs
            </h2>
            <div className="mt-6">
              <ComparisonGrid products={PRODUCTS} />
            </div>
          </div>
        </section>

        <section aria-labelledby="why-title" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="why-title" className="font-display text-3xl font-bold uppercase sm:text-4xl">
            What you get with these bikes
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.t} className="rounded-lg border border-steel bg-graphite p-4">
                <h3 className="font-display text-xl font-bold uppercase">{f.t}</h3>
                <p className="mt-2 text-sm text-zinc-300">{f.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="who-title" className="border-y border-steel bg-graphite/50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="who-title" className="font-display text-3xl font-bold uppercase sm:text-4xl">Which one fits you</h2>
            <ul className="mt-6 max-w-prose list-disc space-y-3 pl-5 text-zinc-300">
              <li>Steep hills, loose ground or heavy loads: look at the S8 for its dual motors.</li>
              <li>Fast fat tire riding on a lower budget: the V9-G60 has one motor and a 48V 20Ah battery.</li>
              <li>Lowest price with bigger 26 inch wheels: the EB26, with a top speed of 28 MPH.</li>
              <li>Check your local e-bike and motor vehicle rules first, especially for higher-speed models.</li>
            </ul>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 py-12">
          <h2 id="faq-title" className="font-display text-3xl font-bold uppercase sm:text-4xl">Questions before you buy</h2>
          <div className="mt-6">
            <Faq />
          </div>
        </section>

        <section aria-labelledby="final-title" className="border-t border-steel bg-gradient-to-b from-graphite to-ink">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center">
            <h2 id="final-title" className="font-display text-3xl font-bold uppercase sm:text-4xl">
              Ready to check today&apos;s S8 price?
            </h2>
            <p className="mx-auto mt-3 max-w-prose text-zinc-300">
              You&apos;ll finish checkout on Amyet. Prices, stock and policies are set by Amyet.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <CtaButton href={HERO.affiliateUrl} productId={HERO.id} placement="final-primary">
                Shop the S8 on Amyet
              </CtaButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
