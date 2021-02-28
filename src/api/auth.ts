import Client from '@/api/client'
import {
  getAuthDataFromStorage,
  removeAuthDataFromStorage,
  setAuthDataFromResponse
} from '@/utils/auth-data'

export const login = async (email: string, password: string) => {
  return await Client.post('/auth/sign_in', { email, password })
    .then((response) => {
      setAuthDataFromResponse(response.headers)
      return response.data
    })
}

export const logout = async () => {
  return await Client.delete('/auth/sign_out', { headers: getAuthDataFromStorage() })
    .then(() => {
      removeAuthDataFromStorage()
    })
}

export const validateToken = async () => {
  return await Client.get('/auth/validate_token', { headers: getAuthDataFromStorage() })
    .then((response) => {
      setAuthDataFromResponse(response.headers)
      return response.data
    })
}
