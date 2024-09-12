const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { registerSchema, emailSchema } = require("../../schemas/auth");

const ctrl = require("../../controllers/auth");
 
const router = express.Router();

router.post('/register', validateBody(registerSchema), ctrl.register);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post('/verify', validateBody(emailSchema), ctrl.resendVerifyEmail)

router.post('/login', validateBody(registerSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/avatars', authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;