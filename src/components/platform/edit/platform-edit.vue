<template>
<el-dialog  ref="dialog" title="平台"   :visible.sync="dialogTableVisible">
  <el-form :model="form">
    <el-form-item label="平台名称" :label-width="formLabelWidth">
      <el-input v-model="form.platformName" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="平台编号" :label-width="formLabelWidth">
      <el-input v-model="form.platfplatformCodeormName" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="平台备注" :label-width="formLabelWidth">
      <el-input v-model="form.platformRemark" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="close()">取 消</el-button>
    <el-button type="primary" @click="save()">确 定</el-button>
  </div>
</el-dialog>
</template>
<script lang="ts">
  import PlatformEditComponent from '@/components/platform/edit/platform-edit.component'
  export default PlatformEditComponent
</script>
<style lang="scss"  >
 
</style>
