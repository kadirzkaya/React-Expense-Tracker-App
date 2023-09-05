import React, { useContext } from 'react'
import ExpenseContext from '../Context/ExpenseContext'

function Balance() {
    const { expenses, income, expense } = useContext(ExpenseContext);

    const totalAmount = expenses.reduce((expense, currentVal) => expense + parseInt(currentVal.amount), 0)

    return (
        <div>
            <h3>YOUR BALANCE</h3>
            <p className='display-6 fw-bold'><span>&#x24;</span> {totalAmount<0?totalAmount:totalAmount}</p>
            <div className='d-flex mx-5 balance'>
                <div className='money my-2'>
                    <h5>INCOME</h5>
                    <span className='text-success'>{income}</span>
                </div>
                <div className='money my-2'>
                    <h5>EXPENSE</h5>
                    <span className='text-danger'>{Math.abs(expense)}</span>
                </div>
            </div>
        </div>
    )
}

export default Balance