<script setup>
const route = useRoute()
const id = ref(route.params.id)

const valid = ref(false)

const { get } = useForm('todos')
const item$ = get(id.value, { text: 'Add new Todo' })

const addTodo = async () => {
  try {
    const result = await item$.clone.save()
  } catch (e) {
    console.log(e)
  }
}

</script>

<template lang="pug">
.pa-8
  h3 id: {{ id }}
  h4 {{ item$.clone }}

  v-form(
    v-model="valid"
    v-if="item$.hasLoaded"
  )
    v-text-field(
      v-model="item$.clone.text"
      label="Todo text"
      :rules="[(v) => !!v || 'Text is required']"
    )

    v-text-field(
      v-model="item$.clone.firstName"
      label="FirstName"
      :rules="[(v) => !!v || 'FirstName is required']"
    )

    v-text-field(
      v-model="item$.clone.lastName"
      label="LastName"
      :rules="[(v) => !!v || 'LastName is required']"
    )

    v-btn( @click="addTodo" ) {{ item$.isEdit ? 'Save' : 'Create' }} Todo
    v-btn( @click="item$.clone.reset()" ) Reset
</template>
