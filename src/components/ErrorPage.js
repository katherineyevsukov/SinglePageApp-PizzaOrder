import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styling/ErrorPage.css'

export default function ErrorPage(){

    return(
        <div className='error-container'>
        <h2>We're Sorry!</h2>
        <p>There was an error processing your order...Please try again</p>
        <Link to='/pizza'>Order</Link>
        </div>
    )
}