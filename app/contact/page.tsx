import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { absUrl } from '@/lib/site';
import { CONTACT_EMAIL } from '@/components/Footer';

export const metadata: Metadata = { title: 'Contact | PrimeGearLab', alternates: { canonical: absUrl('/contact') } };

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>Questions about this site or a correction to our content? Email us:</p>
      <p><a className="text-lg underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
      <p>For orders, shipping, returns or warranty, contact Amyet directly. We do not handle orders or support for Amyet products.</p>
    </LegalPage>
  );
}
