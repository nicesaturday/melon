import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title:{type:String},
    fileUrl: {type:String,required:true},
    thumbUrl:{type:String,}
});

const Song = mongoose.model("Song", songSchema);

export default Song;
