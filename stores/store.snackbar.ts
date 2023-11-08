import { defineStore } from 'pinia'

export type SnackbarData = {
  text?: string
  timeout?: number
  color?: string
  icon?: string
}

export type Snackbar = {
  isOpen: boolean
  data?: SnackbarData
}

export const useSnackbar = defineStore('snackbars', {
  state: (): Snackbar => ({
    isOpen: false,
    data: {}
  }),
  actions: {
    snackSuccess (text: string) {
      this.snack({
        text,
        color: 'green-darken-2',
        icon: 'mdi-check-circle-outline'
      })
    },
    snackError (text: string) {
      this.snack({
        text,
        color: 'red-darken-2',
        icon: 'mdi-alert-circle-outline'
      })
    },
    snack (data: SnackbarData) {
      this.isOpen = true
      this.data = data
    },
    close () {
      this.isOpen = false
      this.data = {}
    }
  }
})
