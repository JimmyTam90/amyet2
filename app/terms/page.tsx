import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { absUrl } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms of Use | PrimeGearLab', alternates: { canonical: absUrl('/terms') } };

export default function Page() {
  return (
    <LegalPage title="Terms of Use">
      <p>Last updated: October 10, 2026. By using this site you agree to these terms.</p>
      <h2>Informational purpose</h2>
      <p>PrimeGearLab is an independent publisher. Content is for general information about products sold by Amyet and is not professional advice. We do not sell products, process payments or ship goods.</p>
      <h2>Accuracy</h2>
      <p>Prices, specifications, stock and policies come from amyet.com at the time we checked them and can change. Always confirm details with Amyet before buying.</p>
      <h2>Local laws and safety</h2>
      <p>You are responsible for following local laws on e-bikes and motorized vehicles, and for riding safely and wearing protective gear.</p>
      <h2>Third-party links</h2>
      <p>We are not responsible for the content, products or policies of other websites, including Amyet.</p>
      <h2>Liability</h2>
      <p>The site is provided as is, without warranties. To the extent allowed by law, we are not liable for losses arising from use of this site.</p>
    </LegalPage>
  );
}
