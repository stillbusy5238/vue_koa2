const state =()=>({
  app:[]
})

const mutations={
  add(state,text){
    state.app.push(text)
  }
}


const actions = {
  add: (ctx,text)=>{
    ctx.commit('add',text)

  }
}


export default {
  namespace:true,
  state,
  mutations,
  actions
}
