import passport from "passport";
import { Router } from "express";
import userController from "../controllers/userController";
import postController from "../controllers/postController";
import multer from "multer";
import { adm } from "../middlewares/admValidationMiddleware";

const router = Router();

/* const upload = multer({ storage: storage }); */
const upload = multer({ dest: "uploads/" });

router.post("/user", userController.createUser);
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  adm,
  userController.getAllUsers
);
router.get(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  adm,
  userController.getUser
);
router.put(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  userController.updateUser
);
router.delete(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUser
);
router.post("/login", userController.login);

// req.file is the `file` file
// req.body will hold the text fields, if there were any
router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  postController.createPost
);
router.get("/post", postController.getPosts);
router.get("/files", postController.getFiles);

export default router;
