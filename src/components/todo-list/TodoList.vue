<template>
<div>
  <div>
    <input @keydown.enter="addTodo(newtask)" type="text" v-model="newtask">
    </input>
    {{newtask}}
    <button @click="addTodo(newtask)">Add</button>
    <button @click="todos.reverse()">Flip</button>
    <button @click="todos = []">Clear</button>
    <ul id="todo-list">
      <todo-list-item v-for="todo in todos" :todo="todo" :key="todo.id"></todo-list-item>
    </ul>
  </div>
  <div>
     <el-button @click="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
  </div>
</template>

<script lang="ts">
  import TodoList from '@/components/todo-list/todo-list.component'
  export default TodoList
</script>

<style>
#todo-list {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>
