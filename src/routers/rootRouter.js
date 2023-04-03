import express from "express";
import { home , getUpload, postUpload} from "../controllers/songController";
import { uploadMusic,uploadImage } from "../middlewares";


const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/upload")
.get(getUpload)
.post(uploadMusic.fields([
    {name:"music",maxCount:1}
    ,{name:"image",maxCount:1}
]),
postUpload);
 

export default rootRouter;
