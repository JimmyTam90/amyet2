import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-steel bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Link href="/" aria-label="PrimeGearLab home" className="flex min-h-[44px] items-center">
        <Image src="/amyet/logo.png" alt="PrimeGearLab" width={160} height={40} priority className="h-9 w-auto" />
        </Link>
        <p className="text-right text-xs leading-tight text-zinc-400">
          Independent buyer&apos;s guide.
          <br className="sm:hidden" /> Not the Amyet store.
        </p>
      </div>
    </header>
  );
}
