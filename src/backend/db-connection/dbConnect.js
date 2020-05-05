const mongoose = require('mongoose')
const {uri} = require('../config/db')

module.exports= mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true  })
                .then(()=>console.log('Connected..'))
                .catch((err)=>console.log(err))