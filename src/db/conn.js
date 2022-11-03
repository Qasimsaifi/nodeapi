const mongoose = require('mongoose');

const DB = 'mongodb://root:root@ac-ma2b2vk-shard-00-00.yrzqpy5.mongodb.net:27017,ac-ma2b2vk-shard-00-01.yrzqpy5.mongodb.net:27017,ac-ma2b2vk-shard-00-02.yrzqpy5.mongodb.net:27017/mern?ssl=true&replicaSet=atlas-7cas1s-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(DB , {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log('succesfull connected to mongo db')
}).catch((err)=>{
  console.log( err)
})
