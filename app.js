const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require ('cors');
//const productCountMiddleware = require('./middlewares/productCountMiddleware');
const cookieMiddleware = require('./middlewares/cookieMiddleware');


const app = express();

app.use(cors());

const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'Hush hush',
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser());

//app.use(productCountMiddleware);
app.use(cookieMiddleware);


const indexRouter = require('./src/routers/index.js');
const productsRouter = require('./src/routers/products.js');
const usersRouter = require('./src/routers/users.js');
const adminRouter = require('./src/routers/admin.js');
const productsApiRouter = require('./src/routers/api/products.js');;
const usersApiRouter= require('./src/routers/api/users.js')


app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// API routes
app.use ( '/api/products', productsApiRouter);
app.use ( '/api/users', usersApiRouter);


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, './src/views'));

app.use((req, res, next) =>{
    res.status(404).render("notFound")
})

app.listen(process.env.PORT || 3040, () => {
    console.log("Servidor corriendo en el puerto 3040");
})


