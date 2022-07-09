const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const sequelize = new Sequelize("test_website", "root", "@Omoshalewa1999", {
    dialect:"mysql"
})
sequelize.authenticate().then(() => {
    console.log("logged in succesfully to db " )
}).catch((err)=>{
    console.log(err, "invalid")
})



app.get('/', (reg, res)=> {
    res.send('dont dull')
})


app.listen('3302', (error) => {
    if (error) console.log('error connecting to database')
    console.log('succesfully connested to port 3302')
}) 