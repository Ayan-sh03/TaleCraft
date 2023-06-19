const Tale = require("../Models/tales.js");
const User = require("../Models/userModel.js");
const express = require("express");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const createTale = async (req, res) => {
  try {
    console.log(req.body);
    const tale = await Tale.create(req.body);
    res.status(201).json({ tale });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const showAllTales = async (req, res) => {
  try {
    console.log(req.body);
    const { sortBy } = req.params;
    let tale = Tale.find();
    if (sortBy) tale = tale.sort(sortBy);

    const finaltale = await tale;
    res.status(201).json({ finaltale });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTails = async (req, res) => {
  try {
    const taleId = req.params.id;
    const deletedTale = await Tale.deleteOne({ _id: taleId });
    if (!deletedTale) {
      return res.status(404).json({ error: "Tale not found" });
    }
    return res.status(200).json({ message: "Tale deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const editTails = async (req, res) => {
  try {
    const taleId = req.params.id;
    const updatedTail = req.body;
    const tale = await Tale.findOneAndUpdate({ _id: taleId }, updatedTail, {
      new: true,
    });
    if (!tale) {
      return res.status(404).json({ error: "Tale not found" });
    }
    return res.status(200).json({ message: "Tale edited successfully", tale });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getSingleTale = async (req, res) => {
  const taleId = req.params.id;

  try {
    const tale = await Tale.findOne({ _id: taleId });
    if (!tale) {
      res
        .status(404)
        .json({ message: "Required Tale does not exist in database" });
    } else {
      res.status(200).json({ message: "Found the tale", tale });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvail = await User.findOne({ email });
  if (userAvail) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(user);

  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }

  res.json({ message: "Register the user" });
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandotort");
  }
  const user = await User.findOne({ email });
  //cpmapare pass with hashed
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("password is not valid");
  }
});

const getCurrentUser = (req, res) => {};

module.exports = {
  createTale,
  showAllTales,
  deleteTails,
  editTails,
  getSingleTale,
  registerUser,
  loginUser,
  getCurrentUser,
};
