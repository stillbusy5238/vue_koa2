import Router from 'koa-router'



const router = new Router({
  prefix:'/city'
})


router.get('/list',async(ctx) => {
  ctx.body ={
    list:['beijing','tianjin']
  }
})

export default router
