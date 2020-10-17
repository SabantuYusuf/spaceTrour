
const express = require('express'); 
const app = express();
const methodOverride = require('method-override')
const router = express.Router();
// const controller = require('./controller/booking')


app.use(express.json());

require('dotenv').config();

// Set Engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/public`));


app.use(methodOverride('_method'))
//Routers

app.get('/', (req, res) => {

    res.render('index');
});


app.get('/', (req, res) => {
    res.send('<h1>Space<h1>')
})


app.use('/mars', require('./controller/mars'));
app.use('/booking', require('./controller/booking'));
app.use('/booking/departureOne', require('./controller/booking'));


app.listen(3000, ()=>{
    console.log("I am listening");
});

