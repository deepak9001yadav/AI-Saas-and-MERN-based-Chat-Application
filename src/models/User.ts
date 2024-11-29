// Here we create a Schema of data base using mongoose.
import mongoose from "mongoose";
import {randomUUID} from 'crypto';

// In this Schema we Require name,email,password and user Chats.

const chatSchema = new mongoose.Schema({
    id: {
        type:String,
        default: randomUUID(),

    },
    role:{
        type:String,
        required:true,

    },
    content:{
        type:String,
        required: true,

    },

});
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type : String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,

    },
    chats : [chatSchema],


});

export default mongoose.model("User", userSchema);