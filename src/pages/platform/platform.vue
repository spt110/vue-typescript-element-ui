<template>
  <section :class="{'has-nav': navList.length}">
    <header class="header">
      <zeus-menu></zeus-menu>
      <div class="header-search service">
        <form @submit.prevent="search">
          <el-row type="flex" align="middle">
            <el-col :span="5">
              <el-input :maxlength="30" v-model="filter.serviceName" placeholder="请输入平台名称"></el-input>
            </el-col>
          </el-row>
          <el-button native-type="submit"></el-button>
        </form>
      </div>
      <div class="header-help">
        <el-button type="primary" @click="addNew">新增</el-button>
        <zeus-user></zeus-user>
      </div>
    </header>
    <transition name="fade" mode="out-in" v-if="navList.length">
      <div class="nav-bar">
        <el-tag v-for="(nav, index) in navList" :key="index" type="gray" :closable="true" :close-transition="false" @close="handleClose(index)">{{nav.value}}</el-tag>
      </div>
    </transition>
    <el-tabs class="main-nav" v-model="activeStatus">
      <el-tab-pane v-for="tab in tabs" :key="tab.count" :label="tab.name + '('+ tab.count + ')'" :name="'' + tab.status"></el-tab-pane>
    </el-tabs>
    <div class="page-content">
      <div class="page-aside">
        <div class="list-box" v-infinite-scroll="loadMore" infinite-scroll-distance="10" infinite-scroll-disabled="loading">
          <ul class="item-box" v-for="item in contractList" @click="active(item)" :class="{'active': activeItem === item}">
            <li>
              <img class="img-box" :src="item.tenantLogo">
            </li>
            <li>
              <!--<h3 v-text="item.contractName"></h3>-->
              <p>
                <label class="leftLabel" >平台名称：</label>
                <span>{{item&&item.platformName}}</span>
              </p>
              <p>
                <label class="leftLabel">平台编号：</label>
                <span>{{item&&item.platformCode}}</span>
              </p>
              <p>
                <label class="leftLabel">包含账号：</label>
                <span>{{item&&item.accountCount}}个</span>
              </p>
            </li>
          </ul>
          <p class="null" v-if="!contractList.length">暂无数据！</p>
        </div>
        <p class="loading" v-show="loading">加载中...</p>
      </div>
      <platform-detail @copy="copy" @edit="edit" :detailInfo="activeItem" :activeItemProp="activeItem" :statusProp="params.status"></platform-detail>
    </div>
    <platform-edit ref="winEdit" ></platform-edit>
    <!--<zeus-popup-edit @upload="upload" @clear="clearEdit" :companyInfo="companyInfo" :activeItemProp="activeItem"></zeus-popup-edit>-->
  </section>
</template>

<script lang="ts">
  import PlatformPage from '@/pages/platform/platform.page'
  export default PlatformPage
</script>
<style lang="scss">
  .service {
    .el-date-editor.el-input {
      width: 100%;
    }
    .el-col-2 {
      margin-left: 20px;
    }
    .el-col-4 {
      margin-right: 20px;
    }
    .arrow {
      display: block;
      text-align: center;
      color: #bfbfbf;
    }
    .leftLabel{
        width: 100px!important;
    }
  }
</style>
