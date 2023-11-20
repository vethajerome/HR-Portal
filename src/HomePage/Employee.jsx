import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import employeeData from "./Array1";

function Employee() {
  const params = useParams();
  const employee = employeeData[parseInt(params.id) - 1001];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography variant="h4">Name: {employee.name}</Typography>
      <Typography variant="h4">Employee ID: {params.id}</Typography>
    </Box>
  );
}

export default Employee;