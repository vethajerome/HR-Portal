import React from "react";

import employeeData2 from "./Array2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Dummytable = () => {
  return (
    <div>
      <Table>
        <TableHead></TableHead>
        <TableBody>
          {employeeData2.map((employee2) => (
            <TableRow key={employee2.id}>
              <TableCell>{employee2.id}</TableCell>
              <TableCell>
              {employee2.name}
              </TableCell>
              <TableCell>{employee2.postingRequest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dummytable;