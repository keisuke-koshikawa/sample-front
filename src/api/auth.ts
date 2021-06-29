import Client from '@/api/client'
import {
  getAuthDataFromStorage,
  removeAuthDataFromStorage,
  setAuthDataFromResponse
} from '@/utils/auth-data'
import { AxiosResponse } from 'axios'
import { User } from '@/types/user'

export const login = async (email: string, password: string): Promise<AxiosResponse<User>> => {
  return await Client.post('/auth/sign_in', { email, password })
    .then((res: AxiosResponse<User>) => {
      setAuthDataFromResponse(res.headers)
      return res
    })
}

export const logout = async (): Promise<void> => {
  return await Client.delete('/auth/sign_out', { headers: getAuthDataFromStorage() })
    .then(() => {
      removeAuthDataFromStorage()
    })
}

export const validateToken = async () => {
  return await Client.get('/auth/validate_token', { headers: getAuthDataFromStorage() })
    .then((res: AxiosResponse<User>) => {
      setAuthDataFromResponse(res.headers)
      return res
    })
}
