<script setup>
const { api } = useFeathers()
const $service = api.service('todos')
const todos$ = $service.useFind({ query: {} }, { paginateOn: 'hybrid' })

const addTodo = () => $service.create({ firstName: 'Eric', lastName: 'Irish', text: `Todo ${todos$.data.length + 1}` })
</script>

<template lang="pug">
.pa-8
  v-btn( @click="addTodo" color="pink" v-if="!todos$.isPending" ) Add Todo
  v-table( theme="dark" )
    thead
      tr
        th.text-left Todos
    tbody
      tr( v-for="todo in todos$.data" :key="todo.name" )
        td
          NuxtLink(
            :to="{ path: `/todos/${ todo._id }` }"
          ) {{ todo.text }}
        td
          | {{ todo.fullName }}
</template>
