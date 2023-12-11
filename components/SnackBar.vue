<script setup>
import { storeToRefs } from 'pinia'

const snackbarStore = useSnackbar()
const { isOpen, data } = storeToRefs(snackbarStore)
</script>

<template lang="pug">
v-snackbar(
  v-model="isOpen"
  :timeout="data.timeout"
  color="white"
)
  .d-flex.pa-2.align-middle
    v-icon( v-if="data.icon" :color="data.color" ) {{  data.icon }}
    .text-subtitle-2.ml-2( :class="'text-' + data.color" ) {{ data.text }}
  template( #actions )
    v-btn(
      color="grey"
      icon="mdi-close"
      variant="plain"
      @click="snackbarStore.close()"
    )
</template>
