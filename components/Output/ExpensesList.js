import {  FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpensItem";

function renderExpItem(itemData) {
  return <ExpenseItem {...itemData.item} />
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

const styles = StyleSheet.create({});
