<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt >有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>

    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in curdetail" :key="index" v-if="kind">{{item}}</li>


    </ul>

  </section>


</template>

<script>
export default {
  data(){
    return{
      kind:'all',
      list:{
        all: ['a','b','c'],
        part: ['a','b','3'],
        spa: ['a','b','4'],
        movie: ['a','b','5'],
        travel: ['a','b','6']
      }
    }
  },
  computed:{
    curdetail:function(){
      return this.list[this.kind]
    }
  },
  methods:{
    over:function(e){
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self= this
      if(tag==='dd'){
        this.kind= dom.getAttribute('kind')
      }

    }

  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
