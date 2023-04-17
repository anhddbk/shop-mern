import axios, { AxiosResponse } from 'axios';

export const ResponseCode = {
  Ok: 0,
  Created: 201,
  TokenTimeout: 6,
  AssignedShift: 614,
  PackageTimesheet: 7,
  ConfirmShift: 900,
  CantDelete: 619,
  CameraCategoryExist: 1001,
  CardIdExist: 401,
  InvalidBirthday: 1101,
  CameraAreaExist: 1023,
  CardNumberExist: 1107,
  CameraCodeExist: 1025,
  CannotChangeTypeArea: 1026,
  NOT_LOGGED_IN: 11,
  TOKEN_INVALID: 177,
};

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    let _token: any = localStorage.getItem('auth-n-token');
    if (_token) {
      _token = JSON.parse(_token);
      // config.headers.token = _token.token;
      config.headers.Authorization = _token.token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
