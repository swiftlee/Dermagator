import isEmpty from 'is-empty';
import Validator from 'validator';

const validateUserExist = (data: any) => {
    const errors : any = {};

    data.email = !isEmpty(data.email) ? data.email : '';


};

export default validateUserExist;