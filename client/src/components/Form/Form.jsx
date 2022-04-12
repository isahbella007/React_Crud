import React, { useState } from "react";
import "./Form.css";
const Form = ({ submitSearch }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitSearch(name, age, country, position, salary);
    setName(""); setAge(0); setCountry(""); setPosition(""); setSalary(0); 
  };
  return (
    <div className="form-container">
      <form>
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

        <button type="submit" className="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
