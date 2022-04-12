import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./components/Page/Page";
import Employee from "./components/Employees/Employees";
import EmployeeDetail from "./components/Employee Detail/EmployeeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/employees" element={<Employee />}></Route>
        <Route path = "/employees/:id" element = {<EmployeeDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
