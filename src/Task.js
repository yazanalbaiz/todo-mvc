import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Task extends Component {
	handleClick = (e, task) => {
		let target;

		if(e.target.className.includes('task')) {
			target = e.target;
		} else {
			target = e.target.parentElement;
		}

		target.innerHTML = '';

		let newForm = document.createElement('form');
		let newInput = document.createElement('input');
		
		newForm.addEventListener('submit', (e) => {
			e.preventDefault();
			let newTask = {
				...task,
				name: e.target.newName.value
			} 
			this.props.onSubmit(newTask);
		});

		newInput.value = task.name;
		newInput.name = 'newName';

		newForm.appendChild(newInput);
		target.appendChild(newForm);
	}
	render() {
		return(
			<ol>
				{this.props.tasks.map((task, index) => 
					<li 
						className={task.className} 
						key={index}
						onDoubleClick={(e)=>this.handleClick(e, task)}
					>
						<i
							className='far fa-circle'
							onClick={() => this.props.onCheck(task)}
						></i>
						<label>{task.name}</label>
						<span 
							onClick={() => this.props.onDelete(task)} 
							className='delete-btn'
						>&times;</span>
					</li>
				)}
			</ol>
		);
	}
}

Task.propTypes = {
	tasks: PropTypes.array,
	onDelete: PropTypes.func,
	onCheck: PropTypes.func
};

export default Task;