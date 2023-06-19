const express = require("express");
const router = express.Router();
const {
  createTale,
  showAllTales,
  deleteTails,
  editTails,
  getSingleTale,
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controller/tales");

router.route("/").get(showAllTales).post(createTale);
router.route("/:id").get(getSingleTale).delete(deleteTails).patch(editTails);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", getCurrentUser);

module.exports = router;
