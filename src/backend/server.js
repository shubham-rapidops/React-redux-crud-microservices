const express = require('express')
const db = require('./db-connection/dbConnect')
const Model = require('./models/dbCollection')
const bodyParser = require("body-parser");

const model = Model.getInstance();


// const model = dbCollection();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/api/getalldata',async(req,res)=>{
    const data = await model.findAll();
    res.send(data)
    
})

app.post('/api/add',async(req,res)=>{
    const values = req.body 
    const data = await model.add(values)
    res.json(data)
})

app.post('/api/remove', async(req,res)=>{
    const query = req.body
    const data = await model.remove(query)
    res.send(data)
})

app.post('/api/update' , async(req,res)=>{
    const name = req.body.name
    const newData = req.body.newData;
    const data = await model.update(name , newData)

    res.send(data)
})

app.listen(5000,()=>console.log('listning'))