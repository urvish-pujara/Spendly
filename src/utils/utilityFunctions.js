import transactions from "../data/statement";
import { preferences } from "../data/preferences";
import { transactionMap } from "../data/transactionsMap";

export const parseAmount = (str) => {
  if (typeof str === "string") return parseFloat(str.replace(/,/g, ""));
  return str;
};

const categorizeTransactions = (transactionRows, transactionType) => {
  return transactionRows.map((transaction) => {
    const matchedCategory = Object.keys(transactionMap[transactionType]).find(
      (key) => transaction.description.includes(key)
    );
    if (matchedCategory) {
      transaction.category = transactionMap[transactionType][matchedCategory];
    }
    return transaction;
  });
};

export const getTransactionRows = (transactionType) => {
  const transactionRows = transactions
    .filter((item) => item[transactionType] !== "")
    .map((item, index) => ({
      ...item,
      id: index,
      category: "",
      amount: item[transactionType],
    }));

  const categorizedTransactions = categorizeTransactions(
    transactionRows,
    transactionType
  );

  const filteredTransactions = categorizedTransactions.filter(
    (item) =>
      item.category !== "" ||
      parseAmount(item.amount) >= preferences.MIN_TRANSACTION_VALUE_TO_DISPLAY
  );

  return filteredTransactions;
};
