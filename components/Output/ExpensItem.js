import { Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../colors/style";
import { getFormattedDate } from "../Util/date";

function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.item}>
        <View>
          <Text style={[styles.textBase, styles.desc]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountCont}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Colors.primary50,
  },
  desc: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountCont: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80
  },
  amount: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 16
  },
});
