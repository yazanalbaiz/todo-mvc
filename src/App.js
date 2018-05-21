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


	render() {
		return (
			<div className='app-container'>
				<Header />
				<InputBar />
			</div>
		);
	}
}

export default App;
