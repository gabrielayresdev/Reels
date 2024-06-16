import passport from "passport";
import { Router } from "express";
import userController from "../controllers/userController";
import postController from "../controllers/postController";
import multer from "multer";
import authController from "../controllers/authController";
import { checkAdmin } from "../middlewares/checkAdmin";
import { checkAdminOrOwner } from "../middlewares/checkAdminOrOwner";
import commentaryController from "../controllers/commentaryController";

const router = Router();

/* const upload = multer({ storage: storage }); */
// Permite que o acesso aos arquivos armazenados na pasta uploads no servidor
const upload = multer({ dest: "uploads/" });

/* ============= USER ROUTES ============= */
router.get("/users", userController.getAllUsers);
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

/* ============= AUTH ROUTES ============= */
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get(
  "/getData",
  passport.authenticate("jwt", { session: false }),
  authController.getData
);

/* ============= POST ROUTES ============= */
router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  postController.createPost
);
router.get(
  "/post/:id",
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
router.put(
  "/handleLike/:postId",
  passport.authenticate("jwt", { session: false }),
  postController.handleLike
);

/* ============= COMMENTARY ROUTES ============= */
router.post(
  "/commentary",
  passport.authenticate("jwt", { session: false }),
  commentaryController.createCommentary
);
router.get("/commentary", commentaryController.getCommentaries);
router.put(
  "/commentary/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminOrOwner,
  commentaryController.updateCommentary
);
router.delete(
  "/commentary/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminOrOwner,
  commentaryController.deleteCommentary
);

export default router;
