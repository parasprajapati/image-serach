import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 99ae057754f8d4d83309313455049a6358fbb7eb298c7bf97acfbca4d8339cda',
	},
});