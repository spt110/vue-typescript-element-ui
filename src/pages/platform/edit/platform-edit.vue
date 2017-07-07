<template>
<c8-dialog  ref="dialog" >
  <el-form :model="form">
    <el-form-item label="平台名称" :label-width="formLabelWidth">
      <el-input v-model="form.platformName" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="平台编号" :label-width="formLabelWidth">
      <el-input v-model="form.platformCode" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="平台备注" :label-width="formLabelWidth">
      <el-input v-model="form.platformRemark" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div class="el-dialog__footer dialog-footer">
    <el-button @click="close()">取 消</el-button>
    <el-button type="primary" @click="save()">确 定</el-button>
  </div>
</c8-dialog>
</template>
<script lang="ts">
  import PlatformEditComponent from '@/pages/platform/edit/platform-edit.component'
  export default PlatformEditComponent
</script>
<style lang="scss"  >
 
</style>
