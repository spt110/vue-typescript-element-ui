<template>
  <div class="user" v-clickoutside="handleBlur">
    <a href="#" class="help">帮助</a>
    <a @click="dropDown"><i class="fa fa-user-circle-o"></i></a>
    <transition name="md-fade-top">
      <div class="user-dropDown" v-if="showDropDown">
        <router-link :to="{path: '/center'}">个人中心</router-link>
        <a class="logout" @click="logout">退出</a>
      </div>
    </transition>
  </div>
</template>
<script>
  import Api from '../../services/login.js';
  import Clickoutside from 'element-ui/lib/utils/clickoutside';
  export default {
    directives: { Clickoutside },
    data() {
      return {
        activeName: '',
        showDropDown: false
      };
    },
    methods: {
      dropDown() {
        this.showDropDown = !this.showDropDown;
      },
      handleBlur() {
        this.showDropDown = false;
      },
      logout() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        Api.logout({
          token: userInfo.token,
          accountId: userInfo.username
        })
        .then(({data}) => {
          if (data.code === 1) {
            this.$message({
              message: '退出成功',
              type: 'success'
            });
            setTimeout(() => {
              location.href = '/login';
            }, 500);
          } else {
            this.$message({
              message: data.message,
              type: 'warning'
            });
          }
        });
      }
    }
  };
</script>
<style scoped lang="scss">
  .user {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    &-dropDown {
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
