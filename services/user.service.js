import { useDataStore } from 'feathers-pinia'

export const useUserStore = defineStore('users', () => {
  const $pinia = usePinia()

  const utils = useDataStore({
    idField: '_id',
    setupInstance: (data, { api, service, servicePath }) => {
      const withDefaults = useInstanceDefaults({ firstName: '', lastName: '' }, data)

      Object.defineProperty(withDefaults, 'fullName', {
        enumerable: false,
        configurable: true,
        get () {
          return `${this.firstName} ${this.lastName}`
        }
      })

      return withDefaults
    }
  })
  return { ...utils }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

export const users = {}
