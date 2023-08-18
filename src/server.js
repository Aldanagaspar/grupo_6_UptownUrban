const express = require("express");
const path = require("path");

const app = express();
const mainRoutes = require("./routes");
const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

const PORT = 8000;



app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"/views"));

app.listen(PORT, () => {
    console.log("\n¡Servidor en línea! :D");
    console.log(`Iniciado en el puerto ${PORT}`);
    console.log(`Ingresá a localhost:${PORT} para empezar a visualizar el sitio`);
});

app.use('/', mainRoutes);
app.use('/usuarios', usersRoutes);
app.use('/producto', productRoutes);
app.use('/carrito', productRoutes)
/*
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
*/
