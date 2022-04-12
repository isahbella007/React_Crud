import express from "express"; 
import employeeRouter from "./Employee/employee.route.js";

const router = express.Router(); 

router.use("/", employeeRouter); 
// router.use("/employee", viewEmployee); 

export default router; 