import React from 'react';
import useForm from './useForm.js';
import validate from './ValidateInfo.js';
import './form.css'

const FormSignup = ({submitForm}) => {
    //destructuring variables in custome hook useForm
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm,validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! create your account
                    by filling out the information below.</h1>
                {/* USername */}
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-input"
                        value={values.username}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.username && <p>{errors.username}</p>}
                    {/* {errors.username ? null :<p>{errors.username}</p>} */}
                </div>
                {/* Email */}
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-input"
                        value={values.email}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                {/* Password */}
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-input"
                        value={values.password}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                {/* confirm password */}
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        placeholder="Confirm password"
                        className="form-input"
                        value={values.password2}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit" onClick={handleSubmit}>Sign up</button>
                <span className="form-input-login">
                    Already have an account? Login <a href="https://www.amazon.in">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
