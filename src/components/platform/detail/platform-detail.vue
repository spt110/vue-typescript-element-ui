<template>
    <transition name="fade" mode="out-in" v-if="detailInfo"><!--v-if="detailInfo&&activeItem"-->
        <div class="page-main">
            <div class="main-box">
                <el-tabs value="first" type="card">
                    <el-tab-pane label="平台详情" name="first">
                        <div class="item-box">
                            <table class="platformSummary">
                                <tr>
                                    <td>
                                        平台名称：{{detailInfo && detailInfo.platformName}}
                                        <img src="" alt="" v-show="detailInfo=='1'">
                                    </td>
                                    <td>
                                        平台编号：{{detailInfo&&detailInfo.platformCode}}
                                    </td>
                                    <td>
                                        包含账号：{{detailInfo&&detailInfo.accountCount}}个
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        备注：{{detailInfo&&detailInfo.descInfo}}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="item-operation">
                            <el-upload :action="baseUrl+'platform/'+detailInfo.platformId+'/account/import'"
                            :headers="headers" :multiple="multiplFalse" :on-success="uploadSuccess" :on-error="uploadError">
                                <!--class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList">-->

                                <el-button size="small" type="primary">上传</el-button>
                                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                            </el-upload>
                            <el-button type="primary" v-if="statusProp === 1" @click="edit">修改</el-button>
                            <el-button type="primary" @click="del">删除</el-button>
                        </div>
                        <div class="tenantBox">
                            <div class="tenantTile"><span>集团</span><a href="javascript:;" @click="addGroup">新增</a></div>
                            <el-dialog v-model="tenantModalShow" custom-class="modifyRuleModalClass"
                                       :show-close="showFalse">
                                <div class="close-container">
                                    <img src="../../../assets/image/close_gray.png" alt="closeBtn"
                                         @click="closeTenantModal">
                                </div>
                                <el-autocomplete
                                    class = "autocompleteS"
                                    v-model="tenantModal"
                                    :fetch-suggestions="querySearchAsync"
                                    placeholder="请输入集团"
                                    @select="handleSelect"
                                ></el-autocomplete>
                            </el-dialog>
                            <div class="tenant">
                                <span v-for="tenant in detailAll.listTenant">{{tenant.tenantName}}<img
                                    src="../../../assets/image/close_gray.png" alt=""
                                    @click="delTenant(tenant.seqId)"></span>
                            </div>
                        </div>
                        <div class="servicePackageBox">
                            <div class="servicePackageTile"><span>服务包</span><a href="javascript:;"
                                                                               @click="addServicePackage">新增</a></div>
                            <el-dialog v-model="servicePackageModalShow" custom-class="modifyRuleModalClass"
                                       :show-close="showFalse">
                                <div class="close-container">
                                    <img src="../../../assets/image/close_gray.png" alt="closeBtn"
                                         @click="closeServicePackageModal">
                                </div>
                                <el-autocomplete
                                    class = "autocompleteS"

                                    v-model="servicePackageModal"
                                    :fetch-suggestions="querySearchAsync2"
                                    placeholder="请输入服务包"
                                    @select="handleSelect2"
                                ></el-autocomplete>
                            </el-dialog>
                            <div class="servicePackage">
                                <span v-for="servicePackage in detailAll.listServicePackage">{{servicePackage.packageName}} <img
                                    src="../../../assets/image/close_gray.png" alt=""
                                    @click="delPackage(servicePackage.seqId)"></span>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="账号信息" name="second">
                        <div class="item-box">
                            <table class="platformSummary">
                                <tr>
                                    <td>
                                        平台名称：{{detailInfo && detailInfo.platformName}}
                                        <img src="" alt="" v-show="detailInfo=='1'">
                                    </td>
                                    <td>
                                        平台编号：{{detailInfo&&detailInfo.platformCode}}
                                    </td>
                                    <td>
                                        包含账号：{{detailInfo&&detailInfo.accountCount}}个
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        备注：{{detailInfo&&detailInfo.descInfo}}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="item-operation">
                            <el-upload :action="baseUrl+'platform/'+detailInfo.platformId+'/account/import'"
                                       :headers="headers" :multiple="multiplFalse">
                                <!--class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList">-->

                                <el-button size="small" type="primary">上传</el-button>
                                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                            </el-upload>
                            <el-button type="primary" v-if="statusProp === 1" @click="edit">修改</el-button>
                            <el-button type="primary" v-if="statusProp === 1" @click="del">删除</el-button>

                        </div>
                        <div class="account">
                            <div class="accountTitle">
                                <span>账号信息</span>
                                <input type="text" placeholder="请输入手机号" class="accountSearch" v-model="accountSearch" @keypress.13="searchAccount">
                                <img class="searchNote" src="../../../assets/image/search-gray.png" alt="">
                            </div>

<table cellspacing="0" cellpadding="0">
    <tr>
        <td>公司税号</td>
        <td>公司名称</td>
        <td>使用人姓名</td>
        <td>邮箱</td>
        <td>手机号</td>
        <td>使用人身份证</td>
        <td>UKEYID</td>
        <td>UKEY数字</td>
    </tr>
    <tr v-for="accountDetail in accountDetails">
        <td> {{accountDetail.companyTaxNum}}</td>
        <td> {{accountDetail.companyName}}</td>
        <td> {{accountDetail.userName}}</td>
        <td> {{accountDetail.email}}</td>
        <td> {{accountDetail.mobile}}</td>
        <td> {{accountDetail.userId}}</td>
        <td> {{accountDetail.ukeyId}}</td>
        <td> {{accountDetail.ukeyNum}}</td>
    </tr>
</table>
                        </div>
                    </el-tab-pane>

                </el-tabs>
            </div>
            <!--<div class="main-box company-list">
              <div class="main-box-title">
                <h3>包含功能集： {{resSetList.length}}个</h3>
              </div>
              <div class="main-box-content table service-module-list">
                <ul class="table-title">
                  <li>模块</li>
                  <li>功能集</li>
                </ul>
                <ul class="table-body" v-for="(item,index) in resSetList">
                  <li v-text="item.moduleName"></li>
                    &lt;!&ndash;v-text="item.resourceSetName"&ndash;&gt;
                  <li class="resourceSetNameBox" @mouseenter="showAll(index)" @mouseout="hideAll(index)">
                    <div class="content">{{item.resourceSetName}}</div>
                    <div class="resourceSetName" v-show="item.hover">{{item.resourceSetName}}</div>
                  </li>
                </ul>
                <p class="null" v-if="!resSetList.length">暂无数据</p>
              </div>
            </div>-->
        </div>
    </transition>
</template>
<script>
  import PlatformDetailComponent from '@/components/platform/detail/platform-detail.component'
  export default PlatformDetailComponent
</script>
<style lang="scss" rel="stylesheet/scss">/*rel="stylesheet/scss"*/
    .service-module-list {
    .table-body,
    .table-title {
        li {
            text-align: left;

            .content {
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            &:first-child {
                width: 40%;
                padding-left: 30px;
            }
            &:last-child {
                flex: 1;
            }
        }
    }
}

.resourceSetNameBox {
    position: relative;
    overflow: visible;
}

.resourceSetName {
    position: absolute;
    top: 32px;
    left: 5%;
    background-color: #ffffff;
    z-index: 100;
    border: 1px solid #000000;
    width: 90%;
    border-radius: 4px;
    box-shadow: 5px 5px 5px #888888;
}

.platformSummary {
    width: 100%;
    & > tr {
        height: 55px;
        td:nth-of-type(1) {
            text-align: left;
            padding-left: 20px;
        }
        td:nth-of-type(3) {
            text-align: right;
            padding-right: 20px;
        }
    }
    & > tr:nth-of-type(1) {
        td:nth-of-type(1) {
            font-size: 14px;
            font-weight: bolder;
            color: #5a5b5d;
        }
        td:nth-of-type(2) {
            font-size: 14px;
            font-weight: bolder;
            color: #5a5b5d;
        }
        td:nth-of-type(3) {
            font-size: 12px;
            color: #9b9b9b;
        }
    }
    & > tr:nth-of-type(2) {
        td:nth-of-type(1) {
            font-size: 12px;
            color: #9b9b9b;
        }
    }

}

.tenantBox, .servicePackageBox {
    border: solid 1px #dfdfdf;
}

.tenantTile, .servicePackageTile {
    padding: 34px 20px 16px 20px;
    height: 20+34+16px;
    span {
        float: left;
        font-size: 14px;
        font-weight: bolder;
        color: #5a5b5d;
    }
    a {
        float: right;
        font-size: 14px;
        font-weight: bolder;
        color: #41b4ec;
    }
}

.tenant, .servicePackage {
    height: 298-70px;
    padding-left: 50px;
    padding-right: 50px;
    span {
        margin-left: 20px;
        font-size: 12px;
        color: #4a4a4a;
        background-color: rgba(65, 180, 236, 0.1);
        img {
            margin-left: 3px;
            width: 10px;
            height: 10px;
        }
    }
}

.close-container {
    height: 12+30-25px;
    padding: {
        top: 0; //30px;
        right: 30px;
    }
    img {
        width: 12px;
        height: 12px;
        float: right;
    }
}
.autocompleteS{
    margin: 0 auto;
    width: 400px;
    margin-left: calc(50% - 200px);
}
.account{
    position: relative;
    background-color: #ffffff;
    border-top: solid 1px #dfdfdf;
    .accountTitle{
        padding: 34px 20px 24px 20px;
        height: 20+34+24px;
        span{
            font-size: 14px;
            font-weight: bolder;
            color: #5a5b5d;
            float:left;
        }
        input{
            float:right;
            font-size: 14px;
            color: #bfbfbf;
            width: 220px;
            height: 30px;
padding-left: 10px;
            border-radius: 2px;
            border: solid 1px #bfbfbf;
        }
        .searchNote{
            float:right;
            height: 16px;
            width: 16px;
            position: relative;
            top:6px;
            left:210px;

        }
    }
    table{
margin-left: 20px;
        margin-right: 20px;
        width: calc(100% - 40px);
        //border: none;
        border-style:none;
        tr{
            height: 37px;
            td{
                padding: 0;
            }
        }
        tr:nth-of-type(2n){
            background-color: #f2f2f2;
        }
    }
}

    .el-button{

    }
    .item-operation{
        &>div{
            display: inline-block;
            button{
                height: 32px;
                margin-right: 10px;
                font-size: 14px;
            }
        }
    }
    .el-upload-list,.el-upload-list--text{
        display: none!important;
    }
</style>
