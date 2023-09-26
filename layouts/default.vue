<template lang="pug">
v-app
  //- v-app-bar(
  //-   flat
  //-   :color="lgAndUp ? 'background' : 'primary'"
  //-   floating
  //- )
  //-   v-app-bar-title
  //-   v-spacer
  //-   v-btn(
  //-     v-if="user"
  //-     icon="mdi-bell-outline"
  //-   )
  //-   v-menu(
  //-     v-if="user"
  //-     location="bottom"
  //-   )
  //-     template(v-slot:activator="{ props }")
  //-       v-avatar.mr-4.ml-2.clickable(
  //-         v-bind="props"
  //-         size="32px"
  //-         color="info"
  //-       ) {{ user._initials }}

  //-     v-list(min-width="150")
  //-       v-list-item(
  //-         to="/account"
  //-       )
  //-         v-list-item-title Account
  //-       v-list-item(@click="runLogout")
  //-         v-list-item-title Logout
  v-main
    NuxtPage
  Footer
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>
