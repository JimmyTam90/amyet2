export const SITE_ORIGIN = 'https://primegearlab.com';
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
/** Public root of this site, e.g. https://primegearlab.com/amyet */
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

/** Absolute URL for a site path such as '/privacy'. Pass '' for the home page. */
export const absUrl = (path = ''): string => `${SITE_URL}${path}`;
