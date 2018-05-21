import React, { Component } from 'react';
import Header from './Header';
import InputBar from './InputBar';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
  }
  
  handleAdd = (task) => {
    this.setState(state => ({
      tasks: state.tasks.concat(task)
    }))
  }

	render() {
		return (
			<div className='app-container'>
				<Header />
				<InputBar onAdd={(task) => this.handleAdd(task)}/>
			</div>
		);
	}
}

export default App;
