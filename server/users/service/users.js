const mongoose = require("mongoose");

const User = require("../../models/users");

const usersAdd = async (req, res) => {
  const data = req.body;
  const user = new User(data);
  try {
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  usersAdd,
};
