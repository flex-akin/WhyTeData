const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const path = require('path')
const cors = require('cors')
const { Register, Blog }= require("./models")



const app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const db = require("./models")

// APIS
app.post("/user_reg", async (req,res) => {
    try{
        await Register.create({
            Title: req.body.title,
            Date: req.body.year ,
            FullName: req.body.fullname,
            OtherName: req.body.othername,
            PersonalPhoneNumber: req.body.Phonenumber,
            EmailAddress: req.body.email ,
            Company: req.body.company,

            
    
        })

        res.send('Successful')
    } catch(err) {
        console.log(err)
        res.send(err)


    }
            
})

app.post("/blogPost", async (req,res) => {
    try{
        await Blog.create({
            MinsRead: req.body.longtoread,
            Topic: req.body.topic,
            Snippet: req.body.snippet ,
            Author: req.body.author,
            content: req.body.content,

            
    
        })

        res.send('Successful')
    } catch(err) {
        console.log(err)
        res.send(err)


    }
            
})


app.get("/blogContent", async (req,res) => {
    const blogPost = await Blog.findAll();
    res.render("pages/allPosts", {blogPost} )

})

app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/register', (req, res) => {
    res.render('pages/register')
})

app.get('/admin', (req, res) => {
    res.render('pages/admin')
})

app.get('/show/:id', async (req, res) => {
    const uid = req.params.id
    const article = await Blog.findOne({ where: { id: uid } });

    res.send(article)


})




db.sequelize.sync().then((req) => {
app.listen('3302', (error) => {
    if (error) console.log('error connecting to database')
    console.log('succesfully connested to port 3302')
}) 

})