import axios from 'axios';

const HOST = "http://localhost:3001/";
const idToken = ''

export const API = {
  GET: async (endpoint: string) => {
    return await axios.get(`${HOST}${endpoint}`, {headers: {'Authorization': `Bearer ${idToken}`}},)
      .then((response) => response)
      .catch(e => {
        throw e
      })
  },
  POST: async (endpoint: string, data: any) => {
    return await axios.post(`${HOST}${endpoint}`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json'
        },

      })
      .then((response) => response)
      .catch((e) => {
        throw e
      })
  },

  PUT: async (endpoint: string, data: any) => {
    return await axios.put(`${HOST}${endpoint}`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json'
        }
      },).then((response) => response)
      .catch(e => {
        throw e
      })
  },
  DELETE: async (endpoint: string) => {
    return await axios.delete(`${HOST}${endpoint}`, {
      headers: {'Authorization': `Bearer ${idToken}`}
    },).then((response) => response)
      .catch(e => {
        throw e
      })
  }
}
