import express from 'express';
import "./config/mongoConnect.js";

const app = express();

app.use(express.json())


app.use((err, req, res, next) =>{
    res.status(500).send({ message:err.message});
});

app.get('/', (req,res)=>{
    res.send("Server is Ready at port 1000")
});

app.listen(1000,() =>{
    console.log(`Server at //http:localhost:1000`);
});