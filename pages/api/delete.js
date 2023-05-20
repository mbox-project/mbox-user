const cloudinary = require("cloudinary").v2;

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    if (req.body.id) {
      cloudinary.uploader.destroy(req.body.id).then(() => {
        res.status(200).json({ message: "file deleted sucessfully" });
      });
    } else {
      res.status(400).json({ message: "id not found" });
    }
  } else {
    res.status(400).json({ message: "invalid method" });
  }
}
