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
      <el-col :span="24">
        <category/>
      </el-col>
    </el-row>

  </div>

</template>

<script>

import isSelect from '@/components/changeCity/isselect.vue'
import hots from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'


export default {
  components:{
    isSelect,
    hots,
    Category
  }
}
</script>

<style lang="css">
</style>
