export default defineNuxtRouteMiddleware((to) => {
  const isNavigatingToAdmin = to.path.startsWith('/admin')
  const isLoginPage = to.path === '/admin/login'

  if (isNavigatingToAdmin && !isLoginPage) {
    const { isAuthenticated, user } = useAuthStore()
    const isAdmin = isAuthenticated && user?.role.includes('admin')

    if (!isAdmin) {
      return navigateTo('/admin/login')
    }
  }
})
