import axiosClient from './axiosClient';

export const CustomersApi = {
  getAll() {
    const url = '/users';
    return axiosClient.get(url);
  },
};
