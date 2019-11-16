import * as bcrypt from 'bcrypt';

export const hashString = (toHash : string) : string => {
    let hashedStr : string = '';
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(toHash, salt, (err, hash) => {
            if (err) { throw err }
            hashedStr = hash;
        })
    });

    return hashedStr;
};