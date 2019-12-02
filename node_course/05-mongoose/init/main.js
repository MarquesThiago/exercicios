const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/nodeC",{
    useMongoClient: true},
    cb = (err) => { 


        if (!err){
            console.log("conectado ao mongo...")
        }else{
            console.log("ouve um erro:" + err)
        }

} )



