import ExpensesOutput from '../components/Output/ExpensesOutput';
import { useContext } from 'react';
import { getDateMinusDays } from '../components/Util/date';
import {ExpensesContext} from '../store/exp-context';

function RecentExp() {
    const expCtx = useContext(ExpensesContext);

    const recentExpenses = expCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7)
        return (expense.date >= date7DaysAgo)
    })
   

    return (
        <ExpensesOutput expenses={recentExpenses} expPeriod="Last 7 days" fallbackText="No expenses registered for the last 7 days" />
    )
}

export default RecentExp;
