<script setup lang="ts">
const { authenticate } = useAuthStore()

const route = useRoute()
const router = useRouter()
const user = useUserStore()
const confirmPassword = ref('')
const isCreating = ref(false)

const save = async () => {
  // if (user.password === confirmPassword.value) {
  //   isCreating.value = true

  //   try {
  //     await user.save()
  //     const login = {
  //       email: user.email,
  //       password: user.password
  //     }
  //     await authenticate({ strategy: 'local', ...login })

  //     router.push('/dashboard')
  //   } catch (e) {
  //     console.log('Error creating account')
  //     console.log(e)
  //   } finally {
  //     isCreating.value = false
  //   }
  // }
}
</script>

<template lang="pug">
FormWrapper(
  @submit="save()"
  v-slot="{ valid, rules }"
)
  slot(name='header')
    .py-3.px-6.d-flex.align-center
      v-icon.mr-2(
        size='small'
        color='primary'
      ) mdi-rocket
      .text-overline Let's get started
  v-card.mb-6.py-4.px-6
    v-card-text
      v-row
        v-col(
          cols='12'
          md='6'
        )
          v-text-field(
            v-model="user.firstName"
            label='First Name'
            :rules="[rules.required]"
          )
        v-col(
          cols='12'
          md='6'
        )
          v-text-field(
            v-model="user.lastName"
            label='Last Name'
            :rules="[rules.required]"
          )

      v-text-field(
        v-model="user.email"
        append-inner-icon="mdi-email"
        label='Email'
        type='email'
        :rules="[rules.required, rules.email]"
      )
      v-text-field(
        v-model="user.phone"
        label='Phone'
        type='tel'
        append-inner-icon="mdi-phone"
        :rules="[rules.required]"
      )
      v-text-field(
        v-model="user.brokerage"
        append-inner-icon="mdi-store"
        label='Brokerage'
        :rules="[rules.required]"
      )
      v-text-field(
        type="password"
        v-model="user.password"
        label='Password'
        :rules="[rules.required, rules.min(5)]"
      )
      v-text-field(
        type="password"
        v-model="confirmPassword"
        label='Confirm Password'
        :rules="[rules.required, rules.isMatch(user.password, 'Password must match')]"
      )
      v-btn.mb-2(
        type='submit'
        block
        color='primary'
        height='50px'
        :loading="isCreating"
      ) Create Account

      slot(
        name='extra'
      )

  slot(name='login')
    p.text-body-1.text-center.text-grey-darken-1.py-1 Already have an Account?&nbsp;
      nuxt-link(to='/auth/login') Login
</template>
