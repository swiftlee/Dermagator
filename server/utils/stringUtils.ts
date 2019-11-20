import * as bcrypt from 'bcryptjs';

export const hashString = async (toHash : string) : Promise<string> => {
    let hashedStr : string = '';
    // Hash password before saving in database
    const salt = await bcrypt.genSalt(10);
    hashedStr = await bcrypt.hash(toHash, salt);

    return new Promise<string>((resolve, reject) => resolve(hashedStr));
};
