const express = require('express')
const { json } = require('express/lib/response')

const app =express() 

const product =[
{id:"1", name:"computer",price:"4000", stock:"11"},
{id:"2", name:"phone",price:"1000", stock:"15"},
{id:"3", name:"tablet",price:"2000", stock:"18"},
{id:"4", name:"televizor",price:"3000", stock:"10"},
{id:"5", name:"airpods",price:"500", stock:"16"},
{id:"6", name:"mouse",price:"100", stock:"20"},
{id:"7", name:"keyboard",price:"700", stock:"8"},
{id:"8", name:"processor",price:"800", stock:"13"},
{id:"9", name:"playstation",price:"2500", stock:"6"},
{id:"10", name:"joystick",price:"400", stock:"19"}
]


app.get("/",(req,res)=>{
    res.send("server")
})

app.get("/user",(req,res)=>{
    const {count,offset}=(req.query)
    console.log(count,offset)
    let dataTwo = product.slice(offset, offset+count)
    console.log(dataTwo)
    res.send(dataTwo)
})


app.get('/product/:id',(req,res)=>{
    let id = req.params.id

    let newData = product.find(item=>item.id === id)
    console.log(newData)

    res.json(newData)

    if(newData){
        return res,json(newData)
    }
    res.send("Bele bir istifadeci tapilmadi")
})
app.listen(5000,(error)=>{
    if(!error){
        console.log("Eroor bash verdi")
        return
    }
    console.log("Xeta bash verdi")
})