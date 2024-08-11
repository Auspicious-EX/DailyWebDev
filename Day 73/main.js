const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


//app.get or app.post or app.put app.delete
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about/:slug/:sec', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello ${req.params.slug} and ${req.params.sec}`)
  })

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})