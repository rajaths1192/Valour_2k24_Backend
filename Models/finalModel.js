import mongoose from "mongoose";

const FinalSchema = new mongoose.Schema({
    gameName:{
        type:String,
        required:true,
        unique:true
    },
    winners:{
        type:String,
        required:true
    },
    runners:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

export default mongoose.model('Final', FinalSchema);