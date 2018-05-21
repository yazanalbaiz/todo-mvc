import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

	render() {
		return(
			<ol>
				{this.props.tasks.map((task, index) => 
					<li className='task' key={index}>{task}</li>
				)}
			</ol>
		);
	}
}

Task.propTypes = {
	tasks: PropTypes.array
};

export default Task;