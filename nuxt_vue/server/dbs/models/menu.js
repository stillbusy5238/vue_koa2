import mongoose from 'mongoose'
const Schema = mongoose.Schema
const MenuSchema=new Schema({
  menu:{
    type:Array,
    require:true

  }
  // password:{
  //   type:String,
  //   require:true
  // },
  // email:{
  //   type:String,
  //   require:true
  // }
})

export default mongoose.model('Menu',MenuSchema)
