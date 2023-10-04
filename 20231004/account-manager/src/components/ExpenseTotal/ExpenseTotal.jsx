import React from "react";
import { useSelector } from "react-redux";

export default function ExpenseTotal() {
  // 모든 지출 내역 불러오기
  const expenseList = useSelector((store) => store.expense.expenseList);

  const totalExpense = expenseList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const income = useSelector((store) => store.expense.income);

  const balance = income - totalExpense;

  return (
    <>
      <div>
        <span>총 지출 : </span>
        <span>₩ {totalExpense}</span>
      </div>
      <div>
        <span>잔액 : </span>
        <span>₩ {balance}</span>
      </div>
    </>
  );
}
