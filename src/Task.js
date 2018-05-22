import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Task extends Component {
	render() {
		return(
			<ol>
				{this.props.tasks.map((task, index) => 
					<li 
						className={task.class} 
						key={index}
					>
						<i
							className='far fa-circle'
							onClick={() => this.props.onCheck(task)}
						></i>
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
	onCheck: PropTypes.func
};

export default Task;