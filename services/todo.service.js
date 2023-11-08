import { defineGetters } from 'feathers-pinia'

export const todos = {
  setupInstance (todo, { app }) {
    const withDefaults = useInstanceDefaults({ firstName: 'Philip' }, todo)

    defineGetters(withDefaults, {
      fullName () {
        return `${todo.firstName} ${todo.lastName}`
      }
    })

    return todo
  }
}
