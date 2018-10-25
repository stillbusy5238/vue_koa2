import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Poi=new Schema({
  name:{
    type:String,

  },
  province:{
    type:String, //景点省份

  },
  city:{
    type:String,

  },
  areaCode:{
    type:String
  },
  tel:{
    type:String
  },
  area:{
    type:String
  },
  addr:{
    type:String
  },
  type:{
    type:String
  },
  module:{
    type:String
  },
  longitude:{
    type:Number
  },
  latitude:{
    type:Number
  }
})

export default mongoose.model('Poi',Poi)
