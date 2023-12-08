// src/store/store.auth.ts
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useAuth } from 'feathers-pinia'

export const useAuthStore = defineStore('auth', () => {
  const { public: { apiUrl } } = useRuntimeConfig()
  const { api } = useFeathers()
  const utils = useAuth({
    api,
    servicePath: 'users'
  })

  utils.reAuthenticate()

  const login = () => {
    window.location.href = `${apiUrl}/oauth/google`
  }

  const logout = () => {
    utils.logout()
    reloadNuxtApp({ path: '/' })
  }

  return { ...utils, login, logout }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
