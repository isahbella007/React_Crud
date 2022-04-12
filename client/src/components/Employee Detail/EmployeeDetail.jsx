import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useEmployee from "../../Hooks/useEmployee";
import Navbar from "../Navbar/Navbar";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeById();
  }, []);

  const getEmployeeById = () => {
    axios
      .get(`http://localhost:5000/api/v1/employee/employees/${id}`)
      .then((response) => {
        // console.log(response.data)
        setName(response.data[0]?.name);
        setAge(response.data[0]?.age);
        setCountry(response.data[0].country);
        setPosition(response.data[0].position);
        setSalary(response.data[0].salary);
        console.log(
          "I am gotten from the db:",
          name + age + country + position + salary
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { updateEmployee } = useEmployee();
  const submitEmployeeForm = async (event) => {
    await updateEmployee(id, name, age, country, position, salary);
    // go back to the view list page
    navigate("/employees");

    event.preventDefault();
  };

  return (
    <div>
      <Navbar />

      <div className="form-container">
        <form onSubmit={submitEmployeeForm}>
          <label>FirstName: </label>
          <input
            type="text"
            placeholder="First Name..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label>Age: </label>
          <input
            type="number"
            placeholder="Age..."
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>

          <label>Country: </label>
          <input
            type="text"
            placeholder="Country..."
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>

          <label>Position: </label>
          <input
            type="text"
            placeholder="Position..."
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>

          <label>Salary (Yearly): </label>
          <input
            type="number"
            placeholder="Wages..."
            required
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          ></input>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDetail;
