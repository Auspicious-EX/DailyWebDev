const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey its a get rewuest")
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log("Hey its a post rewuest")
    res.send('Hello World! post')
})
app.get('/api', (req, res) => {
    res.json({a:1,b:2,c:3})
})

app.get('/index', (req, res) => {
    console.log("Hey its a index rewuest")
    res.sendFile('templates/index.html', {root:__dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
