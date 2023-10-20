import React from 'react'
import { TiDelete } from 'react-icons/ti';
export default function ExpenseItem({ id, name, cost }) {
    return (
        <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div className='badge badge-primary badge-pill mr-3'>
                <span>{cost}</span>
            </div>
            <TiDelete size='1.5em'></TiDelete>
        </li>
    )
}
