const asyncHandler = require('express-async-handler');
const { ApplyJob } = require('../model/ApplyJob');

const ApplyJobList = asyncHandler(async (req, res) => {
  const { jobId, companyId, studentId } = req.body;
  if (!jobId || !companyId || !studentId) {
    return res.status(400).json({
      message: "Technical issue"
    });
  }

  try {
    const alreadyApplied = await ApplyJob.findOne({ jobId, companyId, studentId});
    if (alreadyApplied) {
      return res.status(200).json({
        message: "Already applied"
      });
    } 
    else{
      const applyjob = await ApplyJob.create({ jobId, companyId, studentId });
      if (applyjob) {
        return res.status(200).json({
          _id: applyjob._id,
          jobId: applyjob.jobId,
          companyId: applyjob.companyId,
          studentId: applyjob.studentId
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = { ApplyJobList };
