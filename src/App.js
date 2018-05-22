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
      task.class = 'task-completed';
    } else {
      task.done = false;
      task.class = 'task';
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
    this.state.tasks.map(task => {
      if (task.done) {
        this.handleDelete(task.id);
      }
    })
  }

  completeAll = () => {
    const newTasks = this.state.tasks.map(task => {
      if (!task.done){
        task.done = true;
        task.class = 'task-completed';
      } else {
        task.done = false;
        task.class = 'task';
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
              tasks={this.state.tasks.filter(task => task.class === 'task')} 
              onDelete={id => this.handleDelete(id)}
              onCheck={(e, task) => this.handleCheck(e, task)}
              />
          )} />
          <Route
          exact
          path='/completed'
          render={() => (
            <Task 
              tasks={this.state.tasks.filter(task => task.class === 'task-completed')} 
              onDelete={id => this.handleDelete(id)}
              onCheck={(e, task) => this.handleCheck(e, task)}
              />
          )} />
          <Nav
            itemsLeft={this.state.tasks.filter(task => !task.done).length || 0}
            checkCompleted={() => this.isThereCompleted()}
            clearCompleted={this.clearCompleted}
          />
			</div>
		);
	}
}

export default App;
