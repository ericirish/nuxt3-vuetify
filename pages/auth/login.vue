<script setup>
definePageMeta({
  layout: 'blank'
})

const state = reactive({
  email: '',
  password: ''
})

const { authenticate } = useAuthStore()
const { valid, rules } = useFormValidations()

const login = async () => {
  try {
    await authenticate({ strategy: 'local', ...state })
  } catch (e) {
    console.log('Invalid Login')
  }
}
</script>

<template lang="pug">
v-container
  v-row(
    style='min-height: 90vh'
    justify='center'
    align='center'
  )
    v-col(
      cols='12'
      md='6'
      lg='4'
    )
      v-form(
        v-model="valid"
        @submit.prevent="login"
      )
        v-card.mb-6
          v-card-title
            .text-overline Login
          v-card-text
            v-text-field(
              label='Email'
              type='email'
              v-model="state.email"
              :rules="[rules.email, rules.required]"
            )
            v-text-field(
              label='Password'
              type='password'
              v-model="state.password"
              :rules="[rules.required]"
            )
            v-btn.mb-4(
              type='submit'
              block
              :disabled="!valid"
              color='primary'
              height='50px'
            ) Login

            nuxt-link(to='/auth/register')
              | Create an Account
</template>
