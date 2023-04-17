import axiosClient from './axiosClient';

export const CommentsApi = {
  getAll() {
    const url = '/comments';
    return axiosClient.get(url);
  },
};
