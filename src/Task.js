import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Task extends Component {
	

	render() {
		return(
			<ol>
				{this.props.tasks.map((task, index) => 
					<li 
						className='task' 
						key={index}
					>
						<input 
							onChange={e => this.props.onCheck(e, task)}
							type='checkbox' />
						<label>{task.name}</label>
						<span 
							onClick={() => this.props.onDelete(task.id)} 
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
};

export default Task;