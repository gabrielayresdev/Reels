import passport from "passport";
import { Request, Router } from "express";
import userController from "../controllers/userController";
import postController from "../controllers/postController";
// Import the filesystem module
import * as fs from "fs";
import * as path from "path";
const router = Router();

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const multer = require("multer");
/* const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
  ) {
    callback(null, "uploads/videos/");
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + uniqueSuffix);
  },
}); */

/* const upload = multer({ storage: storage }); */
const upload = multer({ dest: "uploads/" });

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
/*router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser); */

router.post("/login", userController.login);

// req.file is the `avatar` file
// req.body will hold the text fields, if there were any
router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  postController.createPost
);
router.get("/post", postController.getPosts);
router.get("/files", postController.getFiles);

router.post("/file", upload.single("file"), function (req, res, next) {
  if (req.file) {
    return res.json(req.file);
    /* console.log(__dirname);
    const root = path.join(__dirname, "../..");
    console.log(root);
    const filePath = path.join(root, "uploads", req.file.filename);
    // Certifique-se de que o arquivo esteja na pasta 'uploads'
    console.log(filePath);
    if (fs.existsSync(filePath)) {
      // Envia o arquivo como resposta
      res.sendFile(filePath);
    } else {
      // Retorna um erro se o arquivo não existir
      res.status(404).json({ error: "File not found" });
    } */
  }
});

export default router;
