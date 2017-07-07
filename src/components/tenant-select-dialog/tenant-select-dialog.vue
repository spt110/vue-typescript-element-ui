<template>
<c8-dialog  ref="dialog" >
    <el-autocomplete
        class = "autocompleteS"
        :fetch-suggestions="queryAsync"
        placeholder="请输入集团"
        @select="selectItem"
    > </el-autocomplete>
</c8-dialog>
</template>
<script lang="ts">
  import C8DialogComponent from '@/components/tenant-select-dialog/tenant-select-dialog.component'
  export default C8DialogComponent
</script>
