import axios from 'axios';

const HOST = "http://localhost:3001/";
const idToken = ''

export const API = {
    GET: async (endpoint) => {
        return await axios.get(`${HOST}${endpoint}`, {headers: {'Authorization': `Bearer ${idToken}`}},
        ).then(response => {
           return response;
        }).catch(e => {
            throw e
        })
    },
    POST: async (endpoint, data) => {
        return await axios.post(`${HOST}${endpoint}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json'
                },

            })
            .then((response) => {

            })
            .catch((e) => {
                throw e
            })
    },

    PUT: async (endpoint, data) => {
        return await axios.put(`${HOST}${endpoint}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json'
                }
            },
        ).then(response => {

        }).catch(e => {
            throw e

        })
    },
    DELETE: async (endpoint) => {
        return await axios.delete(`${HOST}${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            },
        ).then(response => {

        }).catch(e => {
            console.log(e)
            throw e
        })
    }

}
