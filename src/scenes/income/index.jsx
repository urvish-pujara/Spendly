import {
  Box,
  Typography,
  useTheme,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getIncomeTransactionRows } from "./utils";

const Income = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(getIncomeTransactionRows());
  // Example categories to choose from
  const categories = ["Salary", "Bonus", "Freelance", "Other"];

  const handleCategoryChange = (event, rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, category: event.target.value } : row
    );
    setRows(updatedRows);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "txnDate", headerName: "Transaction Date", flex: 1 },
    { field: "description", headerName: "Description", flex: 5 },
    { field: "refNo", headerName: "Reference No.", flex: 3 },
    {
      field: "credit",
      headerName: "Credit",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ₹{parseFloat(params.row.credit || "0").toLocaleString()}
        </Typography>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      flex: 2,
      renderCell: (params) => {
        return (
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={params.row.category || ""}
              onChange={(e) => handleCategoryChange(e, params.id)}
              label="Category"
            >
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="INCOME" subtitle="List of Transactions" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Income;
