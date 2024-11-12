// plugins/1.feathers.ts
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { createPiniaClient, defineGetters, defineSetters, OFetch } from 'feathers-pinia'

// rest imports for the server
import { $fetch } from 'ofetch'
import rest from '@feathersjs/rest-client'

// socket.io imports for the browser
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

import { services } from '../services'

/**
 * Creates a Feathers Rest client for the SSR server and a Socket.io client for the browser.
 * Also provides a cookie-storage adapter for JWT SSR using Nuxt APIs.
 */
export default defineNuxtPlugin(async (nuxt) => {
  const host = import.meta.env.VITE_MYAPP_API_URL as string || 'http://localhost:3030'

  // Store JWT in a cookie for SSR.
  const storageKey = 'feathers-jwt'
  const jwt = useCookie<string | null>(storageKey)
  const storage = {
    getItem: () => jwt.value,
    setItem: (key: string, val: string) => (jwt.value = val),
    removeItem: () => (jwt.value = null)
  }

  // Use Rest for the SSR Server and socket.io for the browser
  const connection = process.server
    ? rest(host).fetch($fetch, OFetch)
    : socketio(io(host, { transports: ['websocket'] }))

  // create the feathers client
  const feathersClient = feathers()
    .configure(connection)
    .configure(authenticationClient({ storage, storageKey }))

  // wrap the feathers client
  const api = createPiniaClient(feathersClient, {
    pinia: nuxt.$pinia,
    ssr: !!process.server,
    idField: '_id',
    whitelist: [],
    paramsForServer: [''],
    skipGetIfExists: true,
    customSiftOperators: {},
    setupInstance (data) {
      return data
    },
    customizeStore (defaultStore) {
      return {}
    },
    services: {
      ...services
    }
  })

  return { provide: { api } }
})
