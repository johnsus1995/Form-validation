import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './form.css'

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <>

            <div className='form-container'>
                <span className='close-btn'>x</span>
                <div className="form-content-left">
                    <img className='form-img' src='img/img-2.svg' alt='spaceship'></img>
                </div>

                {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />)}
            </div>




        </>
    )
}

export default Form
