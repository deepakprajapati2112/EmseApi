const express = require("express");
const app = express();
const connectDB = require("./database/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/",(req,res)=> {
    res.send("hi i am deepak live ");

});

app.use("/api/products",products_routes);

const start = async () => {
    try{
        await connectDB();
        app.listen(PORT,() => {
            console.log(`${PORT} connected`);

        });

    }
    catch(error){
        console.log(error);

    }
}; 