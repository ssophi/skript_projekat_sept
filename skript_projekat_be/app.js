const express = require('express');
const bodyParser = require('body-parser')

// import adminRoutes from './routes/admin_routes.js'
// import userAppRoutes from './routes/user_app_routes.js'
const jwt =require('jsonwebtoken')
const cors =require('cors')
const bcrypt = require('bcrypt');

const http = require('http');
const { Server } = require("socket.io");
const history = require('connect-history-api-fallback');
require('dotenv').config();

const  { db } = require('./models')

const app = express()

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.static('static'));

// app.use(cors())
app.use(cors(corsOptions));


app.use(express.json());

app.use(bodyParser.json())




// app.use('/admin', adminRoutes)

// app.use('/', userAppRoutes)

function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
}

// function authToken(req, res, next) {
//     const cookies = getCookies(req);
//     const token = cookies['token'];
  
//     if (token == null) return res.redirect(301, '/login');
  
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
//         if (err) return res.redirect(301, '/login');
    
//         req.user = user;
    
//         next();
//     });
// }

app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
