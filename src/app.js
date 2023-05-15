import express from "express"
import ProductManager from './ProductManager.js'
const app = express()

const productManager = new ProductManager ('./productfile.json');

app.use(express.urlencoded({extended: true}));

app.get('/products', async (req, res) =>{
    const products = await productManager.getProducts();
    res.send(products);
})


app.listen(8080,()=> console.log("listening on 8080"))