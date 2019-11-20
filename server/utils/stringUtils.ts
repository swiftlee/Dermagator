import * as bcrypt from 'bcryptjs';
import { async } from 'q';

export const hashString =function (toHash : string):string {
    let hashedStr : string = '';
    bcrypt.genSalt(10,function(err, salt) {
        bcrypt.hash(toHash, salt, function(err, hash) {
            if (err) { throw err }
            hashedStr = hash;
        })
    });

    return hashedStr;
};