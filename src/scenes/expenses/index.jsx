import {
  Box,
  Typography,
  useTheme,
  MenuItem,
  Select,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { GridToolbar, DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getTransactionRows, parseAmount } from "../../utils/utilityFunctions";
import { categories } from "../../data/categories";

const Expense = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(
    getTransactionRows("debit").map((row) => ({
      ...row,
      note: "", // Default note value
      tags: "", // Default tags value
    }))
  );

  const handleCategoryChange = (event, rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, category: event.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleNoteChange = (event, rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, note: event.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleTagsChange = (event, rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, tags: event.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleDiscardTransaction = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  const totalExpense = rows.reduce(
    (total, row) => total + parseAmount(row.debit),
    0
  );
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "txnDate", headerName: "Transaction Date", flex: 1 },
    { field: "description", headerName: "Description", flex: 5 },
    {
      field: "debit",
      headerName: "Debit amount",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ₹{params.row.debit}
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
            value={params.row.category || ""}
            onChange={(e) => handleCategoryChange(e, params.id)}
            label="Category"
          >
            {categories["debit"].map((cat, index) => (
              <MenuItem key={index} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      field: "note",
      headerName: "Note / Comment",
      flex: 3,
      renderCell: (params) => (
        <TextField
          fullWidth
          value={params.row.note || ""}
          onChange={(e) => handleNoteChange(e, params.id)}
          placeholder="Enter a note"
          variant="outlined"
          size="small"
        />
      ),
    },
    {
      field: "tags",
      headerName: "Tags",
      flex: 3,
      renderCell: (params) => (
        <TextField
          fullWidth
          value={params.row.tags || ""}
          onChange={(e) => handleTagsChange(e, params.id)}
          placeholder="Add tags (comma-separated)"
          variant="outlined"
          size="small"
        />
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
      <Header title="Expenses" subtitle={`Total Expense: ₹${totalExpense}`} />
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

export default Expense;
