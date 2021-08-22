const express = require('express');
const mongoose = require('mongoose');

const app = express();

// _connectDB();

// mongoose.connect('mongodb+srv://psarukli96:psaruk123@houses.ugrow.mongodb.net/Houses', { useNewUrlParser: true }, {useUnifiedTopology: true});

const apiRouter = require('./router/api-router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', apiRouter);



app.listen(5000, () => {
    console.log('App listen 5000');
})

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/houses');
    const {connection} = mongoose;

    connection.on('error', (error) => {
        onmouseleave.log(error);
    })
}