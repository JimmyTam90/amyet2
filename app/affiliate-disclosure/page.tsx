import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { absUrl } from '@/lib/site';

export const metadata: Metadata = { title: 'Affiliate Disclosure | PrimeGearLab', alternates: { canonical: absUrl('/affiliate-disclosure') } };

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>We may receive a commission if you make a purchase through links on this page at no extra cost to you.</p>
      <p>PrimeGearLab is an independent publisher and is not owned by, operated by, or an official partner of Amyet. Links to amyet.com carry an affiliate reference so a purchase can be credited to us.</p>
      <p>Commissions help fund this site. They do not change the price you pay.</p>
    </LegalPage>
  );
}
