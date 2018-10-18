<template >
  <div class="page">
    Page is search
    <ul>
      <li v-for="(item,index) in $store.state.city.list" :key="index">{{item}}</li>
    </ul>

  </div>

</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      list: []
    }
  },
  // asyncData&fetch......fetch用来处理vuex
  async asyncData() {
    // let self = this
    let {status, data: {list}} = await axios.get('http://127.0.0.1:3000/city/list')
    if (status === 200) {
      // self.list = list
      return {
        list
      }
    }
  }
}
</script>

<style lang="css">
</style>
