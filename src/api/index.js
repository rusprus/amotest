import axios from 'axios'
import { AmoHeaders } from '@/env'

const amoConfig = {
    baseURL: AmoHeaders.base_domain,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AmoHeaders.access_token}`,
      // 'Access-Control-Allow-Origin':'http://localhost:8080'
    }
  }
  
  
  // axios.interceptors.response.use(function (response) {
  //   // Optional: Do something with response data
  //   return response;
  // }, function (error) {
  //   // Do whatever you want with the response error here:
  //   // But, be SURE to return the rejected promise, so the caller still has
  //   // the option of additional specialized handling at the call-site:
  //   return Promise.reject(error);
  // });
  
  export const AmoAPIInstance = axios.create(amoConfig)




