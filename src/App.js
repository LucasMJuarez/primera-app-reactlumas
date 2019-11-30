import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import Posts from './components/Posts'

class App extends Component {
    state = {
        tasks: tasks
    }
    addTask = (title, description) => {
        let newTask = {
            title,
            description,
            id: this.state.tasks.length
        }
        this.setState({  //new state
            tasks: [...this.state.tasks, newTask]
        })
    }

    deleteTask = (id) => {
        const newTasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks: newTasks });
    }

    checkDone = (id) => {
        const newTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done =! task.done
            }
            return task;
        });
        this.setState({ tasks: newTasks })

    }

    render() {
        return <div className= "cuerpo">
            
            <Router>
            <nav className="title">
            <Link to='/'>  Home </Link>
            <Link to='/posts'> Posts </Link> 
            </nav>      
                <Route exact path="/" render={() => {
                    return <div className="forms">
                        <TaskForm addTask={this.addTask} />
                        <Tasks
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            checkDone={this.checkDone}
                        />
                    </div>
                }}>
                </Route>
                <Route  path="/posts" component={Posts}/>
            </Router>
        </div>

    }
}


export default App;
