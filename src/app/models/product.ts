import { Category } from './cateogory';
import { Store } from './store';

export interface Product {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  colors: Color[] | null;
  sizes: Size[] | null;
  images: any[];
  views: number | null;
  stock: number;
  store: Store;
  price: number;
  discountPrice: number | null;
  shippingPrice: number | null;
}

export interface Color {
  color: string | null;
  stock: number | null;
}

export interface Size {
  size: string | null;
  stock: number | null;
}
