<template>
  <li>
    <input @change="todo.done = true" type="checkbox" :checked="todo.done"> </input>
    <span>{{todo.task}}</span>
  </li>
</template>

<script lang="ts">
  import TodoListItemComponent from '@/components/todo-list-item/todo-list-item'
  export default TodoListItemComponent
</script>

<style>

</style>
