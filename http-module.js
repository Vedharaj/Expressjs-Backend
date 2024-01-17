const http = require('http')
const fs = require('fs')

const server = http.createServer()

const body = `<h1>Hello Vedha</h1>`
const img = './image/1.jpg'

server.on('request', (req, res)=>{
    // console.log('get the request');
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(body)
        res.end()
    } else if(req.url === '/image'){
        res.writeHead(200, {'Content-Type': 'image/jpg'})
        // const readImg = fs.createReadStream(img)
        // readImg.on('open', ()=>{
        //     readImg.pipe(res)
        // })
        // readImg.on('error', (err)=>console.log(err))
        res.write('./image/1.jpg')
        res.end()
    }
})

server.listen(5000, ()=>{
    console.log("server started...");
})