import express from "express";
import {
  sendOtp,
  signUpUser,
  loginUser,
  forgotPassword,
  resetPassword,
  uploadResume,
  getResumes,
  checkForToken,
} from "../controllers/user.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/send-otp", sendOtp);
router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/upload-resume", upload.single("resume"), uploadResume);
router.get("/get-resumes", getResumes);

export default router;