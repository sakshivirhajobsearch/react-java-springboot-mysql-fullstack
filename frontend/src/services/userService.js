import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const getUsers = () => {
	return axios.get(API_URL);
};

export default {
	getUsers
};
