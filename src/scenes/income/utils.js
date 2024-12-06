import transactions from "../../data/statement";

const categorizeIncomeTransactions = (incomeTransactions) => {
  return incomeTransactions;
};

export const getIncomeTransactionRows = () => {
  const incomeTransactions = transactions
    .filter((item) => item.credit !== "")
    .map((item, index) => ({
      ...item,
      id: index,
      category: "",
    }));

  return categorizeIncomeTransactions(incomeTransactions);
};
