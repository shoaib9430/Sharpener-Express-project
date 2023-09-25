const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(shopRoute);


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'views', 'notFound.html'))
})



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})