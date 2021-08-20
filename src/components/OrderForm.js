import React, { useState, useEffect } from 'react'
import '../styling/OrderForm.css'
import * as yup from 'yup';
import schema from '../formSchema'
import axios from 'axios'
import {  useRouteMatch, useHistory } from 'react-router-dom';





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




export default function OrderForm({ order, setOrder, setLoading, loading }){

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)
    
    const history = useHistory();
    const { url } = useRouteMatch()

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

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    const postNewOrder = newOrder => {
        setLoading(true)
        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                // console.log(res.data)
                history.push(`${url}/confirmation`)
                setOrder(res.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                history.push(`${url}/error`)
                setLoading(false)
            })      
    }


    ; 
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
                    <p className='form-errors'>{formErrors.name}</p>
                    
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
                    <p className='form-errors'>{formErrors.size}</p>

                    <h4>Add toppings:</h4>
                    <label className="toppings">Extra Cheese
                        <input 
                            type="checkbox"
                            name="cheese"
                            checked={formValues.cheese}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="toppings">Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            checked={formValues.pepperoni}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="toppings">Banana Peppers
                        <input 
                            type="checkbox"
                            name="peppers"
                            checked={formValues.peppers}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="toppings">Pineapple
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
                    <button
                     disabled={disabled} id="order-button">Add to Order</button>
                </form>
            </div>
             {loading && <h4>Your order is loading...</h4>}
           
        </div>

    )
}