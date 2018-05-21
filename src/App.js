import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import Header from './Header';
import InputBar from './InputBar';
import Task from './Task';
import Nav from './Nav';
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

  handleAdd = (taskName, task) => {
    const oldTasks = JSON.parse(localStorage.getItem('tasks'));
    const newTask = task || {
      'id': oldTasks.length, 
      'name': taskName, 
      'done': false,
      'class': 'task'
    };
    console.log(newTask.id)
    const newTasks = oldTasks.concat(newTask);
    newTasks.sort(sortBy('id'));
    this.setState(state => ({
      tasks: newTasks
    }));
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  handleDelete = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    newTasks.sort(sortBy(id));
    this.setState({tasks: newTasks});
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  handleCheck = (e, oldTask) => {
    this.handleDelete(oldTask.id);
    let task = oldTask;
		if (e.target.checked) {
      task.done = true;
      task.class = 'task-completed';
    } else {
      task.done = false;
      task.class = 'task';
    }
    console.log(task);
    this.handleAdd(task.name, task);
	}

	render() {
		return (
			<div className='app-container'>
				<Header />
        <InputBar onAdd={(task) => this.handleAdd(task)}/>
        <Route
          exact
          path='/'
          render={() => (
            <Task 
              tasks={this.state.tasks} 
              onDelete={id => this.handleDelete(id)}
              onCheck={(e, task) => this.handleCheck(e, task)}
              />
          )} />
          <Nav/>
			</div>
		);
	}
}

export default App;
