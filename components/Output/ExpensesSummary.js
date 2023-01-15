import {View,Text,StyleSheet} from 'react-native';
import { Colors } from '../../colors/style';

function ExpensesSummary({period, expenses}) {

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    return (
            <View style={styles.container}>
                <Text style={styles.period}>{period}</Text>
                <Text style={styles.sum}>{expensesSum.toFixed(2)}</Text>
            </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: Colors.primary300, 
    },
    sum: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary800, 
    }
})
