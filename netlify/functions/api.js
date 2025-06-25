
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const serverless=require('serverless-http')
const router=express.Router();


router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/my',(req,res)=>{
    res.send("<h1>'this is change'</h1>")
})

router.get('/twiter',(req,res)=>{
     res.send('this is twitter ')
})
/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
app.use('/.netlify/functions/api',router);
module.exports.handler=serverless(app);

