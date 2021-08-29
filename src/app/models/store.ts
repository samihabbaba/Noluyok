import { User } from './user';

export interface Store {
  id: string;
  storeName: string;
  phoneNo: number;
  isBrand: boolean;
  email: string;
  ownerName: string;
  ownerSurname: string;
  followers: User[] | null;
}
