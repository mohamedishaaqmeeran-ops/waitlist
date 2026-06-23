const Waitlist = require("../models/waitlistModel");

exports.joinWaitlist = async (req, res) => {
  try {
    const { fullName, email, brand, phone } = req.body;

    if (!fullName || !email || !brand || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const exists = await Waitlist.findOne({
      email: email.toLowerCase(),
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Email already joined waitlist",
      });
    }

    const data = await Waitlist.create({
      fullName,
      email,
      brand,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Joined waitlist successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getCount = async (req, res) => {
  try {
    const count = await Waitlist.countDocuments();

    res.json({
      success: true,
      total_waitlist_users: count,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};