import { buildAffiliateUrl } from './affiliate';
import type { Product } from './types';

const IMG = 'https://www.amyet.com/cdn/shop/files';
const VERIFIED_ON = '2026-10-10';

function make(p: Omit<Product, 'affiliateUrl' | 'affiliateStatus' | 'availability' | 'currency' | 'lastVerified'>): Product {
  return {
    ...p,
    affiliateUrl: buildAffiliateUrl(p.productUrl),
    affiliateStatus: 'USER_ASSERTED',
    availability: 'instock',
    currency: 'USD',
    lastVerified: VERIFIED_ON,
  };
}

/** Single source of truth. Only products confirmed in stock on the merchant site are listed. */
export const PRODUCTS: Product[] = [
  make({
    id: 's8',
    name: 'AMYET S8 Dual Motor Electric Bike',
    shortName: 'S8 Dual Motor',
    tagline: 'Dual 1000W motors (3000W peak) with switchable all-wheel drive.',
    productUrl: 'https://www.amyet.com/products/amyet-s8-ebike',
    price: 1049,
    regularPrice: 1599,
    image: {
      src: `${IMG}/d7cf8746159726355664c973c03e53bd.jpg?v=1788493249&width=1600`,
      alt: 'AMYET S8 dual motor electric bike in black',
      width: 1600,
      height: 1600,
    },
    specs: {
      motor: '2 x 1000W (3000W peak)',
      speed: '32 MPH',
      range: 'Up to 75 mi',
      battery: '48V 25Ah, removable',
      tires: '20" x 4.0" fat',
      suspension: 'Full-suspension fork',
      brakes: 'Hydraulic disc',
    },
    highlights: ['Single or dual motor mode', 'Max slope up to 35 degrees (manufacturer-stated)', 'Removable IP54 battery'],
    sourcePage: 'https://www.amyet.com/products/amyet-s8-ebike',
  }),
  make({
    id: 'g60',
    name: 'AMYET V9-G60 Fat Tire Electric Bike',
    shortName: 'V9-G60 Fat Tire',
    tagline: '1000W (1500W peak) fat tire all-rounder with dual suspension.',
    productUrl: 'https://www.amyet.com/products/amyet-g60-1000w-20ah-electric-bike',
    price: 689,
    regularPrice: 899,
    image: {
      src: `${IMG}/V9-G60-B.jpg?v=1728290505&width=1500`,
      alt: 'AMYET V9-G60 fat tire electric bike in black',
      width: 1500,
      height: 1500,
    },
    specs: {
      motor: '1000W (1500W peak)',
      speed: '32 MPH',
      range: 'Up to 65 mi',
      battery: '48V 20Ah, removable',
      tires: '20" x 4" fat',
      suspension: 'Dual suspension',
      brakes: 'Dual disc',
    },
    highlights: ['UL 2849 listed by merchant', 'Shimano 7-speed', 'Headlight, taillight, turn signals and horn'],
    sourcePage: 'https://www.amyet.com/products/amyet-g60-1000w-20ah-electric-bike',
  }),
  make({
    id: 'eb26',
    name: 'AMYET EB26 26" Fat Tire Electric Bike',
    shortName: 'EB26 Fat Tire',
    tagline: 'Big 26-inch fat tires for rougher trails at the lowest price here.',
    productUrl: 'https://www.amyet.com/products/eb26',
    price: 669,
    regularPrice: 799,
    image: {
      src: `${IMG}/EB26-B.jpg?v=1727509849&width=1500`,
      alt: 'AMYET EB26 fat tire electric bike in black',
      width: 1500,
      height: 1500,
    },
    specs: {
      motor: '1000W (1500W peak)',
      speed: '28 MPH',
      range: 'Up to 60 mi',
      battery: '48V 15Ah, removable (720Wh)',
      tires: '26" x 4" fat',
      suspension: 'Lockable dual shock absorbers',
      brakes: 'Dual mechanical disc',
    },
    highlights: ['UL 2849 listed by merchant', '330 lb max load', '90% pre-assembled'],
    sourcePage: 'https://www.amyet.com/products/eb26',
  }),
];

export const HERO = PRODUCTS[0];
export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;
export const savings = (p: Product) => p.regularPrice - p.price;
