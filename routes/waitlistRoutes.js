const express = require("express");
const router = express.Router();

const {
  joinWaitlist,
  getCount,
} = require("../controllers/waitlistController");

router.post("/waitlist", joinWaitlist);
router.get("/waitlist/count", getCount);
// routes/waitlistRoutes.js

router.get("/waitlist", async (req, res) => {
  try {
    const users = await Waitlist.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      total: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
module.exports = router;