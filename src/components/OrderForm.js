import React, { useState, useEffect } from 'react'

const initialFormValues = {
    name: '',
    size:'',
    cheese: false,
    pepperoni: false,
    pineapple: false,
    peppers: false,
    special: '',
}

const initialFormErrors = {
    name: '',
    size:'',
    cheese: '',
    pepperoni: '',
    pineapple: '',
    peppers: '',
    special: '',
}


export default function OrderForm(){

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const handleChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = (type === 'checkox' ? checked : value)
        
        setFormValues({...formValues, [name]: valueToUse})
    }

    return(
        <div className="pizza-page">
            <div className="form-header-container">
                <h2>Build Your Own Pizza</h2>
            </div>

            <div className='form-container'>
                <h3>Build Your Pizza</h3>
                <form id="pizza-form">
                    
                    <label>Name:
                        <input
                            id="name-input"
                            type='text'
                            name='name'
                            onChange={handleChange}
                        />
                    </label>
                    
                    <label>Choose Your Size: 
                        <select id="size-dropdown"
                            name='size'
                            onChange={handleChange}
                        >
                            <option value=''>--Select One--</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>

                    <h4>Add toppings:</h4>
                    <label>Extra Cheese
                        <input 
                            type="checkbox"
                            name="cheese"
                            onChange={handleChange}
                        />
                    </label>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            onChange={handleChange}
                        />
                    </label>
                    <label>Banana Peppers
                        <input 
                            type="checkbox"
                            name="peppers"
                            onChange={handleChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                            onChange={handleChange}
                        />
                    </label>

                    <label>Special Instructions:
                        <input
                            id="special-text"
                            type="text"
                            name="special"
                            onChange={handleChange}
                        />
                    </label>

                    <button id="order-button">Add to Order</button>
                </form>
            </div>
        </div>

    )
}