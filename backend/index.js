const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();


const PORT = process.env.PORT || 8000;
dotenv.config();
connectDB();

app.use(cors());
app.use(bodyParser.json()); // to parse body in request
app.use('/api', require('./routes'))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});