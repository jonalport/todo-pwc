import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Sorter from './components/Sorter';
import Count from './components/Count';
import { getSortedTasksAsArray } from './lib/helpers';
import './App.css';

class App extends Component {
  state = {
    tasks: {},
    sortBy: 'date',
  };

  setSortBy = (sortBy) => {
    this.setState({ sortBy });
  };

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: {
        ...prevState.tasks,
        [task.id]: task,
      },
    }));
  };

  toggleComplete = (id) => {
    const task = { ...this.state.tasks[id] };
    task.isComplete = !task.isComplete;
    this.addTask(task);
  };

  setPriority = (id, priority) => {
    const task = { ...this.state.tasks[id] };
    task.priority = priority;
    this.addTask(task);
  };

  deleteTask = (id) => {
    const { ...tasks } = this.state.tasks;
    delete tasks[id];
    this.setState({ tasks });
  };

  render() {
    let tasks = null;
    const tasksExist = !!Object.keys(this.state.tasks).length;

    if (tasksExist) {
      tasks = getSortedTasksAsArray(this.state.tasks, this.state.sortBy);
    }

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__heading">Things to do</h1>
        </header>

        <main className="App__main">
          <AddTaskForm addTask={this.addTask} />

          {!tasksExist && (
            <div className="App__emptyMessage">You currently have nothing to do!</div>
          )}

          {tasksExist && (
            <>
              <div className="App__meta">
                <Sorter
                  sortBy={this.state.sortBy}
                  setSortBy={this.setSortBy}
                />

                <Count tasks={tasks} />
              </div>

              <TaskList
                tasks={tasks}
                toggleComplete={this.toggleComplete}
                onDelete={this.deleteTask}
                setPriority={this.setPriority}
              />
            </>
          )}
        </main>

        <footer className="App__footer">
          Do the things &copy; 2020
        </footer>
      </div>
    );
  }
}

export default App;
