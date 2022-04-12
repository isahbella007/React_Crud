import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/employee/";

const useEmployee = () => {
  const [employeeList, setEmployeeList] = useState(null);
  const [specificEmployee, setSpecificEmployee] = useState();

  const submitEmployeeDetails = async (
    name,
    age,
    country,
    position,
    salary
  ) => {
    console.log("Hello I am coming from the hook");
    console.log(name + age + country + position + salary);
    await axios
      .post(`${BASE_URL}`, {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary,
      })
      .then((response) => {
        console.log(response);
        alert("Inserted Successfully");
      })
      .catch((error) => {
        alert("Data could not be added");
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/employees`)
      .then((response) => {
        setEmployeeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getEmployeeById = (id) => {
    axios
      .get(`${BASE_URL}/employees/${id}`)
      .then((response) => {
        // console.log(response.data)
        setSpecificEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // setSpecificEmployee(id);
    // return(`Thanks for coming. I am id number: ${id}`)
  };

  const deleteEmployeeById = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/v1/employee/employees/delete/${id}`)
      .then(() => {
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateEmployee = (
    id,
    newName,
    newAge,
    newCountry,
    newPosition,
    newSalary
  ) => {
    console.log("I am from the hook", id + newName + newAge);
    // do the api call.
    axios
      .put(`${BASE_URL}/employee/update/${id}`, { 
        name: newName, 
        age: newAge, 
        country: newCountry, 
        position: newPosition, 
        salary: newSalary, 
        id: id
      })
      .then((response) => {
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    submitEmployeeDetails,
    getEmployeeById,
    deleteEmployeeById,
    updateEmployee,
    employeeList,
    specificEmployee,
  };
};

export default useEmployee;
