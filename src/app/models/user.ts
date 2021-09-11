import { Address } from './address';
import { Store } from './store';

export interface User {
  id: string | null;
  name: string | null;
  surname: string | null;
  phoneNo: number | null;
  email: string | null;
  password: string | null;
  address: Address | null;
  followings: Store[] | null;
  wallet: number | null;
}
