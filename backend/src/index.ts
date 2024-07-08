import express,{Request,Response} from "express"
import cors from "cors";

const app = express()
const port = 3000;

app.use(express.json())
app.use(cors())

app.get("/",function(req,res){
    res.json({
        msg: "hello world!"
    })
})

app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})