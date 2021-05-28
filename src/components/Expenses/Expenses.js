import {useState} from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


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
                <ExpensesChart expenses={filterExpenseItems}/>
                <ExpensesList items={filterExpenseItems} />
            </Card>
        </div>
    );
}

export default Expenses;