import axios from 'axios';
import { TOKEN } from '../util/Constant';

export class BaseService {
	getToken = () => {
		return JSON.parse(localStorage.getItem(TOKEN));
	};

	get = async (url) => {
		return axios({
			method: 'GET',
			url,
			header: { Authorization: `Bearer ${this.getToken()}` },
		});
	};

	post = async (url, data) => {
		return axios({
			method: 'POST',
			url,
			data,
			header: { Authorization: `Bearer ${this.getToken()}` },
		});
	};

	put = async (url, data) => {
		return axios({
			method: 'PUT',
			url,
			data,
			header: { Authorization: `Bearer ${this.getToken()}` },
		});
	};

	delete = async (url) => {
		return axios({
			method: 'DELETE',
			url,
			header: { Authorization: `Bearer ${this.getToken()}` },
		});
	};
}
