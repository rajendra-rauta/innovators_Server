const express = require("express");
const adminControler = require("../controllers/admin_controler");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin_middleware");



const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware,adminControler.getAllUser);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware,adminControler.updateUserById);
router.route("/users/:id").get(authMiddleware, adminMiddleware,adminControler.getUserById);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminControler.deleteUserBYid);
router.route("/contacts").get(authMiddleware,adminMiddleware, adminControler.getAllContact);
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware,adminControler.deleteContactBYid);

module.exports = router;