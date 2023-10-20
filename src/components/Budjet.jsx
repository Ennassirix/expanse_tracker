import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
export default function Budjet() {
    const { budget } = useContext(AppContext)
    return (
        <div className='alert alert-secondary'>
            <span>Budjet : ${budget} <button className='btn btn-primary'>Edit</button></span>
        </div>
    )
}
