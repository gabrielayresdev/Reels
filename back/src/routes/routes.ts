import passport from "passport";
import { Router } from "express";
import userController from "../controllers/userController";
import postController from "../controllers/postController";
import multer from "multer";
import authController from "../controllers/authController";
import { checkAdmin } from "../middlewares/checkAdmin";
import { checkAdminOrOwner } from "../middlewares/checkAdminOrOwner";

const router = Router();

/* const upload = multer({ storage: storage }); */
const upload = multer({ dest: "uploads/" });

router.get(
  "/users",
  /* passport.authenticate("jwt", { session: false }),
  checkAdmin, */
  userController.getAllUsers
);
router.get(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdmin,
  userController.getUser
);
router.put(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminOrOwner,
  userController.updateUser
);
router.delete(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminOrOwner,
  userController.deleteUser
);
router.post("/login", authController.login);
router.post("/register", authController.register);

// req.file is the `file` file
// req.body will hold the text fields, if there were any
router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  postController.createPost
);
router.get(
  "/post",
  passport.authenticate("jwt", { session: false }),
  postController.getPost
);
router.get("/posts", postController.getPosts);
router.put(
  "/post/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminOrOwner,
  postController.updatePost
);
router.delete(
  "/post/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminOrOwner,
  postController.deletePost
);

/* router.get("/files", postController.getFiles); */

export default router;
