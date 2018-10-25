<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <isSelect/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hots/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">1</el-col>
    </el-row>

  </div>

</template>

<script>
import isSelect from '@/components/changeCity/isselect.vue'
import hots from '@/components/changeCity/hot.vue'
export default {
  components:{
    isSelect,
    hots
  }
}
</script>

<style lang="css">
</style>
