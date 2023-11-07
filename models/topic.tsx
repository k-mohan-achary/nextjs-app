// import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
const topicSchema = new Schema (
    {
        name:String,
        email:String,
        phone:Number,
        message:String,
        

    }, 
   { 
    timestamps :true,
   }

);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
