export interface CartItem {
  product: { id: string; name: string; price: number; discountPrice: number };
  store: { id: string; name: string };
  quantity: number;
}
