export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()
  const valid = !!(auth.isAuthenticated && auth.user)

  return valid || navigateTo('/')
})
