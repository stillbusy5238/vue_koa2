import Router from 'koa-router';
import axios from './utils/axios'

import Menu from '../dbs/models/menu'
import Province from '../dbs/models/province'
let router = new Router({prefix: '/geo'})

const sign =''
router.get('/getPosition', async (ctx)=>{
  let {status,data:{province,city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)

  if(status===200){

    ctx.body={
      province:'天津',
      city:'天津'
    }
  }else{
    ctx.body={
      province:'',
      city:''
    }
  }

})

router.get('/province',async (ctx)=>{
  // 本地数据
  // const province = await Province.find()
  // ctx.body={
  //   province:province.map(item=>{
  //     return{
  //       id:item.id,
  //       name:item.value[0]
  //     }
  //
  //   })
  // }

  // 线上数据
  let {status,data:{province}} = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  if(status===200){
    ctx.body={
      province:province
    }
  }

})
router.get('/province/:id', async (ctx)=>{
  let {status, data: {
      city
    }} = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

router.get('/city', async (ctx) => {
  let {status, data: {
      city
    }} = await axios.get(`http://cp-tools.cn/geo/city?sign=${sign}`);
  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})
router.get('/hotCity', async (ctx) => {
  let {status, data: {
      hots
    }} = await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`);
  if (status === 200) {
    ctx.body = {
      hots
    }
  } else {
    ctx.body = {
      hots: []
    }
  }
})


router.get('/menu',async (ctx)=>{
  const result = await Menu.findOne()
  ctx.body={
    menu:result.menu
  }

  // let {status,data:{menu}} = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`);
  // if(status===200){
  //   ctx.body={
  //     menu
  //   }
  // }else{
  //   ctx.body = {
  //     menu;[]
  //   }
  // }
})

export default router
