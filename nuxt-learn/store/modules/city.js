const state =()=> ({
  list:['a','b']
})

const mutations={
  add(state,text){
    state.list.push(text)
  }
}


const actions = {
  add: (ctx,text)=> {
    ctx.commit('add',text)

  }
}


export default {
  namespace:true,
  state,
  mutations,
  actions
}
