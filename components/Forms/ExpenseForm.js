import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import CustomButton from "../UI/CustomButton";
import { useState } from "react";

function ExpenseForm({onCancel, onSubmit, submitButtonLabel}) {
  const [inputsValue, setInputsValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(identifier, enteredValue) {
    setInputsValue((cur) => {
      return {
        ...cur,
        [identifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
        amount: +inputsValue.amount,
        date: new Date(inputsValue.date),
        description: inputsValue.description
    };

    onSubmit(expenseData)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputsContainer}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputsValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputsValue.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCapitalize: 'none',
          //autoCorrect: false
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputsValue.description,
        }}
      />
      <View style={styles.buttons}>
        <CustomButton mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </CustomButton>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 20,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
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
