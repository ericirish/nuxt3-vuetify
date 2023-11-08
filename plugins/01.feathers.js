import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { OFetch, createPiniaClient } from 'feathers-pinia'

import { $fetch } from 'ofetch'
import rest from '@feathersjs/rest-client'
import socketio from '@feathersjs/socketio-client'
// eslint-disable-next-line import/no-named-as-default
import io from 'socket.io-client'

import { services } from './../services'

/**
 * Creates a Feathers Rest client for the SSR server and a Socket.io client for the browser.
 * Also provides a cookie-storage adapter for JWT SSR using Nuxt APIs.
 */
export default defineNuxtPlugin((nuxt) => {
  const host = import.meta.env.VITE_MYAPP_API_URL || 'http://localhost:3030'

  const storageKey = 'feathers-jwt'
  const jwt = useCookie(storageKey)
  const storage = {
    getItem: () => jwt.value,
    setItem: (key, val) => (jwt.value = val),
    removeItem: () => (jwt.value = null)
  }

  const connection = socketio(io(host, { transports: ['websocket'] }))

  const feathersClient = feathers()
    .configure(connection)
    .configure(authenticationClient({ storage, storageKey }))

  const api = createPiniaClient(feathersClient, {
    pinia: nuxt.$pinia,
    ssr: !!process.server,
    idField: '_id',
    skipGetIfExists: true,
    services
  })

  return { provide: { api } }
})
