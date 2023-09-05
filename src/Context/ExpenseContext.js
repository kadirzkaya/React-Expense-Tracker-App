import { createContext, useState } from "react";

const ExpenseContext=createContext();

function ExpenseProvider({children}){
const [expenses, setExpenses]=useState([]);
const [income, setIncome]=useState(0);
const [expense, setExpense]=useState(0);

    const addTransaction=(data)=>{
        const amount=parseInt(data.amount);

        if (amount>0) {
            setIncome(income+amount)
        }else{
            setExpense(expense+amount)
        }
        
        setExpenses([...expenses,data])
    }

    const handleClick=(item)=>{
        const updateExpense=expenses.filter((ex)=>{
            return (ex.name!==item.name && ex.amount!==item.amount);
        })

        if (item.amount>0) {
            setIncome(income-item.amount)
        }else{
            setExpense(expense-item.amount)
        }

        setExpenses(updateExpense)
    }

    const values={
        expenses,
        addTransaction,
        income,
        expense,
        handleClick
    }

    return(
        <ExpenseContext.Provider value={values}>
            {children}
        </ExpenseContext.Provider>
    )

}

export {ExpenseProvider};

export default ExpenseContext;