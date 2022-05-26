const express = require("express");

const createPatient = require("../controller/newPatient");
const loginPatient = require("../controller/login");

const router = express.Router();

router.post("/", createPatient);
router.post("/login", loginPatient);
// router.patch('/logout/:uid', logoutPatient);
// router.get('/', getPatients);

module.exports = router;
