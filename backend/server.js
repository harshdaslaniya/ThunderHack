const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
// const houseRoute = require("./routes/houseRoute");
const contactRoute = require("./routes/contactRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["http://localhost:8080"],
        credentials: true,
    })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);
// app.use("/api/products", houseRoute);
app.use("/api/contactus", contactRoute);

app.get('/', (req, res) => {
    res.send('404 NOT found');
})


const port = process.env.PORT || 3000;

// Error Handler
app.use(errorHandler);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        })
    })
    .catch(err => console.log(err));