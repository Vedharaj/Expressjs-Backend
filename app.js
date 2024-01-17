const express = require('express')
const path = require('path')
const morgan = require('morgan')

//custom modules
const {superMarket, dressStore} = require('./data')
const logger = require('./logger')
const persons = require('./people')

//instance of expressjs
const app = express()

//static file setup
app.use(express.static('./public'))

//setup middleware logger
app.use(logger)

//setup middleware only api
// app.use('/api', logger)

//setup third-party middleware
// app.use(morgan('tiny')) 

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//person api
app.use("/api/people", persons)

//home page
app.get('/', (req, res)=>{
  return res.status(200).sendFile(path.resolve(__dirname,'./templates/index.html'))
})

//traditional login
app.get('/traditionlogin', (req, res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,'./templates/tradition-login.html'))
})

//javascript login
app.get('/jslogin', (req, res)=>{
    return res.status(200).sendFile(path.resolve(__dirname,'./templates/js-login.html'))
})

//login page
app.post('/login', (req, res)=>{
    const {username} = req.body
    if(username){
        return res.status(200).send(`Welcome ${username}`)
    }
    return res.status(401).send("Please provide credentials!")
})

//supermarket api
app.get('/api/supermarket', (req, res)=>{
    return res.json([superMarket])
})

app.get('/api/supermarket/departments/:id', (req, res)=>{
    const {id} = req.params
    if(id){
        return res.status(200).json([superMarket.supermarket.departments[id-1]])
    } 
})


app.get('/api/supermarket/query', (req, res)=>{
    const {search} = req.query
    const products = []
    if(search){
        superMarket.supermarket.departments.forEach(i=>{
            if(i.name.startsWith(search)){
                products.push(i)
            } else{
                i.categories.forEach(j=>{
                    if(j.name.startsWith(search)){
                        products.push(j)
                    } else{
                        j.products.forEach(k=>{
                            if(k.name.startsWith(search)){
                                products.push(k)
                            }
                        })
                    }
                })
            }
        })
    }
    return res.json(products)
})

//dressStore Api's
app.get('/api/dressstore', (req, res)=>{
  return res.json([dressStore])
})

app.get('/api/dressstore/categories/:id', (req, res)=>{
    const {id} = req.params
  return res.json([dressStore.dressStore.categories[id-1]])
})

app.get('/api/dressstore/query', (req, res)=>{
    const {search} = req.query
    const products = []
    if(search){
        dressStore.dressStore.categories.forEach(i=>{
            if(i.name.startsWith(search)){
                products.push(i)
            } else{
                i.products.forEach(j=>{
                    if(j.name.startsWith(search)){
                        products.push(j)
                    }
                })
            }
        })
    }
    return res.json(products)
})

//others
app.all("*", (req, res)=>{
  return res.status(404).json({error: "not found"})
})

app.listen(5000, ()=>{
    console.log("Server listening port 5000....");
})