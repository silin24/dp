import axios from "axios";
import qs from "qs";


const instance = axios.create({
  baseURL: 'api',
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config;
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log(error)
    return new Promise(() => {});
  }
);

export default instance;
