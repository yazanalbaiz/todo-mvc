import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBar extends Component {
    handleInput = e => {
        e.preventDefault();
        this.props.onAdd(e.target.task.value);
        e.target.task.value = '';
    }

	render() {
		return (
            <form onSubmit={this.handleInput}>
                {this.props.numOfTasks > 0 && (
                    <i 
                    onClick={this.props.onArrowClick}
                    className="fas fa-angle-down"></i>
                )}
                <input 
                name='task'
                placeholder='What needs to be done?' 
                className='app-input'
                autoComplete='off'/>
            </form>
		);
	}
}

InputBar.propTypes = {
    numOfTasks: PropTypes.number.isRequired,
    onArrowClick: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default InputBar;