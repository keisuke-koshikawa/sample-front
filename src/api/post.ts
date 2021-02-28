import Client from '@/api/client'
import {
  getAuthDataFromStorage,
  getAuthDataFromStorageWithFormData
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
  return await Client.get(`users/1/posts/${id}`, { headers: getAuthDataFromStorage })
    .then((response) => {
      return response.data
    })
}

export const createPost = async (formData: any) => {
  return await Client.post(
    'users/1/posts', formData,
    {
      headers: getAuthDataFromStorageWithFormData()
    }
  )
    .then((response) => {
      return response.data
    })
}
