import React, { useContext, useState } from 'react'
import ExpenseContext from '../Context/ExpenseContext'

function Transaction() {
const [transaction,setTransaction]=useState({name:"",amount:""})

const {addTransaction}=useContext(ExpenseContext);


const handleChange=(e)=>{
    setTransaction({...transaction,[e.target.name]: e.target.value })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if (transaction.name && transaction.amount) {
        addTransaction(transaction) 
        setTransaction({name:"",amount:""})
    }
}

    return (
        <div className='w-100'>
            <div>
                <h3>Add New Transaction</h3>
                <hr />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' className='mb-1'>Transaction Name</label>
                        <input className='form-control' name='name' type='text' value={transaction.name} onChange={handleChange}/>
                    </div>
                    <div className='my-3'>
                        <label htmlFor='name' className='mb-1'>Amount <br/> (negative - expense, positive - income)</label>
                        <input className='form-control' name='amount' type='number' value={transaction.amount} onChange={handleChange}/>
                    </div>
                    <div>
                        <button className='add w-100 rounded mt-3 p-2' type='submit'>Add Transaction</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Transaction