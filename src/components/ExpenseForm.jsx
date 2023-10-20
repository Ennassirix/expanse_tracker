import React, {  useState } from 'react'
export default function ExpenseForm() {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    return (
        <form action="" className=''>
            <form>
                <div className='row'>
                    <div className='col-sm'>
                        <label for='name'>Name</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            required='required'
                            type='text'
                            className='form-control'
                            id='name'
                        ></input>
                    </div>
                    <div className='col-sm'>
                        <label for='cost'>Cost</label>
                        <input
                            onChange={e => setCost(e.target.value)}
                            required='required'
                            type='number'
                            className='form-control'
                            id='cost'
                        ></input>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <button
                            type='submit'
                            className='btn btn-primary mt-3'

                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </form>
    )
}
