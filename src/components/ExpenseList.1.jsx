import { useContext } from 'react';
import ExpenseItem from './ExpenseItem ';
import {AppContext} from '../context/AppContext'
export default function ExpenseList() {
    const { expenses } = useContext(AppContext);
    // const expenses = [
    //     { id: 12, name: 'shopping', cost: 40 },
    //     { id: 13, name: 'holiday', cost: 400 },
    //     { id: 14, name: 'car service', cost: 50 },
    // ];
    return (
        <div>
            <h3>Evpenses : </h3>
            <ul className='list-group'>
                {expenses.map(expense => <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />)}
            </ul>
        </div>
    );
}
