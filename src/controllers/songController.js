import { async } from "regenerator-runtime";
import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  const music = await Song.find({});
  return res.render("home", { pageTitle: "Home" , music});
};

export const getUpload = (req,res) => {
  return res.render("upload", { pageTitle: "upload"});
}

export const postUpload = async (req,res) => {
  const {title} = req.body;
  const {music,image} = req.files;
  console.log(music,image);
  console.log(req.body);
  try{
    await Song.create({
      title,
      fileUrl: music[0].path.replace(/[\\]/g,"/") ,
      thumbUrl: image[0].path.replace(/[\\]/g,"/"),
    })
    return res.redirect("/");
  } catch(error){
    console.log(error)
    return res.status(400).render("upload",{pageTitle:"Upload",errorMessage: error._message,})
  }
}