import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.get('/user',(req,res)=>{
    res.send('Hello this is ujwala geekuru')
})
app.get('/',(req,res)=>{
    res.send({
        success:true,
        message:'Hello from server'
    })
})
app.get('/add/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success:false,
            message:'invalid variables',
            data:null
        })
        }
        else{
            res.send({
                success:true,
                message:'operation successful',
                data:a+b
            })
        }
})
app.get('/sub/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
            success:false,
            message:'invalid variables',
            data:null
        })
    }
    else{
        res.send({
            success:true,
            message:'operation successful',
            data:a-b
        })
    }
})
app.get('/mul/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    if(isNaN(a)||isNaN(b)){
        res.send({
        success:false,
        message:'invalid variables',
        data:null
      })
      }
      else{
        res.send({
            success:true,
            message:"operation successful",
            data:a*b
        })
      }
})
app.get('/div/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    if (isNaN(a) || isNaN(b) || b === 0) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
    }
    else {
        res.send({
            success: true,
            message: 'operation successful',
            data: a / b
        })
    }
})
app.get('/mod/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    if (isNaN(a) || isNaN(b) || b === 0) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
    }
    else {
        res.send({
            success: true,
            message: 'operation successful',
            data: a % b
        })
    }
})
app.get('/pow/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    if (isNaN(a) || isNaN(b)) {
        res.send({
            success: false,
            message: 'invalid variables',
            data: null
        })
    }
    else {
        res.send({
            success: true,
            message: 'operation successful',
            data: a ** b
        })
    }
})
app.listen(3000,()=>{
    console.log('server is running')
})