//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename= "Adidas"
    let searchtext= "now search"
    let arr = [1,4,5,6]
  res.render("index",{sitename:sitename, searchtext:searchtext, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogname= "Shubh"
    let blogtext= "Shubh search"
  res.sendFile("blogpost",{blogname: blogname,blogtext: blogtext})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})