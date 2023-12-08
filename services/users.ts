import { defineGetters } from 'feathers-pinia'

export const users = {
  setupInstance (data: any, { app: api }: any) {
    const withDefaults = useInstanceDefaults({ firstName: 'Philip' }, data)

    defineGetters(withDefaults, {
      fullName () {
        return `${data.firstName} ${data.lastName}`
      }
    })

    return data
  }
}
