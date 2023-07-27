const express = require("express");
const path = require("path");

const app = express();

const PORT = 8000;


app.listen(PORT, () => {
    console.log("\n¡Servidor en línea! :D");
    console.log(`Iniciado en el puerto ${PORT}`);
    console.log("Ingresá a localhost:8000 para empezar a visualizar el sitio");
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
});
app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productCart.html"));
});
app.get('/producto',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
});
app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
});


app.use(express.static("public"));
