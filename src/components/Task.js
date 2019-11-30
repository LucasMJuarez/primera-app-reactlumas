import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css'

class Task extends Component{
    
    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through': 'none'
        }
    }


    render(){
        const {task} = this.props;
       
        return <div className="lista" >
            <ul className="listainterna">
           
            
            <td  style={this.StyleCompleted()}> 
            <ul />
            <ul>
            { task.title } - 
             { task.description } -
            { task.done } -
            { task.id } 
            </ul>
            </td>
            <td >
                <ul>
                 <input type='checkbox' onChange={this.props.checkDone.bind(this, task.id)} hr />
                </ul>
            </td>
            <td>
                <ul>
                <button className="btnDelete" onClick={this.props.deleteTask.bind(this, task.id)}> 
                 X
                </button>
                </ul>
            </td>

        
        </ul>
        </div>

    } //toma cada uno de los datos y los pinta en un div
}

Task.propTypes = { 
    task: PropTypes.object.isRequired,
}



export default Task;