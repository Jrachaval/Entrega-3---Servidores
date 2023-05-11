import express from "express"
const app = express()

app.get('/products', async (req, res) =>{
    const products = await productManager.getAll();
    res.send(products)
})


app.listen(8080,()=> console.log("listening on 8080"))