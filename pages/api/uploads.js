const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;

export const config = {
  api: {
    bodyParser: false,
  },
};
cloudinary.config({
  cloud_name: "dpw7ngpfl",
  api_key: "738154117769834",
  api_secret: "kR9qVZOcBK-ozbAy3UqmplwHfL4",
});

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 10000,
  },
}).single("file");

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload(req, res, (error) => {
      if (error) {
        // console.error(error);
        console.log(error, req.body, "first error");
        res.status(500).json({ error });
      } else {
        const file = req.file;
        console.log(req);
        cloudinary.uploader.upload(file.path, (error, result) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error });
          } else {
            console.log(result);
            fs.unlink(file.path, (err) => {
              if (err) throw err;
              console.log("file was deleted");
            });
            res.status(200).json({
              publicId: result.public_id,
              imageUrl: result.url,
              isThumbnail: true,
            });
          }
        });
      }
    });
  } else {
    res.status(404).json({ message: "Invalid request method" });
  }
}
