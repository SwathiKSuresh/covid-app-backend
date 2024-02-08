const mongoose=require("mongoose")
const covidSchema=new mongoose.Schema(
    {
        name:String,
        phone:String,
        address:String,
        symptoms:String,
        status:String
    }
)
module.exports=mongoose.model("covids",covidSchema)