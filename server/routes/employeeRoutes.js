const express = require("express")
const empController = require("../controller/empController")


const router = express.Router()

//Fetch All Employees
router.get("/" ,empController().getEmployees)

//Create an emlpoyee record
router.post("/" ,empController().addEmployee)


module.exports = router