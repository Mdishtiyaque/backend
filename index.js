
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/my',(req,res)=>{
    res.send("<h1>'this is change'</h1>")
})
app.get('/twiter',(req,res)=>{
     res.send('this is twitter ')
})

app.listen(process.env, () => {
  console.log(`Example app listening on port ${port}`)
})
