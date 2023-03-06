import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import CustomButton from "../UI/CustomButton";
import { useState } from "react";
import { getFormattedDate } from "../Util/date";
import { Colors } from '../../colors/style';

function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues}) {
  const [inputs, setInputs] = useState({
    amount: {value: defaultValues ?  defaultValues.amount.toString() : '',
    isValid: true
  },
    date: {value: defaultValues ? getFormattedDate(defaultValues.date) : '',
    isValid: true
  },
    description: {value: defaultValues ?  defaultValues.description : '',
    isValid: true
  }
  });

  function inputChangeHandler(identifier, enteredValue) {
    setInputs((cur) => {
      return {
        ...cur,
        [identifier]: { value: enteredValue, isValid: true}
      };
    });
  }

  function submitHandler() {
    const expenseData = {
        amount: +inputs.amount.value,
        date: new Date(inputs.date.value),
        description: inputs.description.value
    };

    const amtIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descIsValid = expenseData.description.trim() > 0;

    if (!amtIsValid || !dateIsValid || !descIsValid) {
      setInputs((curInputs) => {
        return {
        amount: { value: curInputs.amount.value, isValid: amtIsValid },
        date: { value: curInputs.date.value, isValid: dateIsValid },
        description: { value: curInputs.description.value, isValid: descIsValid },
      }})
    }

    onSubmit(expenseData)
  }

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

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
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
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
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (<Text style={styles.errorText}>Invalid input - please check your input values</Text>)}
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
  errorText: {
    textAlign: "center",
    color: Colors.error500,
    margin: 8
  }
});
