import config from '../config/config';
import {hashString} from './stringUtils';
import {User} from '../models/User';

/**
 * This function creates the default administrator if the user does NOT exist.
 */
export const createDefaultAdmin = async () => {
	let password: string = '';
	await hashString(process.env.DEFAULT_ADMIN_PASSWORD || config.default_admin.password).then((value => password = value));
	const user = {
			email: process.env.DEFAULT_ADMIN_EMAIL || config.default_admin.email,
			name: 'Admin',
			password: await password,
			permissions: ['super']
		},
		opts = {
			upsert: true,
			new: false,
			setDefaultsOnInsert: true,
		};
	await User.findOneAndUpdate({email: 'admin@admin.com'}, user, opts, (err, result) => {
		if (err) {
			throw err;
		}
		if (result === null) {
			console.log('Created the default administrator!');
		}

	});

};
