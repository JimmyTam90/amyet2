export type Availability = 'instock' | 'oos';

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductSpecs {
  motor: string;
  speed: string;
  range: string;
  battery: string;
  tires: string;
  suspension: string;
  brakes: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  productUrl: string;
  affiliateUrl: string;
  /** USER_ASSERTED: ref structure supplied by the account owner; commission tracking not independently confirmable. */
  affiliateStatus: 'USER_ASSERTED';
  availability: Availability;
  price: number;
  regularPrice: number;
  currency: 'USD';
  image: ProductImage;
  specs: ProductSpecs;
  highlights: string[];
  lastVerified: string;
  sourcePage: string;
}
