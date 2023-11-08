export default defineNuxtRouteMiddleware(async (to, _from) => {
  const auth = useAuthStore()

  await auth.getPromise()
})
