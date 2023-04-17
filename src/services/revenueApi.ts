import axiosClient from "./axiosClient";

  export const RevenueApi = {
    getAll() {
      const url = '/carts'
      return axiosClient.get(url)
    }
  }