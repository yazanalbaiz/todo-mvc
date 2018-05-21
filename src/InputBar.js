import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBar extends Component {
	constructor(props) {
		super(props);
    }
    
    handleInput = e => {
        e.preventDefault();
        this.props.onAdd(e.target.task.value)
    }

	render() {
		return (
            <form onSubmit={this.handleInput}>
                <input 
                name='task'
                placeholder='What needs to be done?' 
                className='app-input'/>
            </form>
		);
	}
}

InputBar.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default InputBar;