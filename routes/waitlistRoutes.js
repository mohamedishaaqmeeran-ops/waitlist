const express = require("express");
const router = express.Router();

const {
  joinWaitlist,
  getCount,
} = require("../controllers/waitlistController");

router.post("/waitlist", joinWaitlist);
router.get("/waitlist/count", getCount);

module.exports = router;