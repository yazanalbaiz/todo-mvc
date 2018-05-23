const endpoint = 'https://www.jsonstore.io/c2161c0489c4f6a3d6a37fa92403b3265663b403ea363364cd7ecade73f39254';

export const getAll = () => (
	fetch(`${endpoint}/`)
		.then(res => res.json())
		.then(data => data.tasks)
);