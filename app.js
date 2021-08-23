const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

_connectDB();

const apiRouter = require('./router/api-router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', apiRouter);



app.listen(port, () => {
    console.log(`App listen ${port}`);
})

function _connectDB() {
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
    const {connection} = mongoose;

    connection.once('open', () => {
        console.log('NongoDB database connection stablished successfully!')
    })
}