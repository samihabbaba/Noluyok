import { User } from './user';

export interface Store {
  id: string | null;
  storeName: string | null;
  storeImage: any | null;
  phoneNo: number | null;
  isBrand: boolean | null;
  email: string | null;
  ownerName: string | null;
  ownerSurname: string | null;
  productsCount: number | null;
  followers: User[] | null;
  wallet: number | null;
}
