import axios from "axios";
import { useAuthStore } from "../stores";

const baseUrl = import.meta.env.VITE_HOST_API;

const tesloApi = axios.create({
  baseURL: baseUrl,
});

tesloApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export { tesloApi };
