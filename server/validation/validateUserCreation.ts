import isEmpty from 'is-empty';
import Validator from 'validator';

const validateUserCreation = (data: any) : any => {
    const errors: any = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';


    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid.';
    }

    if (Validator.isEmpty(name)) {
        errors.name = 'Name field is required.'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required.';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required.';
    }

    if (data.password !== data.password2) {
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
