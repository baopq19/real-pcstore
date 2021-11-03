import { CURRENT_USER } from '../util/Constant';

export default class UserModel {
	constructor(user) {
		this.username = user?.username;
		this.password = user?.password;
		this.email = user?.email;
		this.accessToken = user?.Token;
	}

	setAccessToken(accessToken) {
		this.accessToken = accessToken;
	}

	setCurrentUser() {
		if (!this.accessToken) return false;
		localStorage.setItem(
			CURRENT_USER,
			JSON.stringify({
				username: this.username,
				accessToken: this.accessToken,
			})
		);
		return true;
	}
}
