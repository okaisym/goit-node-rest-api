const express = require("express");
const { validateBody, auth, upload } = require("../midlevares");
const ctrlWrapper = require("../helpers");
const {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../controllers/auth");
const { registerSchema, loginSchema, verifySchema } = require("../schemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(registerSchema),
  ctrlWrapper(register)
);

router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));

router.post(
  "/verify",
  validateBody(verifySchema),
  ctrlWrapper(resendVerifyEmail)
);

router.post("/login", validateBody(loginSchema), ctrlWrapper(login));

router.get("/current", auth, ctrlWrapper(getCurrent));

router.post("/logout", auth, ctrlWrapper(logout));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;