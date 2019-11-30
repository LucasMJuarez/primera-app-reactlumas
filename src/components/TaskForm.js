import React, { Component } from 'react';
import './TaskForm.css'

export default class TaskForm extends Component {

    state = {    //estado inicial
        title:'',
        description: ''
    }

    onSubmit = e => {  //activo el boton enviar para q tenga efecto
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() {
        
        return (
            <div> 
                <br/>
                <form className="formas" onSubmit={this.onSubmit}> 
                <input type="text"  
                name="title"
                placeholder="Write a Task" 
                onChange={this.onChange} 
                value={this.state.title} />
                <br />
                <br />
                <textarea placeholder="Write a descripcion" 
                name= 'description'
                onChange={this.onChange}
                value={this.state.description}>
                </textarea>
                <br />
                <br />
                <input  className="buton" type="submit" />
                </form>  
                <br />
            </div>

        )
    }

}

