import React, { Component } from 'react';
import Header from './Header';
import InputBar from './InputBar';
import Task from './Task';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
  }

  componentWillMount = () => {
    this.setState({tasks: JSON.parse(localStorage.getItem('tasks'))});
  }

  handleAdd = (task) => {
    let newTask = {'name': task};
    this.setState(state => ({
      tasks: state.tasks.concat(newTask)
    }));
    let newTasks = JSON.stringify(
      JSON.parse(localStorage.getItem('tasks')).concat(newTask)
    );
    localStorage.setItem('tasks', newTasks);
  }

	render() {
		return (
			<div className='app-container'>
				<Header />
        <InputBar onAdd={(task) => this.handleAdd(task)}/>
        <Task tasks={this.state.tasks}/>
			</div>
		);
	}
}

export default App;
