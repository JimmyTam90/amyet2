import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/components/Footer';

export const metadata: Metadata = { title: 'Privacy Policy | PrimeGearLab', alternates: { canonical: '/privacy' } };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: October 10, 2026. This page explains how PrimeGearLab (&quot;we&quot;) handles information on this site.</p>
      <h2>What we collect</h2>
      <p>We do not ask you to create an account or submit personal details on this site. If analytics or advertising tags are enabled, they may collect technical data such as pages viewed, device and browser type, approximate location and the link you clicked.</p>
      <h2>Cookies and tracking</h2>
      <p>We may use Google Analytics, Google Ads and Meta Pixel to measure traffic and ad performance. These services may set cookies. You can limit them through your browser settings or the ad settings of those providers.</p>
      <h2>Third-party sites</h2>
      <p>Links lead to Amyet (amyet.com). Amyet collects and uses your data under its own privacy policy once you leave this site.</p>
      <h2>Contact</h2>
      <p>Questions about privacy: <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      <p>This page is general information and not legal advice.</p>
    </LegalPage>
  );
}
