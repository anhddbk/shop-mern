import axiosClient from './axiosClient';

export const InventoryApi = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },
};
