const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

// Create express app
const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

// Log requests in the terminal
app.use(morgan('tiny'));

// MongoDB Connection
connectDB();

// Pass requests to the body parser
app.use(bodyparser.urlencoded({extended: true}));

//Load assets
app.use("/css", express.static(path.resolve(__dirname, "../Frontend/assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "../Frontend/assets/js")));
app.use("/images", express.static(path.resolve(__dirname, "../Frontend/assets/images")));

//set view engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set("views", path.resolve(__dirname, "views"))

// Routing
app.use('/', require('./server/routes/routes'))

app.listen(PORT, ()=>{console.log(`Server running at http://localhost:${PORT}`)});