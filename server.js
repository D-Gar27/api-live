import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import multer from "multer";

dotenv.config();
const app = express();

// Import Routers

import ServicesRouter from "./routes/services.js";
import CategoryRouter from "./routes/category.js";
// import Image from "./models/Image.js";

// Middleware

app.use(express.json());
app.use(cors());
app.use("/api/back/services", ServicesRouter);
app.use("/api/back/category", CategoryRouter);

app.get("/", (req, res) =>
  res.status(200).send({ connect: true, msg: "App is running." })
);

//Storage

// const Storage = multer.diskStorage({
//   destination: "images/",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: Storage }).single("test");
// app.post("/upload", (req, res) => [
//   upload(req, res, (err) => {
//     if (err) console.log(err);
//     else {
//       const newImage = new Image({
//         name: req.file.filename,
//         img: {
//           data: req.file.fieldname,
//           contentType: "image/*",
//         },
//       });
//       newImage
//         .save()
//         .then(() => res.status(201).send("Success"))
//         .catch((er) => console.log(er));
//     }
//   }),
// ]);

// Connect to DB

const port = process.env.PORT || 5000;

const DBString =
  "mongodb+srv://htet_win_khant:abcd123@cluster0.lszthhm.mongodb.net/?retryWrites=true&w=majority";

const startConnect = async () => {
  try {
    await mongoose.connect(DBString);
    app.listen(port, () =>
      console.log(`Server is running on port [ ${port} ]`)
    );
  } catch (error) {
    return console.log(error);
  }
};

startConnect();
