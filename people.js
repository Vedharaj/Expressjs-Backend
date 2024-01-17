const express = require('express')
const router = express.Router()

const {peoples} = require('./data')

router.get('/', (req, res)=>{
    return res.status(200).json({success: true, data: peoples})
})

router.post('/', (req, res)=>{
    const {name} = req.body
    // console.log(name)
    if(!name){
        return res.status(400).json({success: false, msg: "please provide credentails"})
    }
    return res.status(200).json({success: true,name: name})
})

router.put("/:id", (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const people = peoples.find((p)=>p.id === Number(id))
    if (!people){
        return res.status(404)
            .json({success: false, msg: `no people with id: ${id}`})
    }
    const newpeoples = peoples.map((p)=>{
           if(p.id === Number(id)){
            return {...p, name: name}
           } else{
            return {...p}
           }
    })
    return res.json({success: true, data: newpeoples})
})

router.delete("/:id", (req, res)=>{
    const {id} = req.params
    const people = peoples.find((p)=>p.id === Number(id))
    if (!people){
        return res.status(404)
        .json({success: false, msg: `no people with id: ${id}`})
    }
    const newpeoples = peoples.filter(p=>p.id !== Number(id))
    return res.json({success: true, data: newpeoples})
})

module.exports = router