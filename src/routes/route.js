const express = require("express");
const router = express.Router();


const collegecontroller = require("../controllers/collegeController")

const internController = require("../controllers/internController")

router.post("/colleges", collegecontroller.createCollege)

router.post("/interns", internController.createIntern)

router.get("/collegeDetails",collegecontroller.getInter)

module.exports = router 