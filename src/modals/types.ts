export interface IProduct {
  readonly id: string;
  readonly image: string;
  readonly images: string[];
  readonly name: string;
  readonly miktar: number;
  readonly fiyat: number;
  readonly fiyatIndirimli?: number;
}

export interface ICategory {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly subCategories?: string[];
}

export interface IFiltering {
  readonly id: string;
  readonly name: string;
}
