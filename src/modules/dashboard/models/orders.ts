import { User } from 'modules/auth/models';

export interface Product {
  title?: string;
  price?: number;
  discountPrice?: number;
  quantity?: number;
  total?: number;
}

export interface Orders {
  orderItems: Product;
  shippingAddress1: string;
  shippingAddress2: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  status?: string | 'Pending';
  totalPrice: string;
  user: User;
  dateOrdered: Date;
}
