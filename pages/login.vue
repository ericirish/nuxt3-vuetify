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

      .d-flex.align-center.justify-center.w-100.h-100
        .clickable(
          v-if="!auth.isAuthenticated"
          @click="auth.login"
        )
          //- v-img.flex-grow-0(
          //-   contain
          //-   width="200px"
          //-   src="/images/google/web_light_rd_SI@1x.png"
          //-   srcset="/images/google/web_light_rd_SI@2x.png 2x, /images/google/web_light_rd_SI@3x.png 3x, /images/google/web_light_rd_SI@4x.png 4x"
          //-   alt="Sign in with Google"
          //-   height="40px"
          //- )
</template>
