import axios from 'axios';
import { AsyncStorage } from 'react-native'


// 248 
const instance = axios.create({
  baseURL: "http://4d383248.ngrok.io"
});
//  takes  2 functions , first function runs first and second one catches error
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
