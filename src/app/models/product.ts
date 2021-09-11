import { Category } from './cateogory';
import { Store } from './store';

export interface Product {
  id: string;
  title: string;
  description?: string | null;
  category: Category | any;
  colors?: Color[] | null;
  sizes?: Size[] | null;
  images?: any[] | null;
  views?: number | null;
  stock?: number | null;
  store: Store | any;
  price: number;
  discountPrice: number | null;
  shippingPrice: number | null;
  isFavorite?: boolean | null
}

export interface Color {
  color: string | null;
  stock: number | null;
}

export interface Size {
  size: string | null;
  stock: number | null;
}
