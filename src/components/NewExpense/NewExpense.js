import {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setIsClicked(false);
    };
    const displayExpenseFormHandler = () => {
        if (isClicked) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
    };

    let expenseFormButton = <button onClick={displayExpenseFormHandler}>Add New Expense</button>;
    if (isClicked) {
        expenseFormButton = null;
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseExpenseForm={displayExpenseFormHandler}
                         toggleStatus={isClicked}/>
            {expenseFormButton}
        </div>
    );

};


export default NewExpense;