import React from "react";
import TableRow from "./TableRow";
import "./table.css";

const EmpTable = ({ empList }) => {
  return (
    <table className="emp-table">
      <thead>
        <th>Sr No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>City</th>
      </thead>
      <tbody>
        {empList.empList !== null
          ? empList.empList.map((emp, index) => {
              return (
                <TableRow
                  key={index}
                  name={emp.name}
                  email={emp.email}
                  contact={emp.contact}
                  city={emp.city}
                  srNo={index + 1}
                />
              );
            })
          : "No data found"}
      </tbody>
    </table>
  );
};

export default EmpTable;
