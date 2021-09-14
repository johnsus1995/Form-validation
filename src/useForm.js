import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting]=useState(false);

    /*  this is how use one single function to handle changes
        in all form inputs */
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        //we are passing the values obj into validate fn which will be taken as errors
        setErrors(validate(values))
        setIsSubmitting(true)
    };

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    },[errors])

    return { handleChange, values, handleSubmit, errors }
}

export default useForm