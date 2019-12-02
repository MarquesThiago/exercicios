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

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number
    },
    pais: {
        type: String
    }
})

mongoose.model('user', userSchema)


const users = mongoose.model('user')

new users({
    nome: 'victor',
    sobrenome: 'alexander pires',
    email: "victor.pires@gmail.com",
    idade: 15,
    pais: 'canadian'
    
}).save().then(
    console.log("cadastrado com sucesso")
).catch( (err)=> {
    console.log('ouve um erro do cadastramento' + err)
}
)


//db.<collections>.find()
