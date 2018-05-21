import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Task extends Component {
	setIcon = task => {
		if (task.done) {
			return 'far fa-check-circle';
		} else {
			return 'far fa-circle';
		}
	}

	render() {
		return(
			<ol>
				{this.props.tasks.map((task, index) => 
					<li 
						className={task.class} 
						key={index}
					>
						<i
							className={this.setIcon(task)}
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