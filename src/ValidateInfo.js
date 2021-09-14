export default function validateInfo(values) {
    let errors = {};

    //trim() is used to avoid whitespace
    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    if (!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = "password is required";
    } else if (values.password.length < 6) {
        errors.password = "Minimum password length is six"
    }

    if (!values.password2) {
        errors.password2 = "Password is required";
    }else if( values.password2 !==values.password){
        errors.password2="Passwords donut match"
    }

    return errors;
}