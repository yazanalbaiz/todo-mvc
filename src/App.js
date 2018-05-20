import React, { Component } from 'react';
import Header from './Header';
import InputBar from './InputBar';
import './App.css';

class App extends Component {
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
