const express = require("express");
const router = express.Router();

const {
  joinWaitlist,
  getCount,
} = require("../controllers/waitlistController");

router.post("/waitlist", joinWaitlist);
router.get("/waitlist/count", getCount);
router.get("/waitlist", (req, res) => {
  res.json({
    success: true,
    message: "Waitlist API working"
  });
});
module.exports = router;