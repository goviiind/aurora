
const express = require("express")
require("dotenv").config()
const connectDB = require("./config/db")
const cors = require("cors")
const empRoutes = require("./routes/employeeRoutes")


const app = express()
const PORT = process.env.PORT || 5000

//Database Connection
connectDB()


//Middlewares
app.use(cors())
app.use(express.json())



//Routes

app.get("/" , (req,res)=>{
    res.send("API Working..!!")
})

//Employee Routes

app.use("/api/employee" , empRoutes)




//Running Server
app.listen(PORT , () =>{
    console.log(`Server is running on ${PORT}`);
})