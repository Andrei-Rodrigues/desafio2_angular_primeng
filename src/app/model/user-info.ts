import { UserAddress } from "./user-address";

export interface UserInfo {
  name: string;
  age: number;
  phone_number: number;
  email: string;
  address: UserAddress;
}
