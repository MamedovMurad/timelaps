// utils/axiosInstance.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { useMessageStore } from "../store/useMessageStore";


class AxiosSingleton {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosSingleton.instance) {
      AxiosSingleton.instance = axios.create({
        baseURL:"https://api.tlb.az/api/v1/", //"https://api.mydisk.az/api/v1/", 
        timeout: 10000,
      });

      // Request Interceptor
      AxiosSingleton.instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
          const token = localStorage.getItem("agent");

          config.headers = config.headers ?? {};

          const isFormData = config.data instanceof FormData;
          config.headers["Content-Type"] = isFormData
            ? "multipart/form-data"
            : "application/json";

          if (token) {
            config.headers["Authorization"] = `${token}`;
          }

          return config;
        },
        (error: AxiosError) => {
          return Promise.reject(error);
        }
      );

      // Response Interceptor
      AxiosSingleton.instance.interceptors.response.use(
        (response: AxiosResponse): AxiosResponse => {
          // Get messageApi from Zustand store
          const messageApi = useMessageStore.getState().messageApi;


          // Show success message for all successful responses except GET requests
          if (response.config.method !== "get" && messageApi) {
            messageApi.success("Əməliyyat uğurla tamamlandı!");
          }

          return response;
        },
        (error: AxiosError<{ message?: string }>) => {
          const messageApi = useMessageStore.getState().messageApi;
          const status = error?.response?.status;
          const errorMsg =
            error.response?.data?.message || error.message || "Xəta baş verdi";

          // Handle errors with appropriate messages
          if (messageApi) {
            switch (status) {
              case 400:
                console.log(messageApi,'dfasfasd');
                messageApi.error("Xəta: 400 - Bad Request");
                break;
              case 401:
                messageApi.error("Sessiya bitdi, yenidən daxil olun.");
                localStorage.removeItem("token");
                // Optionally redirect to login page
                // window.location.href = "/login";
                break;
              case 403:
                messageApi.error("İcazəniz yoxdur.");
                break;
              case 404:
                messageApi.error("Tapılmadı.");
                break;
              case 500:
                messageApi.error("Daxili server xətası.");
                break;
              default:
                messageApi.error(errorMsg);
                break;
            }
          }

          return Promise.reject(error);
        }
      );
    }

    return AxiosSingleton.instance;
  }
}

export default AxiosSingleton;
