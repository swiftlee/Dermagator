import {hashString} from "./stringUtils";
import {User} from "../models/User";

/**
 * This function creates the default administrator if the user does NOT exist.
 */
export const createDefaultAdmin = () => {
    const user = {
            email: 'admin@admin.com',
            name: 'Admin',
            password: hashString(process.env.DEFAULT_ADMIN),
            permissions: ['super']
        },
        opts = {upsert: true, new: true, setDefaultsOnInsert: true};
    User.findOneAndUpdate({email: 'admin@admin.com'}, user, opts, (err, result, n) => {
        if (err) throw err;

        if (!n.updatedExisting)
            console.log('Created the default administrator!');
    });

};