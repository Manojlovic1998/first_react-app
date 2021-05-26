import {useState} from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
    const [year, setFilterYear] = useState('');
    const updateFilterYear = (filterYear) => {
        setFilterYear(filterYear);
    };

    const filterExpenseItems = props.items.filter((item) => {
            return item.date.toLocaleString('en-eu', {year: 'numeric'}) === year;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={year} onChangeFilterYear={updateFilterYear}/>
                {filterExpenseItems.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                        title={expense.title}/>))}
            </Card>
        </div>
    );
}

export default Expenses;