import Client from '@/api/client'
import {
  getAuthDataFromStorage
} from '@/utils/auth-data'

export const getPosts = async () => {
  return await Client.get('users/1/posts', { headers: getAuthDataFromStorage() })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getPost = async (id: string) => {
  return await Client.get(`/posts/${id}`, { headers: getAuthDataFromStorage })
    .then((response) => {
      return response.data
    })
}
