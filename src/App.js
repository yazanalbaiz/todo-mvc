import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import Header from './Header';
import InputBar from './InputBar';
import Task from './Task';
import Nav from './Nav';
//import * as api from './api';
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

  componentDidMount = () => {
    // api.getAll()
    //   .then(tasks => {
    //     //this.setState({tasks});
    //   })
  }

  handleAdd = (taskName, task) => {
    const oldTasks = JSON.parse(localStorage.getItem('tasks'));
    const newTask = task || {
      'id': oldTasks.length, 
      'name': taskName, 
      'done': false,
      'className': 'task'
    };
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

  handleCheck = (oldTask) => {
    this.handleDelete(oldTask.id);
    let task = oldTask;
		if (!oldTask.done) {
      task.done = true;
      task.className = 'task-completed';
    } else {
      task.done = false;
      task.className = 'task';
    }
    this.handleAdd(task.name, task);
  }
  
  isThereCompleted = () => {
    let flag = false;
    this.state.tasks.map(task => {
      if (task.done) flag = true;
    });
    return flag;
  }

  clearCompleted = () => {
    const tasks = this.state.tasks.filter(task => !task.done);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks });
  }

  completeAll = () => {
    let flag = false;
    let newTasks = this.state.tasks.map(task => {
      if (!task.done) flag = true;
      return task;
    });
    newTasks = this.state.tasks.map(task => {
      if(flag) {
        task.done = true;
        task.className = 'task-completed';
      } else {
        task.done = false;
        task.className = 'task';
      }
      return task;
    });
    this.setState({tasks: newTasks});
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

	render() {
		return (
			<div className='app-container'>
        <Header />
        <InputBar 
          numOfTasks={this.state.tasks.length}
          onArrowClick={() => this.completeAll()}
          onAdd={(task) => this.handleAdd(task)}/>
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
          <Route
          exact
          path='/active'
          render={() => (
            <Task 
              tasks={this.state.tasks.filter(task => task.className === 'task')} 
              onDelete={id => this.handleDelete(id)}
              onCheck={(e, task) => this.handleCheck(e, task)}
              />
          )} />
          <Route
          exact
          path='/completed'
          render={() => (
            <Task 
              tasks={this.state.tasks.filter(task => task.className === 'task-completed')} 
              onDelete={id => this.handleDelete(id)}
              onCheck={(e, task) => this.handleCheck(e, task)}
              />
          )} />
          {this.state.tasks.length > 0 && (
            <Nav
              itemsLeft={this.state.tasks.filter(task => !task.done).length || 0}
              checkCompleted={() => this.isThereCompleted()}
              clearCompleted={this.clearCompleted}
            />
          )}
			</div>
		);
	}
}

export default App;