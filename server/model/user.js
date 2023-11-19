import mongoose from "mongoose";
{/*User Schema for Validation*/}
const userSchema = mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        username:{
                type:String,
                required:true,
                unique:true
        },
        password:{
                type:String,
                required:true
        }
})

const user = mongoose.model("user", userSchema);
export default user;