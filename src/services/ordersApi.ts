import axiosClient from "./axiosClient";

export const getOrders = () => {
  return fetch('https://dummyjson.com/carts/1').then((res) => res.json());
};

export const OrdersApi = {
  getAll() {
    const url = '/carts/1'
    return axiosClient.get(url)
  }
}