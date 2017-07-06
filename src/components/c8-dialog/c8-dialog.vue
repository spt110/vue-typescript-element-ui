<template>

<el-dialog  ref="dialog"  v-bind:title="title"   :visible.sync="dialogTableVisible">

<slot> </slot>
</el-dialog>

</template>
<script lang="ts">
  import C8DialogComponent from '@/components/c8-dialog/c8-dialog.component'
  export default C8DialogComponent
</script>
<style lang="scss"  >
 
</style>
