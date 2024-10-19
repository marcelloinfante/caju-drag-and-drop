import axios from "axios";

import { HOST_API } from "~/config-global";

const axiosInstance = axios.create({ baseURL: HOST_API });

export default axiosInstance;

export const endpoints = {
  registrations: {
    root: "/registrations",
    item: (id: string) => `/registrations/${id}`,
    cpf: (cpf?: string) => `/registrations?cpf=${cpf || ""}`,
  },
};
