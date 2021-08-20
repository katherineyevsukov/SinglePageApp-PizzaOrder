import React, { useState, useEffect } from 'react'
import './OrderForm.css'
import * as yup from 'yup';
import schema from './formSchema'
import axios from 'axios'


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
    // const [disabled, setDisabled] = useState(true)
    const [order, setOrder] = useState([])

    const validateForm = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const handleChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = (type === 'checkbox' ? checked : value)
        validateForm(name, valueToUse)
        setFormValues({...formValues, [name]: valueToUse})
    }

    // useEffect(() => {
    //     schema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, [formValues])

    const postNewOrder = newOrder => {
        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                setOrder(res.data)
                
            }).catch(err => console.log(err))
            
    }

    const formSubmit = evt => {
        evt.preventDefault()
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            cheese: formValues.cheese,
            pepperoni: formValues.pepperoni,
            pineapple: formValues.pineapple,
            peppers: formValues.peppers,
            special: formValues.special,
        }
        postNewOrder(newOrder)
        setFormValues(initialFormValues)
    }

    return(
        <div className="pizza-page">
            <div className="form-header-container">
                <h2>Build Your Own Pizza</h2>
            </div>

            <div className='form-container'>
                <h3>Build Your Pizza</h3>
                <form id="pizza-form" onSubmit={formSubmit}>
                    
                    <label>Name:
                        <input
                            id="name-input"
                            type='text'
                            name='name'
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </label>
                    <p>{formErrors.name}</p>
                    
                    <label>Choose Your Size: 
                        <select id="size-dropdown"
                            name='size'
                            value={formValues.size}
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
                            checked={formValues.cheese}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            checked={formValues.pepperoni}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Banana Peppers
                        <input 
                            type="checkbox"
                            name="peppers"
                            checked={formValues.peppers}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                            checked={formValues.pineapple}
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
            <h4>My orders:</h4>
            <p>{order.name}</p>
            <p>{order.size}</p>
            
        </div>

    )
}