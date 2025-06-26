
import express,{Router} from "express"

const app = express()
const port =  3000
import serverless from "serverless-http"
const router=Router();


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
app.use('/api/',router);
export const handler=serverless(app)

