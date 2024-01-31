const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose")
const Product = require('./model/productModel')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/auth', (req, res) => {
    res.send('User account RajMuthu ')
})

//Get all data from mongoDB Database :

app.get('/products', async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get single data from mongoDB Database :

app.get('/products/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update (or) edit data in mongoDB Database :

app.put('/products/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})

        }
        const updateProduct= await Product.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete  data in mongoDB Database :

app.delete('/products/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id)
        if(!deleteProduct){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})

        }
        res.status(200).json(deleteProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Save data in mongoDB Database :

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.set("strictQuery", false)

mongoose.
    connect("mongodb+srv://rajsubash007:Rajmeena%4099@cluster0.s8jveqm.mongodb.net/NODE-APIS?retryWrites=true&w=majority")
    .then(() => {
        console.log("Database connected successfully");

    }).catch((error) => {
        console.log(error);
    })


