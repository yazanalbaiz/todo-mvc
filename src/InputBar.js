import React, { Component } from 'react';

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

export default InputBar;