const express = require('express')

const app = express()

const port = process.env.PORT || 3000
app.listen(port)
console.log(`App is running on ${port}`)

app.get("/",(req,res)=>{
    res.send("Hello World from Deekshith's app!!")
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.get('/contact',(req,res)=>{
    res.send("Reach me out at s538365@nwmissouri.edu")
})

app.get('/help',(req,res)=>{
    res.send("This is a help page")
})

app.get('/help/:topic', (req, res) => {
    res.send(`help response for ${req.params.topic}`)
  })