import React from "react";

const TableRow = ({ srNo, name, email, contact, city }) => {
  return (
    <tr>
      <td>{srNo}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{city}</td>
    </tr>
  );
};

export default TableRow;
