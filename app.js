const express = require('express');

const app = express();
const apiRouter = require('./router/api-router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', apiRouter);



app.listen(5000, () => {
    console.log('App listen 5000');
})