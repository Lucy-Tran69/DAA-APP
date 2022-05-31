import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TOKEN } from "utils/constants";
import { tokenHelper } from "utils/token-helper";
import Config from "./config";

const axiosClient = axios.create({
    baseURL: Config.API_URL.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  axiosClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      const accessToken = tokenHelper.getToken(TOKEN.ACCESS_TOKEN);
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );
  
  axiosClient.interceptors.response.use(
    function(response: AxiosResponse) {
      return handleResponse(response.data);
    },
    function(error: any) {
      const errorBody = error.response.data;
      const message = errorBody.errors[Object.keys(errorBody.errors)[0]][0] || errorBody.message;
      return Promise.reject(message);
    },
  );
  
  const handleResponse = (res: any) => {
    if (res && res.success) {
      return res.data;
    } else {
      return Promise.reject(res.data.message || 'an error occurred while sending the request. Please try again!');
    }
  };
  
  export default axiosClient;
  