const express = require("express");
const {
  addclassRoom,
  addprofessor,
  adddepartment,
  addshedule,
  addstudent,
  getTimetable,
} = require("../Controllers/controller");

const router = express.Router();

router.post("/addclassRoom", addclassRoom);
router.post("/addprofessor", addprofessor);
router.post("/adddepartment", adddepartment);
router.post("/addshedule", addshedule);
router.post("/addstudent", addstudent);
router.get("/getTimetable", getTimetable);

module.exports = router;
