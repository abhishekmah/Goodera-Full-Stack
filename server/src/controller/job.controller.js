const express = require("express");

const router = express.Router();
const Job = require("../model/job.model");

router.get("", async (req, res) => {
  const job = await Job.find().lean().exec();

  return res.status(200).json({ job });
});
router.get("", async (req, res) => {
  const job = await Job.find({title:req.query.software}).lean().exec();

  return res.status(200).json({ job });
});
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id).lean().exec();

  return res.status(200).json({ job });
});

module.exports = router;