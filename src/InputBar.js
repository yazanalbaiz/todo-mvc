import React, { Component } from 'react';

class InputBar extends Component {
	constructor(props) {
		super(props);
    }
    
    handleInput = task => {
        this.setState({
            task: task
        })
        console.log(task);
    }

	render() {
		return (
            <input 
            value={this.state.task}
            onChange={e => this.handleInput(e.target.value)}
            placeholder='What needs to be done?' 
            className='app-input'/>
		);
	}
}

export default InputBar;