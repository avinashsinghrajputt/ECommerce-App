const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI) 
  .then(() => console.log('Connected to MongoDB...'))
  .catch((error) => console.log(error));

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});