import multer from "multer";


export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "XXXX";
  res.locals.loggedInUser = req.session.user || {};
  next();
};

export const uploadMusic = multer({dest: "uploads/music", limits:{
  fileSize : 30000000,
},
});

export const uploadImage = multer({dest:"uploads/image/", limits:{
  fileSize : 300000000,
},
})