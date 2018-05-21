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

  handleAdd = task => {
    const oldTasks = JSON.parse(localStorage.getItem('tasks'));
    const newTask = {'id': oldTasks.length, 'name': task, 'done': false};
    console.log(newTask.id)
    this.setState(state => ({
      tasks: state.tasks.concat(newTask)
    }));
    const newTasks = JSON.stringify(
      oldTasks.concat(newTask)
    );
    localStorage.setItem('tasks', newTasks);
  }

  handleDelete = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks});
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  handleCheck = (e, task) => {
		if (e.target.checked) {
      task.done = true;;
    } else {
      task.done = false;
    }
	}

	render() {
		return (
			<div className='app-container'>
				<Header />
        <InputBar onAdd={(task) => this.handleAdd(task)}/>
        <Task 
          tasks={this.state.tasks} 
          onDelete={id => this.handleDelete(id)}
          onCheck={(e, task) => this.handleCheck(e, task)}/>
			</div>
		);
	}
}

export default App;
