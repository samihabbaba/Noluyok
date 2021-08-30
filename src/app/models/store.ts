import { User } from './user';

export interface Store {
  id: string;
  storeName: string;
  storeImage: any;
  phoneNo: number;
  isBrand: boolean;
  email: string;
  ownerName: string;
  ownerSurname: string;
  productsCount: number | null;
  followers: User[] | null;
  wallet: number;
}
