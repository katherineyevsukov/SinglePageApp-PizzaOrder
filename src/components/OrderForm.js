import React from 'react'

export default function OrderForm(){

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
                        />
                    </label>
                    
                    <label>Choose Your Size: 
                        <select id="size-dropdown"
                            name='size'
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
                        />
                    </label>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                        />
                    </label>
                    <label>Banana Peppers
                        <input 
                            type="checkbox"
                            name="peppers"
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                        />
                    </label>

                    <label>Special Instructions:
                        <input
                            id="special-text"
                            type="text"
                            name="special"
                        />
                    </label>

                    <button id="order-button">Add to Order</button>
                </form>
            </div>
        </div>

    )
}