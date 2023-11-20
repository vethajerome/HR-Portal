import React from "react";
import { Link } from "react-router-dom";
import employeeData from "./Array1";
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
          {employeeData.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>
                <Link to={`/${employee.id}`}>{employee.name}</Link>
              </TableCell>
              <TableCell>{employee.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dummytable;