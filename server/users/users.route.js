const express = require("express");
const router = express.Router();
const usersService = require("./service");

router.post("/api/users/add", usersService.usersAdd);

module.exports = router;
