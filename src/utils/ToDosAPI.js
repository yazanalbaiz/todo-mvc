const api = process.env.REACT_APP_todos_API_URL || 'http://localhost:5001';

let token = localStorage.token;

if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	'Accept': 'application/json',
	'Authorization': token
};

export const getAll = () =>
	fetch(`${api}/todos`, { headers })
		.then(res => res.json())
		.then(data => data.todos);

export const remove = (todo) =>
	fetch(`${api}/todos/${todo.id}`, { method: 'DELETE', headers })
		.then(res => res.json())
		.then(data => data.todo);

export const create = (body) =>
	fetch(`${api}/todos`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(res => res.json());