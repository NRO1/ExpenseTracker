import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { Colors } from "../colors/style";
import { ExpensesContext } from "../store/exp-context";
import { useContext } from "react";
import ExpenseForm from "../components/Forms/ExpenseForm";

function ManageExp({ route, navigation }) {
  const expCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  
  const selectedExp = expCtx.expenses.find(
    (exp) => exp.id === expenseId
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExp() {
    expCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expCtx.updateExpense(
        expenseId,expenseData
      );
    } else {
      expCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'update' : 'Add'} onSubmit={confirmHandler} defaultValues={selectedExp} />
      {isEditing && (
        <View style={styles.deleteCont}>
          <IconButton
            icon="trash"
            size={36}
            color={Colors.error500}
            onPress={deleteExp}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary200,
  },
  deleteCont: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary800,
    alignItems: "center",
  },
});
