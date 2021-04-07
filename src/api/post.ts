import Client from '@/api/client'
import { Post, PostForRequest } from '@/types/post'
import {
  getAuthDataFromStorage
} from '@/utils/auth-data'
import { AxiosResponse } from 'axios'

export const getPosts = async (): Promise<Post[]> => {
  return await Client.get('/posts', { headers: getAuthDataFromStorage() })
    .then((res: AxiosResponse<Post[]>) => {
      return res.data
    })
    .catch((err) => {
      return err.response
    })
}

export const getPost = async (id: string) => {
  return await Client.get(`/posts/${id}`, { headers: getAuthDataFromStorage() })
    .then((response) => {
      return response.data
    })
}

export const createPost = async (formData: PostForRequest) => {
  return await Client.post(
    '/posts', formData,
    {
      headers: getAuthDataFromStorage()
    }
  )
    .then((res: AxiosResponse<Post>) => {
      return res.data
    })
}
