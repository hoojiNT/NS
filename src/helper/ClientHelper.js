import axios from 'axios'

const BASE_URL = "http://localhost:1337"

const ClientHelper = {
  get:  (api) => {
    return axios.get(`${BASE_URL}${api}`)
  },
  post: (api, data) => {
    return axios.post(`${BASE_URL}${api}`, data)
  }
}

export  default ClientHelper