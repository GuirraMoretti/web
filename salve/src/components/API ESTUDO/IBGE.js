import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://brasilapi.com.br',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });