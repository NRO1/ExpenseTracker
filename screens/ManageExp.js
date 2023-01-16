import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { Colors } from "../colors/style";
import CustomButton from "../components/UI/CustomButton";
import { ExpensesContext } from "../store/exp-context";
import { useContext } from "react";

function ManageExp({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const expCtx = useContext(ExpensesContext);

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

  function confirmHandler() {
    if (isEditing) {
      expCtx.updateExpense(
        expenseId,
        {
        description: "Test!!!",
        amount: 99.99,
        date: new Date("2023-01-14"),
      });
    } else {
      expCtx.addExpense({
        description: "Test",
        amount: 25.25,
        date: new Date("2023-01-15"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "add"}
        </CustomButton>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
