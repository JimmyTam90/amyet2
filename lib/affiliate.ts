export const MERCHANT_ORIGIN = 'https://www.amyet.com';
const AFFILIATE_REF = 'BUITHANH';

/** Default (fallback) affiliate destination. */
export const DEFAULT_AFFILIATE_URL = `${MERCHANT_ORIGIN}/?ref=${AFFILIATE_REF}`;

/** Builds a product-specific affiliate URL, keeping exactly one ref parameter. */
export function buildAffiliateUrl(productUrl: string): string {
  const url = new URL(productUrl);
  url.searchParams.set('ref', AFFILIATE_REF);
  return url.toString();
}
