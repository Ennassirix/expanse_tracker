import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
export default function Remaining() {
    const { expenses, budget } = useContext(AppContext)
    const sum = parseInt(budget) - parseInt(expenses.reduce((total,expense) => total + expense.cost,0))
    return (
        <div className='alert alert-success'>
            <span>Remaining : {
                sum
            }
            </span>
        </div>
    )
}
