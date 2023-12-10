const express = require("express");
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
//const cookies = require('cookie-parser');

const mainRoutes = require("./routes");
const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const usersApiRoutes = require('./routes/API/users');
const productApiRoutes = require('./routes/API/productApi');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const adminLoggedMiddleware = require('./middlewares/adminLoggedMiddleware');

const app = express();
const PORT = 8000;

// ***** configurando body-parser *****
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use(cookies())

app.use(methodOverride('_method'))

app.use(express.static('public'));

app.use(session({secret: "nabrunwotpu"}));
app.use(userLoggedMiddleware);
app.use(adminLoggedMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"/views"));
app.use(cors());
app.use(
    cors({
        origin:["http://localhost:8000", "http://localhost:3000"],
        methods:"GET,POST,PUT,DELETE",
        credentials:true
    })
);
app.listen(PORT, () => {
    console.log("\n¡Servidor en línea! :D");
    console.log(`Iniciado en el puerto ${PORT}`);
    console.log(`Ingresá a localhost:${PORT} para empezar a visualizar el sitio`);
});

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productRoutes);
app.use('/api', usersApiRoutes,productApiRoutes);



app.use((req,res,next) => {
    res.status(404).render('error404');
})