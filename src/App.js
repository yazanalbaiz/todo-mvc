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
    this.setState(prevState => {tasks: prevState.tasks.concat(task)})
  }

	render() {
		return (
			<div className='app-container'>
				<Header />
				<InputBar onAdd={this.}/>
			</div>
		);
	}
}

export default App;
