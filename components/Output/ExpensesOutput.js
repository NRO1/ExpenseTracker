import {View, StyleSheet} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { Colors} from '../../colors/style';

const DUMMY_EXPENSE = [
{
    id: 'e1',
    description: 'shoes',
    amount: 59.99,
    date: new Date('2022-11-05')
},
{
    id: 'e2',
    description: 'apples',
    amount: 12,
    date: new Date('2022-12-03')
},
{
    id: 'e3',
    description: 'book',
    amount: 23.99,
    date: new Date('2022-05-27')
},
{
    id: 'e4',
    description: 'shoes',
    amount: 59.99,
    date: new Date('2022-12-22')
},
{
    id: 'e5',
    description: 'apples',
    amount: 12,
    date: new Date('2022-12-03')
},
{
    id: 'e6',
    description: 'book',
    amount: 23.99,
    date: new Date('2022-12-27')
},
{
    id: 'e7',
    description: 'shoes',
    amount: 59.99,
    date: new Date('2023-01-03')
},
{
    id: 'e8',
    description: 'apples',
    amount: 12,
    date: new Date('2022-01-03')
},
{
    id: 'e9',
    description: 'book',
    amount: 23.99,
    date: new Date('2022-12-27')
}
]

function ExpensesOutput({ expPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSE} period={expPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSE}/>
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: Colors.primary700,
        flex: 1,
    }
})

