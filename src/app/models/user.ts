import { Address } from './address';
import { Store } from './store';

export interface User {
  id: string;
  name: string;
  surname: string;
  phoneNo: number;
  email: string;
  address: Address;
  followings: Store[];
  wallet: number;
}
