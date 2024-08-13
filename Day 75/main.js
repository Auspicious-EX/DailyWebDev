const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static('public'))


// ...

app.use('/blog', blog)

//m1- loger for our alplication
app.use((req, res, next)=> {
    console.log(req.headers)
    req.shubham = "I am shubham"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("fas gaye")
    next()
})

// m2
app.use((req, res, next)=> {
    console.log('m2')
    req.shubham = "I am viny"
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello World! about' + req.shubham)
})
app.get('/blog', (req, res) => {
  res.send('Hello World! blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})