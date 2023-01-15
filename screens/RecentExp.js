import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/Output/ExpensesOutput';

function RecentExp() {
    return (
        <ExpensesOutput expPeriod="Last 7 days" />
    )
}

export default RecentExp;

const styles = StyleSheet.create({
    
})