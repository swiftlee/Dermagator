import isEmpty from 'is-empty';
import Validator from 'validator';

const validateUserCreation = (data: any) : any => {
    const errors: any = {};
    console.log(data);
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password1 = !isEmpty(data.password1) ? data.password1 : '';


    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid.';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required.'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required.';
    }

    if (Validator.isEmpty(data.password1)) {
        errors.password1 = 'Confirm password field is required.';
    }

    if (data.password !== data.password1) {
        errors.password = 'Password and confirm password do not match.';
    }

    if (data.password.length < 8) {
        errors.password = 'Your password must be at least 8 characters.w';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateUserCreation;
