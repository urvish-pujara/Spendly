import {
  Box,
  Typography,
  useTheme,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { GridToolbar, DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getTransactionRows, parseAmount } from "../../utils/utilityFunctions";
import { categories } from "../../data/categories";
const Income = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(getTransactionRows("credit"));

  const handleCategoryChange = (event, rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, category: event.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleDiscardTransaction = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  const totalIncome = rows.reduce(
    (total, row) => total + parseAmount(row.credit),
    0
  );
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "txnDate", headerName: "Transaction Date", flex: 1 },
    { field: "description", headerName: "Description", flex: 5 },
    { field: "refNo", headerName: "Reference No.", flex: 3 },
    {
      field: "credit",
      headerName: "Credit amount",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ₹{params.row.credit}
        </Typography>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      flex: 2,
      renderCell: (params) => (
        <FormControl fullWidth>
          <Select
            value={params.row.category || "Select"}
            onChange={(e) => handleCategoryChange(e, params.id)}
            label="Category"
          >
            {categories["credit"].map((cat, index) => (
              <MenuItem key={index} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <button
          onClick={() => handleDiscardTransaction(params.id)}
          style={{
            backgroundColor: colors.redAccent[500],
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Discard
        </button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Income" subtitle={`Total Income: ₹${totalIncome}`} />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Income;
