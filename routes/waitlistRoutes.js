const express = require("express");
const router = express.Router();

const {
  joinWaitlist,
  getCount,
  getAllUsers,
} = require("../controllers/waitlistController");

router.post("/waitlist", joinWaitlist);
router.get("/waitlist", getAllUsers);
router.get("/waitlist/count", getCount);

module.exports = router;