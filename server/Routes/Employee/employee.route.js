import express from "express";
import sqlConn from "../../index.js";

const employeeRouter = express.Router();

employeeRouter.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const salary = req.body.salary;
  sqlConn.query(
    "Insert into employee (name, age, country, position, salary) values (?, ?, ?, ?, ?)",
    [name, age, country, position, salary],
    (error, rows) => {
      if (error) {
        console.log(error);
      }else{
        res.send(rows)
      }
    }
  );
});

employeeRouter.get("/employees", (req, res) => {
  sqlConn.query("SELECT * FROM employee", (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      res.send(rows);
    }
  });
});

employeeRouter.get("/employees/:id", (id, res) => {
  sqlConn.query(
    `SELECT * FROM employee where id = ?`,
    [id.params.id],
    (error, rows) => {
      if (error) {
        console.log(error);
      } else {
        res.send(rows);
      }
    }
  );
});

employeeRouter.delete("/employees/delete/:id", (id, res) => {
  sqlConn.query(
    `delete from employee where id = ?`,
    [id.params.id],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("deleted");
      }
    }
  );
});

employeeRouter.put("/employee/update/:id", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const salary = req.body.salary;
  const id = req.params.id;
  sqlConn.query(
    `UPDATE employee SET name = ?, age = ?, country =?, position =? ,salary = ? WHERE id = ?`,
    [name, age, country, position, salary, id],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

employeeRouter.get("*", (req, res) => {
  res.json("404");
});
export default employeeRouter;
