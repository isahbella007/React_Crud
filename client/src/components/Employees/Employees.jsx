import React, { useEffect } from "react";
import useEmployee from "../../Hooks/useEmployee";
import Navbar from "../Navbar/Navbar";
import "./Employees.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Employee = () => {
  const { employeeList, deleteEmployeeById } = useEmployee();

  // console.log(employeeList);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteEmployeeById(id)
    
  };

  return (
    <div className="body">
      <Navbar />

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList?.map((items) => (
              <tr key={items.id}>
                <td>{items.name}</td>
                <td>{items.age}</td>
                <td>{items.country}</td>
                <td>{items.position}</td>
                <td>${items.salary}</td>
                <td>
                  <span>
                    <button
                      onClick={() => {
                        navigate(`/employees/${items.id}`);
                      }}
                    >
                      Edit
                    </button>
                  </span>{" "}
                  <span>
                    <button
                      onClick={() => {
                        handleDelete(items.id);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Employee;
