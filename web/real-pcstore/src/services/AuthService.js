/* eslint-disable no-useless-constructor */
import { API_DOMAIN } from '../util/Constant';
import { BaseService } from './BaseService';

class AuthService extends BaseService {
	END_POINT = '/auth';

	constructor() {
		super();
	}

	login = (user) => {
		const url = `${API_DOMAIN}${this.END_POINT}/login`;
		// const loginAccount = { username: user.username, password: user.password };

		return this.post(url, user);
	};

	register = (user) => {
		const url = `${API_DOMAIN}${this.END_POINT}/register`;
		// const loginAccount = { username: user.username, password: user.password };

		return this.post(url, user);
	};
}

export const authService = new AuthService();
