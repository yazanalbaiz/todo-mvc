const endpoint = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001';

let token = localStorage.token;

if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Authorization': token
};

export const getAll = () => (
	fetch(`${endpoint}/tasks`, { headers })
		.then(res => res.json())
		.then(data => data.tasks)
);

export const add = (body) => (
	fetch(`${endpoint}/tasks/${body.id}`, {
		headers: {
			'Content-type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(body),
	}).then(res => res.json())
);

export const remove = (id) => (
	fetch(`${endpoint}/tasks/${id}`, {
		method: 'DELETE'
	}).then(res => res.json())
);

export const update = (body) => (
	fetch(`${endpoint}/tasks/${body.id}`,{
		headers: {
			'Content-type': 'application/json'
		},
		method: 'PUT',
		body: body,
	}).then(res => res.json())
);