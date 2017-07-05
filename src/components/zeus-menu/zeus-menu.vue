<template>
  <div class="menu" v-clickoutside="handleBlur">
    <span class="title" @click="dropDown">{{activeName}}<i class="fa" :class="{'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown}"></i></span>
    <transition name="md-fade-top">
      <div class="menu-dropDown" v-if="showDropDown">
        <router-link v-for="(route, index) in menuRoutes" :key="index" :to="route.path" @click.native="showDropDown = false">{{route.name}}</router-link>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
  import ZeusMenuComponent from '@/components/zeus-menu/zeus-menu.component'
  export default ZeusMenuComponent
</script>
<style scoped lang="scss">
  .menu {
    position: relative;
    width: 140px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      i {
        color: #d8d8d8;
        font-size: 24px;
        vertical-align: sub;
        margin-left: 5px;
      }
    }
    .menu-dropDown {
      position: absolute;
      top: 35px;
      left: 0;
      width: 100%;
      background-color: #fff;
      border: 1px solid #d1dbe5;
      box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.12);
      padding: 6px 0;
      z-index: 10;
      a {
        display: block;
        line-height: 36px;
        padding: 0 10px;
        margin: 0;
        cursor: pointer;
        &:hover {
          background-color: #e4e8f1;
          color: #48576a;
        }
      }
    }
    .router-link-active {
      color: #41b4ec;
    }
  }
</style>
