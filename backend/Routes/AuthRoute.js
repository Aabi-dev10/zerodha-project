const { Signup, Login, VerifyUser } = require("../Controllers/AuthController.js");
const router = require("express").Router();

router.all('/', VerifyUser);
router.post('/signup', Signup);
router.post('/login', Login);

module.exports = router;
