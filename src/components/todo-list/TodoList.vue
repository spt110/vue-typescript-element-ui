<template>
<div class="todoList">
<div>
  <el-row class="tac">
  <el-col :span="4">
    <h5>导航菜单</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="20">
    <div>
<div>
    <input @keydown.enter="addTodo(newtask)" style="border:1px solid " type="text" v-model="newtask">
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
  </el-col>
</el-row>
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
.todoList {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
