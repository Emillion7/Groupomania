const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:userId", UserController.getUser);
router.patch("/:userId", UserController.editUser);
router.delete("/:userId", UserController.deleteUser);

module.exports = { router };
