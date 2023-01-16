import ExpensesOutput from '../components/Output/ExpensesOutput';
import { useContext } from 'react';
import {ExpensesContext} from '../store/exp-context';

function AllExp() {
   const expCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput expenses={expCtx.expenses} expPeriod="Total" fallbackText="No expenses registered found" />
    )
}

export default AllExp;
