import { Category } from "./cateogory";
import { Store } from "./store";

export interface Product {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  colors: any[] | null;
  sizes: any[] | null;
  images: any[];
  views: number | null;
  store: Store;
  price: number;
  discountPrice: number | null;
  shippingPrice: number | null;
}
