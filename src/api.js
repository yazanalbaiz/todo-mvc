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

export const remove = (task) => (
	fetch(`${endpoint}/tasks/${task.id}`, {
		method: 'DELETE',
		headers
	}).then(res => res.json())
		.then(data => data.task)
);

export const create = (body) =>
	fetch(`${endpoint}/tasks`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(res => res.json());

export const checkOne = (body) => (
	fetch(`${endpoint}/tasks/${body.id}`,{
		headers: {
			...headers,
			'Content-type': 'application/json'
		},
		method: 'PUT',
		body: JSON.stringify(body),
	}).then(res => res.json())
);

export const clearDone = () => (
	fetch(`${endpoint}/tasks`, {
		method: 'DELETE',
		headers
	}).then(res => res.json())
		.then(data => data)
);

export const checkAll = () => (
	fetch(`${endpoint}/tasks`, {
		method: 'PUT',
		headers
	}).then(res => res.json())
		.then(data => data)
);