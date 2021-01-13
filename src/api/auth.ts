import Client from '@/api/client'

export const login = async (email: string, password: string) => {
  return await Client.post('/auth/sign_in', { email, password })
    .then((response) => {
      return response.data
    })
}
