const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")
const covidRoute=require("./Controllers/patientEntry")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Swathi:Swathi123@cluster0.om2gp.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/covid",covidRoute)


app.listen(3001,()=>{
    console.log("Server Running")
})