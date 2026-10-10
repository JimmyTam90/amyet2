import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-5xl font-extrabold uppercase">Page not found</h1>
      <p className="mt-3 text-zinc-300">That page does not exist. Head back to the e-bike comparison.</p>
      <Link href="/" className="mt-6 inline-flex min-h-[48px] items-center rounded-md bg-crimson px-6 font-display text-lg font-bold uppercase text-white">
        Back to home
      </Link>
    </main>
  );
}
