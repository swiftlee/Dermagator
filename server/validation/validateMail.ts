import isEmpty from 'is-empty';
import Validator from 'validator';

const validateMail = (data: any) : any => {
    const errors: any = {};
    console.log('data: ', data);
    data.email = !isEmpty(data.email) ? data.email : '';
    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.text = !isEmpty(data.text) ? data.text : '';


    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid.';
    }

    if (Validator.isEmpty(data.subject)) {
        errors.subject = 'Subject is required.';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Your message must not be blank.'
    } else if (data.text.length < 16) {
        errors.text = 'Your message must be at least 16 characters.'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateMail;
