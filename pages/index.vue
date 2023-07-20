<template lang="pug">
v-app
  v-app-bar(
    flat
    :color="lgAndUp ? 'background' : 'primary'"
    floating
  )
    v-app-bar-title
      .d-flex.align-center
        nuxt-link.text-decoration-none.text-primary(
          :to="isAuthenticated ? '/dashboard' : '/'"
        )
          Wordmark(
            style='height: 16px'
            :white='!lgAndUp'
          )
        ListingCodeSearch
    v-spacer
    v-btn(
      v-if="user"
      icon="mdi-bell-outline"
    )
    v-menu(
      v-if="user"
      location="bottom"
    )
      template(v-slot:activator="{ props }")
        v-avatar.mr-4.ml-2.clickable(
          v-bind="props"
          size="32px"
          color="info"
        ) {{ user._initials }}

      v-list(min-width="150")
        v-list-item(
          to="/account"
        )
          v-list-item-title Account
        v-list-item(@click="runLogout")
          v-list-item-title Logout

  //- v-navigation-drawer.bg-primary(
  //-   v-model="drawer"
  //-   temporary
  //- )
    v-list
      v-list-item(
        title="Home"
        to="/"
        nuxt
      )
      v-list-item(
        title="Listings"
        to="/agents/asefesf/listings"
        nuxt
      )
  v-main
    NuxtPage
  Footer
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { isClient } = useViewer()
const { lgAndUp, mdAndUp } = useDisplay()
const router = useRouter()
const drawer = ref(false)
const { user, isAuthenticated, logout } = useAuthStore()

const runLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>