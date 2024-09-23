const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/transactionRoutes");
const app = express();

//Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/inversion-app",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("error al contectar con MongoDB", err));
    
//Middleware para el body de las peticiones

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", transactionRoutes)

//Iniciar server

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto ${PORT}");
});