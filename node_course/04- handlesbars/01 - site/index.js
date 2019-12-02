const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const body_parser = require('body-parser')
const path = require('path')

const Post = require('./models/Post')

const port = 3031

//config
//configured template engine handlebars 
app.engine("handlebars", handlebars({defaultLayouts: 'main'}))
app.set("view engine", "handlebars")

//configurand o body parser
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())


app.get('/', async (req,res)=> {

    await Post.findAll({order: [['id', 'DESC']]}).then( 
        await function(posts){
        res.render('home', {posts: posts})
    })
})
    

app.get("/cadastro", (req, res) => {
    res.render("cadastro")
})


app.post("/confirm", async (req,res)=> {
    await Post.create({
    titulo: req.body.titulo,
    post: req.body.postagem
    }).then(
        res.redirect('/')
        ).catch((err) => {
        res.send(err)
    })
})


app.get("/delet/:id", (req,res)=> {
    Post.destroy({where: {'id': req.params.id}}).then(
        res.redirect('/')
    ).catch((err)=> {
        res.send('post não existe')
    })
})


app.listen(port, (err) => {
    if (!err){
        console.log(`esta funcionando http://localhost:${port}`)
    }else{
        console.log(err)
    }
})