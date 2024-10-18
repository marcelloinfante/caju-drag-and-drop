import axios from "axios";

import { HOST_API } from "~/config-global";

const axiosInstance = axios.create({ baseURL: HOST_API });

export default axiosInstance;

export const endpoints = {
  registration: {
    root: "/registration",
    item: (id: string) => `/registration/${id}`,
    cpf: (cpf?: string) => `/registration?cpf=${cpf}`,
  },
};
