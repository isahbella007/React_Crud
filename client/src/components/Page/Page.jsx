import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";
import useEmployee from "../../Hooks/useEmployee";
const Page = () => {
  const { submitEmployeeDetails } = useEmployee();

  const formValues = (name, age, country, position, salary) => {
    submitEmployeeDetails(name, age, country, position, salary);
  };
  return (
    <Fragment>
      <Navbar />

      <Form submitSearch={formValues} />
    </Fragment>
  );
};
export default Page;
