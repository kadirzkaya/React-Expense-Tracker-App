import React, { useContext } from 'react'
import ExpenseContext from '../Context/ExpenseContext';

function History() {
    const { expenses,handleClick } = useContext(ExpenseContext);

    const renderedExpenses = expenses.map((expense, index) => {
        const amount = parseInt(expense.amount);
        return (
            <div className='item' key={index}>
                <div className='border my-2 balance d-flex position-relative'>
                    <div className='close bg-danger text-light'>
                        <button className='btn btn-danger' onClick={()=>handleClick(expense)}>x</button>
                    </div>
                    <div className={`w-100 d-flex justify-content-between p-2 border-4 border-end ${amount < 0 ? "border-danger" : "border-success"}`}>
                        <span>{expense.name}</span>
                        <span>{amount < 0 ? (<span>- &#x24; {Math.abs(amount)}</span>) : (<span>+&#x24; {amount}</span>)}</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='my-3 px-5'>
            <h3>History</h3>
            <hr />

            {renderedExpenses}
        </div>
    )
}

export default History