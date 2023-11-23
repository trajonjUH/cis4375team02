const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')
var app = express()
 
const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}))



app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('Server started <3 ...'));