import pandas as pd

# Read the Excel file (replace 'your_file.xlsx' with your actual file name)
excel_file = 'trans.xlsx'
df = pd.read_excel(excel_file)

# Create a JavaScript array from the DataFrame
transactions = []

# Iterate over each row and create a dictionary in the required format
for _, row in df.iterrows():
    transaction = {
        "txnDate": str(row["Txn Date"]),
        "description": str(row["Description"]),
        "refNo": str(row["Ref No./Cheque No."]),
        "debit": str(row["Debit"]),
        "credit": str(row["Credit"]),
        "balance": str(row["Balance"]),
    }
    transactions.append(transaction)

# Generate JavaScript code as a string
js_code = f"export const transactions = {transactions};"

# Write the JavaScript code to a file
with open('transactions.js', 'w') as js_file:
    js_file.write(js_code)

print("JavaScript file 'transactions.js' has been created successfully.")
