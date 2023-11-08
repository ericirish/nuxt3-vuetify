import { users } from './user.service'
import { todos } from './todo.service'

export * from './user.service'
export * from './todo.service'

export const services = {
  users,
  todos
}
