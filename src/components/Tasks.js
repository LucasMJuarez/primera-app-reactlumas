import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task'; //le damos los datos a tasks desde task

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task =>
        <Task
             task={task} 
             key={task.id} 
             deleteTask={this.props.deleteTask}
             checkDone={this.props.checkDone}
        />) 
    } //recorre cada una de estas tareas y por recorrido genera una unica tarea  
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
}
export default Tasks;
