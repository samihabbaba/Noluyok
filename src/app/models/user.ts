import { Store } from './store';

export interface User {
  id: string;
  name: string;
  surname: string;
  phoneNo: number;
  email: string;
  followings: Store[];
}
