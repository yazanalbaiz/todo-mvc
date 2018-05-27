import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Task extends Component {
	state = {
		editingTask: ''
	}

	handleClick = (e, task) => {
		let target;

		if(e.target.className.includes('task')) {
			target = e.target;
		} else {
			target = e.target.parentElement;
		}

		target.classList.remove('task');
		target.classList.add('task-editing');

		this.setState({editingTask: task.name});
		target.children[2].firstElementChild.focus()
	}

	handleEdit = async (e, task) => {
		let listItem = e.target.parentElement;
		
		e.preventDefault();

		let newTask = {
			...task,
			name: e.target.editTask.value
		} 
		await this.props.onSubmit(newTask);

		listItem.classList.remove('task-editing');
		listItem.classList.add('task');
	}

	handleBlur = async (e, task) => {
		let listItem = e.target.parentElement.parentElement;

		let newTask = {
			...task,
			name: e.target.value
		} 

		await this.props.onSubmit(newTask);

		listItem.classList.remove('task-editing');
		listItem.classList.add('task');
	}

	handleChange = (task) => {
		this.setState({editingTask: task.trim()});
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
						<form
							onSubmit={(e)=>this.handleEdit(e, task)}
						>
							<input
								onBlur={(e)=>this.handleBlur(e, task)}
								onChange={(e) => this.handleChange(e.target.value)} 
								name='editTask' 
								value={this.state.editingTask}></input>
						</form>
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