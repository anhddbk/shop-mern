import { Product } from "modules/dashboard/models/orders";
import axiosClient from "./axiosClient";

export const OrdersApi = {
  getAll() {
    const url = '/carts/1'
    return axiosClient.get<Product[]>(url)
  }
}