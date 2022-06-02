const ClassRoom = require("../model/ClassRoom.model")
const professor = require("../model/professor.model")
const department = require("../model/Department.model");
const student = require("../model/student.model");
const shedule = require("../model/student.model")

const addclassRoom = async (req, res, next) => {
  try {
    let data = await ClassRoom.insertMany([req.body]);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addprofessor = async (req, res, next) => {
  try {
    let data = await professor.insertMany([req.body]);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adddepartment = async (req, res, next) => {
  try {
    let data = await department.insertMany([req.body]);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addstudent = async (req, res, next) => {
  try {
    let data = await student.insertMany([req.body]);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addshedule = async (req, res, next) => {
  try {
    let data = await shedule.insertMany([req.body]);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getTimetable = async (req, res, next) => {
  try {
    let data = await (await shedule.find());
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addclassRoom,
  addprofessor,
  adddepartment,
  addshedule,
  addstudent,
  getTimetable,
};